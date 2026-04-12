import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Settings, 
  CreditCard, 
  Layers, 
  TrendingUp, 
  Headphones 
} from 'lucide-react';
import { cn } from '../lib/utils';

const services = [
  {
    icon: <Globe className="w-10 h-10" />,
    title: 'E-commerce Website Dev',
    description: 'Custom, high-converting stores built with the latest technologies like Next.js and Headless CMS for maximum performance and SEO dominance.',
    color: 'from-blue-600 to-indigo-700',
    tag: 'Web Design'
  },
  {
    icon: <Settings className="w-10 h-10" />,
    title: 'Store Setup & Management',
    description: 'Complete hands-off setup from domain configuration to inventory management systems. We handle the tech, you handle the sales.',
    color: 'from-purple-600 to-pink-700',
    tag: 'Operations'
  },
  {
    icon: <CreditCard className="w-10 h-10" />,
    title: 'Gateway Integration',
    description: 'Secure and seamless payment processing for global and local transactions. Support for 100+ currencies and multiple localized gateways.',
    color: 'from-orange-600 to-red-700',
    tag: 'Payments'
  },
  {
    icon: <Layers className="w-10 h-10" />,
    title: 'Product Optimization',
    description: 'SEO-driven product listings and high-quality visuals to boost your click-through rates. Turn visitors into loyal customers.',
    color: 'from-green-600 to-emerald-700',
    tag: 'Growth'
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: 'Marketing Support',
    description: 'Targeted advertising and social media strategies to drive traffic and increase sales. Precision targeting for premium audiences.',
    color: 'from-cyan-600 to-blue-700',
    tag: 'Advertising'
  },
  {
    icon: <Headphones className="w-10 h-10" />,
    title: '24/7 Premium Support',
    description: 'Dedicated team to help you navigate through technical challenges around the clock. Your success is our 24/7 mission.',
    color: 'from-fuchsia-600 to-purple-700',
    tag: 'Support'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-[#030712] relative transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-32 h-[30vh] flex flex-col justify-center sticky top-0 z-0">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black font-display mb-6 text-slate-900 dark:text-white transition-colors"
          >
            Services Tailored for <span className="text-gradient">Winners</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 dark:text-white/50 text-xl max-w-2xl mx-auto transition-colors"
          >
            Everything you need to reach six, seven, and even eight-figure milestones in your e-commerce journey.
          </motion.p>
        </div>

        <div className="relative flex flex-col items-center">
          {services.map((service, index) => (
            <div 
              key={index}
              className="sticky top-[15vh] w-full max-w-5xl mb-12"
              style={{ top: `${15 + (index * 2)}vh` }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="group relative"
              >
                <div className={cn(
                  "p-10 md:p-16 rounded-[3rem] border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden h-[60vh] md:h-[50vh] flex flex-col md:flex-row items-center gap-12 glass overflow-hidden",
                  "hover:border-slate-300 dark:hover:border-white/20 transition-all duration-500"
                )}>
                  {/* Decorative Gradient Background */}
                  <div className={cn("absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity", service.color)} />
                  
                  <div className="md:w-1/2 relative z-10 text-left">
                    <span className="inline-block py-1 px-4 mb-6 rounded-full glass border border-slate-200 dark:border-white/10 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-white/70">
                      {service.tag}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 group-hover:text-gradient transition-all">{service.title}</h3>
                    <p className="text-slate-600 dark:text-white/60 text-lg leading-relaxed mb-10 transition-colors">{service.description}</p>
                    <button className="px-8 py-3 bg-primary dark:bg-white text-white dark:text-black font-bold rounded-xl hover:scale-105 transition-transform flex items-center gap-2 group-hover:shadow-lg">
                      Explore Details
                    </button>
                  </div>

                  <div className="md:w-1/2 flex justify-center items-center relative z-10 h-full">
                    <div className={cn(
                      "w-48 h-48 md:w-64 md:h-64 rounded-[3rem] bg-gradient-to-br flex items-center justify-center text-white shadow-2xl animate-float group-hover:rotate-12 transition-transform duration-700",
                      service.color
                    )}>
                      {React.cloneElement(service.icon, { className: "w-24 h-24 md:w-32 md:h-32" })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
