import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageSquare, ShieldCheck, Zap, Globe } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ParticleBackground from './ParticleBackground';
import heroDashboard from '../assets/images/hero-dashboard.jpg';

const Hero = () => {
  const [index, setIndex] = useState(0);
  const heroRef = useRef();

  const words = [
    "Business Effortlessly",
    "Store Instantly",
    "Sales Automatically",
    "Brand Globally",
    "Integrated with Busy"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useGSAP(() => {
    // Parallax scrolling for floating shapes
    gsap.to('.hero-shape', {
      y: (i, el) => -50 * (i + 1),
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    // Continuous floating and rotating animations
    gsap.to('.float-anim', {
      y: '-=30',
      rotation: 15,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      stagger: 0.5
    });

    // Draw SVG path on load
    gsap.fromTo('.hero-draw-path', 
      { strokeDashoffset: 800, strokeDasharray: 800 },
      { 
        strokeDashoffset: 0, 
        duration: 3, 
        ease: 'power2.out',
        delay: 0.5
      }
    );
  }, { scope: heroRef });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-transparent" ref={heroRef}>
      <ParticleBackground />
      {/* Background elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-emerald-100/40 rounded-full blur-[120px] animate-pulse-slow z-0" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-green-50/40 rounded-full blur-[120px] animate-pulse-slow delay-1000 z-0" />
      
      {/* GSAP Floating SVGs */}
      <svg className="absolute top-[20%] left-[10%] w-24 h-24 text-emerald-200 float-anim hero-shape opacity-60 z-0 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
        <polygon points="50,5 90,95 10,95" className="hero-draw-path" />
      </svg>
      <svg className="absolute bottom-[20%] right-[10%] w-32 h-32 text-emerald-100 float-anim hero-shape opacity-50 z-0 pointer-events-none" style={{ animationDelay: '1s' }} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="50" cy="50" r="45" strokeDasharray="10 10" className="hero-draw-path" />
        <circle cx="50" cy="50" r="30" className="hero-draw-path" />
      </svg>
      <svg className="absolute top-[30%] right-[15%] w-16 h-16 text-green-200 float-anim hero-shape opacity-40 z-0 pointer-events-none" style={{ animationDelay: '2s' }} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
        <rect x="20" y="20" width="60" height="60" rx="15" className="hero-draw-path" />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 py-1.5 px-4 mb-8 rounded-full bg-emerald-50 border border-emerald-100 text-sm font-semibold text-emerald-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              The Future of E-Commerce is Here
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display mb-8 tracking-tight leading-[1.1] text-slate-900 transition-colors relative inline-block">
              Launch Your E-Commerce <br />
              <span className="inline-block min-h-[1.2em]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    className="text-gradient inline-block"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{
                      hidden: { opacity: 0, transition: { duration: 0.3 } },
                      visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
                    }}
                  >
                    {words[index].split("").map((char, i) => (
                      <motion.span
                        key={i}
                        variants={{
                          hidden: { opacity: 0, display: "none" },
                          visible: { opacity: 1, display: "inline-block" }
                        }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.span>
                </AnimatePresence>
              </span>
              <svg className="absolute w-full h-4 -bottom-2 left-0 text-emerald-300/40 z-[-1]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path className="hero-draw-path" d="M0 15 Q50 5 100 15" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed transition-colors">
              Cutting-edge tools designed for entrepreneurs to build, scale, and manage successful online stores—faster than ever.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-secondary transition-all flex items-center justify-center gap-2 group shadow-xl shadow-emerald-200 relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">Get Started Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
              <div className="absolute inset-0 h-full w-0 bg-emerald-600 transition-all duration-300 ease-out group-hover:w-full z-0" />
            </a>
            <a 
              href="https://wa.me/918076901732?text=Hello%20MartBusy!%20I'm%20interested%20in%20your%20services." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 glass text-slate-900 font-bold rounded-2xl border-emerald-100 hover:bg-emerald-50/50 transition-all flex items-center justify-center gap-2 relative overflow-hidden group"
            >
              <MessageSquare className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" /> Contact on WhatsApp
            </a>
          </motion.div>

          <div className="mt-8 flex items-center justify-center gap-6 text-slate-400 text-sm font-medium">
            <span className="flex items-center gap-2"><ShieldCheck size={18} className="text-emerald-500" /> Secure SSL</span>
            <span className="flex items-center gap-2"><Zap size={18} className="text-emerald-500" /> Fast Setup</span>
            <span className="flex items-center gap-2"><Globe size={18} className="text-emerald-500" /> Global Reach</span>
          </div>

          {/* Abstract 3D shape / Mockup placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-20 relative"
          >
            <div className="max-w-5xl mx-auto">
              <div className="aspect-[16/9] glass rounded-[2.5rem] p-4 border-emerald-100 overflow-hidden relative group shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-transparent to-green-50/40" />
                <img 
                  src={heroDashboard} 
                  alt="E-commerce Dashboard"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-3xl opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Float elements */}
                <motion.div 
                  className="absolute top-10 right-10 p-5 glass rounded-2xl border-emerald-100 shadow-xl"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-slate-500 font-medium">Monthly Revenue</p>
                      <p className="text-xl font-bold text-slate-900">+$48,250.00</p>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
