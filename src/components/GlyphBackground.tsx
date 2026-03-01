"use client";

import { useEffect, useRef } from "react";

export function GlyphBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const SPACING = 20; // Dot matrix spacing
    const MIN_RADIUS = 0.5;
    const MAX_RADIUS = 2; // Not too big, very subtle
    const INTERACTION_RADIUS = 150; // How far the mouse affects

    type Dot = { x: number; y: number; opacity: number; targetOpacity: number };
    const dots: Dot[] = [];

    let mouse = { x: -1000, y: -1000 };

    const initDots = () => {
      dots.length = 0;
      for (let x = SPACING / 2; x < width; x += SPACING) {
        for (let y = SPACING / 2; y < height; y += SPACING) {
          dots.push({ x, y, opacity: 0.05, targetOpacity: 0.05 }); // Start dim
        }
      }
    };

    initDots();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initDots();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      dots.forEach((dot) => {
        // Calculate distance from mouse
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Calculate a subtle wave effect based on time and position
        const wave = Math.sin(dot.x * 0.01 + time) * Math.cos(dot.y * 0.01 + time);
        const baseOpacity = 0.05 + wave * 0.02;

        if (dist < INTERACTION_RADIUS) {
          // Inner glow is brighter
          const intensity = 1 - dist / INTERACTION_RADIUS;
          dot.targetOpacity = Math.max(baseOpacity, intensity * 0.6); // cap brightness at 60%
        } else {
          dot.targetOpacity = baseOpacity;
        }

        // Smooth transition to target opacity
        dot.opacity += (dot.targetOpacity - dot.opacity) * 0.1;

        ctx.beginPath();
        // Slightly larger radius when brighter
        const radius = MIN_RADIUS + (MAX_RADIUS - MIN_RADIUS) * dot.opacity;
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${dot.opacity})`;
        ctx.fill();
        ctx.closePath();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 mix-blend-screen opacity-70"
    />
  );
}
