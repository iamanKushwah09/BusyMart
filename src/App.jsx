import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveBackground from './components/InteractiveBackground';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Package, Store, Tag } from 'lucide-react';

const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const EcomBusyIntegration = lazy(() => import('./components/EcomBusyIntegration'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const EnquiryForm = lazy(() => import('./components/EnquiryForm'));
const Footer = lazy(() => import('./components/Footer'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bg-white text-slate-900 transition-colors duration-300 min-h-screen selection:bg-emerald-500 selection:text-white relative overflow-x-hidden w-full">
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
              {/* Unique E-commerce Animation */}
              <div className="relative w-48 h-48 flex flex-col items-center justify-end mb-8">
                
                {/* Falling E-commerce Elements */}
                <motion.div
                  className="absolute top-0 text-emerald-500 z-0"
                  animate={{
                    y: [-20, 80],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                    rotate: [0, 180]
                  }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeIn" }}
                >
                  <Package className="w-8 h-8 drop-shadow-md" />
                </motion.div>
                
                <motion.div
                  className="absolute top-4 -ml-24 text-emerald-400 z-0"
                  animate={{
                    y: [-20, 70],
                    x: [0, 30],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                    rotate: [-45, 45]
                  }}
                  transition={{ duration: 1.8, delay: 0.6, repeat: Infinity, ease: "easeIn" }}
                >
                  <Tag className="w-7 h-7 drop-shadow-md" />
                </motion.div>
                
                <motion.div
                  className="absolute top-2 ml-24 text-emerald-600 z-0"
                  animate={{
                    y: [-20, 70],
                    x: [0, -30],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                    rotate: [45, -45]
                  }}
                  transition={{ duration: 1.8, delay: 1.2, repeat: Infinity, ease: "easeIn" }}
                >
                  <Store className="w-8 h-8 drop-shadow-md" />
                </motion.div>

                {/* Main Shopping Bag holding the Logo */}
                <motion.div
                  className="relative z-10 bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-2xl border border-emerald-100 flex items-center justify-center overflow-hidden"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    y: [0, -10, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50 to-transparent opacity-50" />
                  <motion.img 
                    src="/logo.png" 
                    alt="MartBusy Loading" 
                    className="relative z-10 w-16 h-16 object-contain drop-shadow-lg"
                    animate={{ rotate: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Glowing aura */}
                  <motion.div
                    className="absolute inset-0 bg-emerald-400 rounded-[2rem] blur-2xl -z-10"
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
                
                {/* Bag handles (decorative) */}
                <motion.div 
                  className="absolute bottom-[88px] w-16 h-10 border-4 border-emerald-200 border-b-0 rounded-t-full z-0"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    y: [0, -10, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              {/* Dynamic Loading Text */}
              <div className="flex flex-col items-center">
                <motion.div className="flex gap-2 mb-3">
                  {"Preparing Store...".split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      className="text-xl md:text-2xl font-black text-slate-800 tracking-tight font-display"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05,
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </motion.div>
                
                {/* Modern minimal progress bar */}
                <div className="w-32 h-1 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-emerald-500 rounded-full"
                    animate={{ 
                      x: ["-100%", "100%"]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                </div>
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
          <EcomBusyIntegration />
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
