import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Globe, 
  Sparkles, 
  Zap, 
  BarChart3, 
  ShieldCheck, 
  Smartphone,
  ArrowRight
} from 'lucide-react';
import { cn } from '../lib/utils';
import servicesBg from '../assets/images/services-bg.jpg';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'E-commerce',
    desc: 'Custom high-performance stores built with Next.js for maximum conversion.',
    color: 'emerald',
    features: ['Headless Commerce', 'Ultra-Fast Load', 'AI Integration']
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Marketing & SEO',
    desc: 'Dominate search results and drive quality traffic with our expert SEO strategies.',
    color: 'blue',
    features: ['Advanced SEO', 'Social Adverts', 'Content Strategy']
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Growth Analytics',
    desc: 'Real-time data visualization and insights to scale your business effectively.',
    color: 'rose',
    features: ['Sales Tracking', 'User Insights', 'ROI Analysis']
  }
];

const Services = () => {
  const container = useRef();
  
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.from('.service-badge', { y: 20, opacity: 0, duration: 0.6, ease: 'back.out(1.7)' })
      .from('.service-heading', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
      .from('.service-sub', { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
      .from('.service-card', {
        scale: 0.95,
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
      }, '-=0.2')
      .from('.svg-element', {
        rotation: 45,
        scale: 0.5,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'elastic.out(1, 0.5)'
      }, '-=0.6');

    // Continuous floating animation for SVGs
    gsap.to('.floating-svg', {
      y: '-=25',
      rotation: 10,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });
    
    // SVG path draw animation
    gsap.fromTo('.draw-path', 
      { strokeDashoffset: 1000, strokeDasharray: 1000 },
      { 
        strokeDashoffset: 0, 
        duration: 2.5, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 65%',
        }
      }
    );
    
    // Image parallax effect
    gsap.to('.service-img', {
      y: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: '.service-card',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

  }, { scope: container });

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden" ref={container}>
      {/* Decorative GSAP SVGs */}
      <svg className="absolute top-10 left-10 w-24 h-24 md:w-40 md:h-40 text-emerald-100 floating-svg svg-element opacity-40 z-0 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 5 L85 25 L85 75 L50 95 L15 75 L15 25 Z" />
      </svg>
      <svg className="absolute bottom-20 right-10 w-32 h-32 md:w-56 md:h-56 text-green-50 floating-svg svg-element opacity-60 z-0 pointer-events-none" style={{ animationDelay: '1s' }} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="50" cy="50" r="40" className="draw-path" />
        <circle cx="50" cy="50" r="20" className="draw-path" />
      </svg>
      <svg className="absolute top-40 right-20 w-16 h-16 text-emerald-200 floating-svg svg-element opacity-50 z-0 pointer-events-none" style={{ animationDelay: '0.5s' }} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
        <rect x="20" y="20" width="60" height="60" rx="10" className="draw-path" />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="service-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold text-xs mb-4 uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> Solutions For Winners
          </div>
          <h2 className="service-heading text-4xl md:text-5xl font-black font-display text-slate-900 mb-4">
            Our Premium <span className="text-emerald-500 relative inline-block">
              Expertise
              <svg className="absolute w-full h-4 -bottom-1 left-0 text-emerald-300/50 z-[-1]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path className="draw-path" d="M0 15 Q50 5 100 15" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="service-sub text-slate-500 max-w-2xl mx-auto font-medium">
            Everything you need to launch, scale, and manage a successful 
            digital business from scratch.
          </p>
        </div>

        <div className="max-w-5xl mx-auto service-card">
          <div className="group relative p-8 md:p-20 rounded-[3rem] md:rounded-[5rem] bg-linear-to-br from-slate-50 to-white border border-emerald-50 hover:shadow-3xl hover:shadow-emerald-100/50 transition-all duration-700 overflow-hidden">
            {/* Abstract Background Decoration */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl group-hover:bg-emerald-200/40 transition-colors duration-700" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-green-100/30 rounded-full blur-3xl group-hover:bg-green-200/40 transition-colors duration-700" />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="w-20 h-20 rounded-3xl bg-emerald-500 text-white flex items-center justify-center mb-8 shadow-2xl shadow-emerald-200 group-hover:scale-110 transition-transform duration-500 group/icon">
                  <Globe className="w-10 h-10 group-hover/icon:animate-spin" style={{ animationDuration: '3s' }} />
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                  All-in-One <br/> 
                  <span className="text-emerald-500">E-commerce</span> Solution
                </h3>
                <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
                     A powerful digital ecosystem tailored for modern e-commerce. Seamlessly manage your products, orders, and customer relationships while enabling your team to boost sales online with real-time synchronization.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-12">
                  {[
                    "Custom Storefronts",
                    "Growth Analytics",
                    "24/7 Premium Support"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700 font-bold hover:text-emerald-600 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                        <ShieldCheck size={18} />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <a href="#contact" className="inline-flex items-center gap-3 px-8 py-5 bg-emerald-600 text-white font-black rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100 group/btn">
                  Start Your Journey <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </a>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-[3rem] p-4 border-emerald-100 overflow-hidden shadow-2xl">
                  <img 
                    src={servicesBg} 
                    alt="Success"
                    loading="lazy"
                    className="w-full h-full object-cover rounded-[2.5rem] opacity-90 group-hover:scale-105 transition-transform duration-1000 service-img"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent pointer-events-none" />
                </div>
                
                {/* Floating badge */}
                <div 
                  className="absolute -bottom-6 -right-6 p-6 bg-white rounded-3xl shadow-2xl border border-emerald-50 hidden md:block floating-svg"
                  style={{ animationDelay: '0.2s' }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center">
                      <Zap className="w-6 h-6 animate-pulse" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Conversion</p>
                      <p className="text-2xl font-black text-slate-900">+127%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;


