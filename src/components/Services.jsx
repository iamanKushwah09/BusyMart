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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-100 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute top-8 right-8 text-slate-100 group-hover:text-emerald-50 transition-colors">
                <img src="/favicon.png" alt="MB" className="w-12 h-12 opacity-5" />
              </div>

              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-500",
                service.color === 'emerald' ? "bg-emerald-500 text-white shadow-lg shadow-emerald-200" :
                service.color === 'blue' ? "bg-blue-500 text-white shadow-lg shadow-blue-200" :
                "bg-rose-500 text-white shadow-lg shadow-rose-200"
              )}>
                {service.icon}
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-6">
                {service.desc}
              </p>

              <div className="space-y-3 mb-8">
                {service.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {feature}
                  </div>
                ))}
              </div>

              <button className="flex items-center gap-2 text-sm font-black text-slate-900 group-hover:text-emerald-600 transition-all">
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

