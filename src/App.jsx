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
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
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
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-16 h-16 border-4 border-emerald-500 border-t-emerald-100 rounded-[1rem] shadow-xl shadow-emerald-100"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute inset-0 flex items-center justify-center font-display font-black text-xs text-emerald-600"
              >
                MB
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
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
