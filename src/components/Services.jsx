import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Settings, 
  Zap, 
  Layers, 
  MessageSquare, 
  Server, 
  Cpu, 
  FileSignature, 
  ShieldCheck, 
  Smartphone, 
  ShoppingBag, 
  BarChart3 
} from 'lucide-react';
import { cn } from '../lib/utils';

const services = [
  {
    icon: <Globe className="w-10 h-10" />,
    title: 'Website Development',
    description: 'Specialized in web software development using AngularJS, NodeJS, ReactJS, Python, and Java to build high-performance applications.',
    color: 'from-blue-600 to-indigo-700',
    accent: 'bg-blue-50 text-blue-700 border-blue-100',
    tag: 'Web Design'
  },
  {
    icon: <Settings className="w-10 h-10" />,
    title: 'BUSY Accounting',
    description: 'An integrated business accounting software for small and medium businesses with over 6 lakh successful users in India.',
    color: 'from-emerald-600 to-green-700',
    accent: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    tag: 'Accounting'
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: 'Tally Prime',
    description: 'Technology solutions designed to make business owners efficient and empowered, focusing on critical business growth matters.',
    color: 'from-orange-500 to-amber-600',
    accent: 'bg-orange-50 text-orange-700 border-orange-100',
    tag: 'Tally Solutions'
  },
  {
    icon: <Layers className="w-10 h-10" />,
    title: 'Marg ERP Solutions',
    description: 'A leading software application provider specializing in GST, assisting businesses with a smoother and faster digital transition.',
    color: 'from-purple-600 to-pink-700',
    accent: 'bg-purple-50 text-purple-700 border-purple-100',
    tag: 'ERP'
  },
  {
    icon: <MessageSquare className="w-10 h-10" />,
    title: 'WhatsApp API',
    description: 'Secure business messaging services to send and receive WhatsApp messages and photos for professional team communication.',
    color: 'from-green-500 to-emerald-600',
    accent: 'bg-green-50 text-green-700 border-green-100',
    tag: 'Marketing'
  },
  {
    icon: <Server className="w-10 h-10" />,
    title: 'Cloud Server',
    description: 'Cloud solutions focused on simplifying business processes for future-ready companies with high-availability infrastructure.',
    color: 'from-cyan-500 to-blue-600',
    accent: 'bg-cyan-50 text-cyan-700 border-cyan-100',
    tag: 'Cloud'
  },
  {
    icon: <Cpu className="w-10 h-10" />,
    title: 'Leadchainsystems',
    description: 'Provides alert, bar, and Remote Desktop services to simplify complex business processes and increase operational efficiency.',
    color: 'from-slate-600 to-slate-800',
    accent: 'bg-slate-50 text-slate-700 border-slate-100',
    tag: 'Business Systems'
  },
  {
    icon: <FileSignature className="w-10 h-10" />,
    title: 'Docsigner',
    description: 'Digital signature software integrated with Busy accounting software that can also work independently for legal document signing.',
    color: 'from-rose-500 to-pink-600',
    accent: 'bg-rose-50 text-rose-700 border-rose-100',
    tag: 'Security'
  },
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: 'eMudhra CA',
    description: 'Licensed Certifying Authority for digital signatures and authentication, providing trust in digital transactions and interactions.',
    color: 'from-indigo-500 to-blue-600',
    accent: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    tag: 'Authentication'
  },
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: 'Flutter Development',
    description: 'Google’s open-source technology for creating high-quality mobile, desktop, and web apps with a single modern codebase.',
    color: 'from-sky-500 to-blue-600',
    accent: 'bg-sky-50 text-sky-700 border-sky-100',
    tag: 'App Dev'
  },
  {
    icon: <ShoppingBag className="w-10 h-10" />,
    title: 'Ecommerce Solutions',
    description: 'Comprehensive ecommerce development process to structure and manage online retail businesses and digital marketplaces.',
    color: 'from-yellow-500 to-orange-600',
    accent: 'bg-yellow-50 text-yellow-700 border-yellow-100',
    tag: 'Shopping'
  },
  {
    icon: <BarChart3 className="w-10 h-10" />,
    title: 'ERP Development',
    description: 'Integrated platforms for managing large amounts of enterprise data within production environments and supply chains.',
    color: 'from-red-600 to-rose-700',
    accent: 'bg-red-50 text-red-700 border-red-100',
    tag: 'Enterprise'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-32 h-[30vh] flex flex-col justify-center sticky top-0 z-0">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black font-display mb-6 text-slate-900 transition-colors"
          >
            Services Tailored for <span className="text-emerald-500">Winners</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-xl max-w-2xl mx-auto transition-colors"
          >
            Everything you need to reach six, seven, and even eight-figure milestones in your e-commerce journey.
          </motion.p>
        </div>

        <div className="relative flex flex-col items-center">
          {services.map((service, index) => (
            <div 
              key={index}
              className="lg:sticky w-full max-w-5xl mb-12 lg:mb-24"
              style={{ top: `calc(10vh + ${index * 2}rem)` }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="group relative"
              >
                <div className={cn(
                  "p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem] border shadow-2xl relative h-auto lg:h-[50vh] flex flex-col lg:flex-row items-center gap-8 md:gap-12 glass overflow-hidden transition-all duration-500",
                  "hover:scale-[1.01]"
                )}>
                  {/* Decorative Gradient Background */}
                  <div className={cn("absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity", service.color)} />
                  
                  <div className="w-full lg:w-1/2 relative z-10 text-left order-2 lg:order-1">
                    <span className={cn("inline-block py-1 px-4 mb-4 md:mb-6 rounded-full border text-[10px] md:text-xs font-bold uppercase tracking-wider transition-colors", service.accent)}>
                      {service.tag}
                    </span>
                    <h3 className="text-2xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 group-hover:text-slate-800 transition-all">{service.title}</h3>
                    <p className="text-slate-600 text-sm md:text-lg leading-relaxed mb-6 md:mb-10 transition-colors">{service.description}</p>
                    <button className={cn("w-full md:w-max px-8 py-3 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg", "bg-slate-900 shadow-slate-200")}>
                      Explore Details
                    </button>
                  </div>

                  <div className="w-full lg:w-1/2 flex justify-center items-center relative z-10 h-48 lg:h-full order-1 lg:order-2">
                    <div className={cn(
                      "w-32 h-32 md:w-64 md:h-64 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br flex items-center justify-center text-white shadow-2xl animate-float group-hover:rotate-12 transition-transform duration-700",
                      service.color
                    )}>
                      {React.cloneElement(service.icon, { className: "w-16 h-16 md:w-32 md:h-32" })}
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
