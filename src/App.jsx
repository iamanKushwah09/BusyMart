import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import InteractiveBackground from './components/InteractiveBackground';
import BusyIntegration from './components/BusyIntegration';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bg-white text-slate-900 transition-colors duration-300 min-h-screen selection:bg-emerald-500 selection:text-white relative">
      <InteractiveBackground />
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
          >
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-16 h-16 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full shadow-2xl"
              />
              <img 
                src="/favicon.png" 
                alt="Loading Logo" 
                className="absolute w-8 h-8 object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <BusyIntegration />
        <Features />
        <Testimonials />
        <EnquiryForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
