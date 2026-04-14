import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, ShieldCheck, Zap, Globe } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-transparent">
      <ParticleBackground />
      {/* Background elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-emerald-100/40 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-green-50/40 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
      
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display mb-8 tracking-tight leading-[1.1] text-slate-900 transition-colors">
              Launch Your E-Commerce <br />
              <span className="text-gradient">Business Effortlessly</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed transition-colors">
              Empowering entrepreneurs with cutting-edge tools to build, scale, and manage 
              successful online stores in record time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-secondary transition-all flex items-center justify-center gap-2 group shadow-xl shadow-emerald-200">
              Get Started Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://wa.me/918989218206?text=Hello%20MartBusy!%20I'm%20interested%20in%20your%20services." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 glass text-slate-900 font-bold rounded-2xl border-emerald-100 hover:bg-emerald-50/50 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5 text-emerald-600" /> Contact on WhatsApp
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
                  alt="E-commerce Dashboard"
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

                <motion.div 
                  className="absolute bottom-10 left-10 p-4 glass rounded-2xl border-emerald-100 shadow-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-emerald-50">
                          <img src={`https://i.pravatar.cc/32?img=${i + 10}`} alt="User" className="w-full h-full rounded-full" />
                        </div>
                      ))}
                    </div>
                    <p className="text-xs font-bold text-slate-700">500+ New Stores</p>
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
