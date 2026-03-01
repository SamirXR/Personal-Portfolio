"use client";

import { motion, Variants } from "framer-motion";
import { GlyphBackground } from "@/components/GlyphBackground";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const sections = ["HOME", "ABOUT", "PROJECTS", "VISION", "CONTACT"];

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const projects = [
    {
      year: "2025",
      title: "VOID INTERFACE",
      description: "A minimal design system built on the principle that the best interface is no interface. Zero-color UI framework for ambient computing.",
      role: "Lead Designer & Developer",
      tech: "REACT  TYPESCRIPT  DESIGN SYSTEMS"
    },
    {
      year: "2024",
      title: "GLYPH PROTOCOL",
      description: "A conceptual framework interpreting structural data into light-based visual feedback. Raw, unfiltered, and deeply mechanical.",
      role: "System Architect",
      tech: "NEXT.JS  WEBGL  FRAMER MOTION"
    },
    {
      year: "2023",
      title: "ONYX KERNEL",
      description: "Low-level system aesthetics brought to the web. Stripping away the excess to expose the beautiful structure within.",
      role: "Core Contributor",
      tech: "RUST  WEBASSEMBLY  TAILWIND"
    }
  ];

  return (
    <main className="min-h-screen overflow-x-hidden selection:bg-white selection:text-black font-mono relative cursor-crosshair">
      <GlyphBackground />

      {/* FIXED NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-start z-50 text-xs md:text-sm mix-blend-difference tracking-widest">
        <div className="flex flex-col gap-1">
          <span className="font-bold">PERSONAL PORTFOLIO</span>
          <span className="opacity-50">v1.0.0</span>
        </div>
        <div className="flex flex-col gap-2 items-end">
          {sections.map((sec) => (
            <a key={sec} href={`#${sec.toLowerCase()}`} className="hover:opacity-100 opacity-50 transition-opacity">
              [ {sec} ]
            </a>
          ))}
        </div>
      </nav>

      {/* CONTENT */}
      <div className="relative z-10 w-full px-6 md:px-24">
        
        {/* HERO */}
        <section id="home" className="h-screen flex items-end pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1 className="text-[12vw] leading-[0.85] tracking-tighter font-bold uppercase mix-blend-difference">
              SAMIR
              <br />
              <span className="opacity-70">YZY.</span>
            </h1>
            <p className="mt-8 text-sm md:text-lg opacity-60 tracking-widest uppercase flex items-center gap-4">
              <span className="w-12 h-[1px] bg-white block"></span>
              Software Engineer / Designer
            </p>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="min-h-screen flex flex-col justify-center py-24 border-t border-white/10 relative">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" as any }}
            className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-center md:items-stretch"
          >
            <div className="flex-1 w-full flex flex-col justify-center">
              <h2 className="text-sm tracking-[0.5em] mb-12 opacity-50">01 // ABOUT</h2>
              <p className="text-3xl lg:text-5xl max-w-4xl leading-tight font-medium tracking-tight mb-8">
                Hello! I'm Samir, a Computer Science student from New Delhi, India, building systems where software meets real-world impact.
              </p>
              <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl">
               I enjoy working across AI, backend systems, neural networks, computer vision, and experimental projects ; especially ideas that feel slightly impossible at first. Currently, I’m building projects around real-time language translation, AI-powered accessibility systems, and advanced steganography research focused on privacy and robustness.
              </p>
            </div>
            
            <div className="w-full md:w-5/12 lg:w-1/3 relative group mx-auto shrink-0 mt-16 md:mt-0">
              {/* Decorative brutalist framing elements */}
              <div className="absolute -inset-4 border border-white/10 hidden md:block"></div>
              <div className="absolute -inset-4 border border-white/20 scale-[1.02] opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 hidden md:block"></div>
              
              {/* Corner crosshairs */}
              <div className="absolute -top-6 -left-6 w-3 h-3 border-t border-l border-white/40"></div>
              <div className="absolute -top-6 -right-6 w-3 h-3 border-t border-r border-white/40"></div>
              <div className="absolute -bottom-6 -left-6 w-3 h-3 border-b border-l border-white/40"></div>
              <div className="absolute -bottom-6 -right-6 w-3 h-3 border-b border-r border-white/40"></div>

              <div className="relative aspect-[4/5] bg-neutral-900 overflow-hidden">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                <img 
                  src="/samir.jpg" 
                  alt="Samir" 
                  className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:brightness-100 hover:scale-[1.03] transition-all duration-700" 
                />
                
                {/* Tech scanline effect overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] z-10 pointer-events-none opacity-40"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-4 flex justify-between items-end z-20 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex flex-col gap-1">
                    <span className="w-8 h-[2px] bg-white/50 mb-1"></span>
                    <span className="text-[9px] tracking-[0.2em] font-mono opacity-50">SUBJECT:</span>
                    <span className="text-xs tracking-[0.3em] font-bold">SAMIR</span>
                  </div>
                  <div className="text-[9px] tracking-widest px-2 py-1 border border-white/20 backdrop-blur-md">
                    [ RECORD_01 ]
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="min-h-screen flex flex-col justify-center py-32 border-t border-white/10">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" as any }}
          >
            <h2 className="text-sm tracking-[0.5em] mb-24 opacity-50">02 // PROJECTS</h2>
            <div className="flex flex-col gap-32">
              {projects.map((proj, i) => (
                <div key={i} className="flex flex-col items-start text-left max-w-3xl">
                  <span className="text-xs tracking-widest text-neutral-500 mb-6">{proj.year}</span>
                  <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                    {proj.title}
                  </h3>
                  <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                    {proj.description}
                  </p>
                  <p className="text-neutral-500 text-sm tracking-wide mb-6">
                    {proj.role}
                  </p>
                  <p className="text-neutral-500 text-xs tracking-[0.2em] uppercase mb-12">
                    {proj.tech}
                  </p>
                  <a href="#" className="text-neutral-400 hover:text-white transition-colors uppercase tracking-[0.2em] text-sm flex items-center gap-2 group">
                    VIEW PROJECT <span className="group-hover:translate-x-1 transition-transform">-&gt;</span>
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* VISION */}
        <section id="vision" className="min-h-screen flex flex-col justify-center py-24 border-t border-white/10">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" as any }}
          >
            <h2 className="text-sm tracking-[0.5em] mb-12 opacity-50">03 // VISION</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
                FORM <br/>FOLLOWS <br/><span className="italic font-light">FUNCTION</span>.
              </h3>
              <p className="text-lg md:text-2xl opacity-70 max-w-md leading-relaxed">
                Design should not yell. It should whisper. 
                Like the dot-matrix glowing in the dark, 
                we seek a pure signal amidst the noise. 
                A raw, unapologetic presence with a touch of "Minimalism".
              </p>
            </div>
          </motion.div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="min-h-screen flex flex-col justify-center py-24 justify-items-center items-center text-center border-t border-white/10">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" as any }}
            className="w-full flex flex-col items-center"
          >
            <h2 className="text-sm tracking-[0.5em] mb-12 opacity-50">04 // CONTACT</h2>
            <a href="mailto:samiryzy@gmail.com" className="group flex items-center relative inline-flex pb-4" title="mailto:samiryzy@gmail.com">
              <span className="text-5xl md:text-[8vw] tracking-tighter hover:italic transition-all duration-300">
                INITIATE
              </span>
              <span className="inline-block w-4 md:w-8 bg-neutral-300 ml-2 md:ml-4 animate-pulse" style={{ height: "1em", verticalAlign: "baseline", marginTop: "auto" }}></span>
            </a>
            <div className="mt-24 text-xs opacity-30 tracking-widest uppercase flex gap-8">
              <a href="#" className="hover:opacity-100">X / TWITTER</a>
              <a href="https://github.com/SAMIRXR" target="_blank" rel="noopener noreferrer" className="hover:opacity-100">GITHUB</a>
              <a href="https://www.linkedin.com/in/samir-194084235/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100">LINKEDIN</a>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
