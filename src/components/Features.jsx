import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Zap, 
  Maximize, 
  Lock, 
  Smartphone, 
  BarChart3, 
  Globe2 
} from 'lucide-react';
import Counter from './Counter';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: <Zap />, title: 'Fast Setup', desc: 'Go live in days, not months.', color: 'text-orange-500 bg-orange-50 border-orange-100' },
  { icon: <Maximize />, title: 'Scalable', desc: 'Infrastructure that grows with you.', color: 'text-blue-500 bg-blue-50 border-blue-100' },
  { icon: <Lock />, title: 'Secure', desc: 'PCI-DSS compliant systems.', color: 'text-emerald-500 bg-emerald-50 border-emerald-100' },
  { icon: <Smartphone />, title: 'Mobile-First', desc: 'Perfect display on every device.', color: 'text-purple-500 bg-purple-50 border-purple-100' },
  { icon: <BarChart3 />, title: 'Analytics', desc: 'Real-time sales tracking.', color: 'text-cyan-500 bg-cyan-50 border-cyan-100' },
  { icon: <Globe2 />, title: 'Global', desc: 'Multi-currency and multi-language.', color: 'text-rose-500 bg-rose-50 border-rose-100' },
];

const Features = () => {
  const container = useRef();

  useGSAP(() => {
    // Animate title
    gsap.from('.feature-title', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.5)'
    });

    // Stagger feature items
    gsap.from('.feature-item', {
      scrollTrigger: {
        trigger: '.feature-grid',
        start: 'top 85%',
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    });

    // Animate decorative SVG
    gsap.to('.feature-svg', {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'linear'
    });

    gsap.to('.feature-svg-float', {
      y: -20,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });

  }, { scope: container });

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-white" ref={container}>
      <div className="container mx-auto px-6 relative">
        
        {/* Floating GSAP SVGs */}
        <svg className="absolute -top-10 -left-10 w-32 h-32 text-emerald-50 feature-svg opacity-60 pointer-events-none z-0" viewBox="0 0 100 100" fill="currentColor">
          <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" />
        </svg>
        <svg className="absolute bottom-10 right-0 w-24 h-24 text-green-100 feature-svg-float opacity-50 pointer-events-none z-0" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
          <circle cx="50" cy="50" r="40" strokeDasharray="5 5" />
        </svg>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[3rem] p-12 md:p-20 border-emerald-50 relative overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-50/20 via-transparent to-green-50/20" />
          
          <div className="relative z-10">
            <h2 className="feature-title text-4xl md:text-6xl font-black font-display text-center mb-16 text-slate-900 relative">
              Why <Counter value={10000} suffix="+" /> Brands <br />
              <span className="text-emerald-500 relative inline-block">
                Choose MartBusy
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-emerald-200/60 z-[-1]" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q50 20 100 10" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 feature-grid">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-item flex items-start gap-4 group"
                >
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3", feature.color)}>
                    {React.cloneElement(feature.icon, { size: 28, className: "transition-transform duration-300 group-hover:scale-110" })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-emerald-600 transition-colors">{feature.title}</h3>
                    <p className="text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
