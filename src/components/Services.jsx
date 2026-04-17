import React from 'react';
import { motion } from 'framer-motion';
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

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'E-commerce Empires',
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
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold text-xs mb-4 uppercase tracking-widest"
          >
            <Sparkles className="w-4 h-4" /> Solutions For Winners
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black font-display text-slate-900 mb-4">
            Our Premium <span className="text-emerald-500">Expertise</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            Everything you need to launch, scale, and manage a successful 
            digital business from scratch.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative p-8 md:p-20 rounded-[3rem] md:rounded-[5rem] bg-linear-to-br from-slate-50 to-white border border-emerald-50 hover:shadow-3xl hover:shadow-emerald-100/50 transition-all duration-700 overflow-hidden"
          >
            {/* Abstract Background Decoration */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl group-hover:bg-emerald-200/40 transition-colors duration-700" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-green-100/30 rounded-full blur-3xl group-hover:bg-green-200/40 transition-colors duration-700" />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="w-20 h-20 rounded-3xl bg-emerald-500 text-white flex items-center justify-center mb-8 shadow-2xl shadow-emerald-200 group-hover:scale-110 transition-transform duration-500">
                  <Globe className="w-10 h-10" />
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                  All-in-One <br/> 
                  <span className="text-emerald-500">E-commerce</span> Solution
                </h3>
                <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
                  We build, optimize, and scale your digital empire. From high-performance store setup to advanced AI-driven marketing strategies, we handle the technology so you can focus on the growth.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-12">
                  {[
                    "Custom Storefronts",
                    "SEO Optimization",
                    "AI Integration",
                    "Growth Analytics",
                    "Payment Gateways",
                    "24/7 Premium Support"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                        <ShieldCheck size={18} />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <a href="#contact" className="inline-flex items-center gap-3 px-8 py-5 bg-emerald-600 text-white font-black rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100 group/btn">
                  Start Your Journey <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-[3rem] p-4 border-emerald-100 overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=2000" 
                    alt="Success"
                    className="w-full h-full object-cover rounded-[2.5rem] opacity-90 group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent" />
                </div>
                
                {/* Floating badge */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  className="absolute -bottom-6 -right-6 p-6 bg-white rounded-3xl shadow-2xl border border-emerald-50 hidden md:block"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Conversion</p>
                      <p className="text-2xl font-black text-slate-900">+127%</p>
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

export default Services;

