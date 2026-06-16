import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveBackground from './components/InteractiveBackground';
import { motion, AnimatePresence } from 'framer-motion';

const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Features = lazy(() => import('./components/Features'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const EnquiryForm = lazy(() => import('./components/EnquiryForm'));
const Footer = lazy(() => import('./components/Footer'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));
const BusyIntegration = lazy(() => import('./components/BusyIntegration'));
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
        <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
          <About />
          <Services />
          <BusyIntegration />
          <Features />
          <Testimonials />
          <EnquiryForm />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <WhatsAppButton />
      </Suspense>
    </div>
  );
}

export default App;
