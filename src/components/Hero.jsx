import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-mesh">
      {/* Background elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-4 mb-6 rounded-full glass border text-sm font-medium text-primary">
              The Future of E-Commerce is Here
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display mb-8 tracking-tight leading-[1.1]">
              Launch Your E-Commerce <br />
              <span className="text-gradient">Business Effortlessly</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
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
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-2xl hover:scale-105 transition-transform flex items-center justify-center gap-2 group shadow-lg shadow-primary/25">
              Get Started Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://wa.me/918989218206?text=Hello%20BusyMart!%20I'm%20interested%20in%20your%20services." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5 text-secondary" /> Contact on WhatsApp
            </a>
          </motion.div>

          {/* Abstract 3D shape / Mockup placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-20 relative"
          >
            <div className="max-w-5xl mx-auto">
              <div className="aspect-[16/9] glass rounded-[2rem] p-4 border-white/10 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
                  alt="E-commerce Dashboard"
                  className="w-full h-full object-cover rounded-2xl opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Float elements */}
                <motion.div 
                  className="absolute top-10 right-10 p-4 glass rounded-2xl border-white/20 animate-float"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50">Monthly Revenue</p>
                      <p className="text-lg font-bold">+$48,250.00</p>
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
