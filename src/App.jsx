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
            exit={{ opacity: 0, y: -40, filter: 'blur(10px)', scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#fafcfa] overflow-hidden"
          >
            {/* Background rotating abstract rings */}
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full border-[1px] border-emerald-200/40 border-dashed"
            />
            <motion.div 
              animate={{ rotate: -360 }} 
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[60vw] h-[60vw] md:w-[35vw] md:h-[35vw] rounded-full border-[1px] border-green-300/30 border-dashed"
            />

            <div className="relative flex flex-col items-center z-10">
              {/* Liquid Morphing Spinner */}
              <div className="relative w-28 h-28 flex items-center justify-center mb-10">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-full h-full border-2 border-emerald-500/80 mix-blend-multiply"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                      borderRadius: [
                        '40% 60% 70% 30% / 40% 50% 60% 50%',
                        '60% 40% 30% 70% / 60% 50% 40% 50%',
                        '40% 60% 70% 30% / 40% 50% 60% 50%'
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.4
                    }}
                  />
                ))}
                <motion.div
                  className="absolute inset-0 bg-emerald-50 rounded-full blur-xl -z-10"
                  animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.img 
                  src="/favicon.png" 
                  alt="Loading Logo" 
                  className="absolute w-12 h-12 object-contain drop-shadow-xl"
                  animate={{ scale: [0.9, 1.1, 0.9] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              {/* Staggered Text Reveal */}
              <div className="flex overflow-hidden mb-5">
                {"MartBusy".split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    className="text-3xl md:text-4xl font-black text-slate-800 tracking-widest font-display"
                    initial={{ y: 50, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
              
              {/* Premium Progress Bar */}
              <div className="relative w-48 h-1.5 bg-emerald-100 rounded-full overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                />
              </div>
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
