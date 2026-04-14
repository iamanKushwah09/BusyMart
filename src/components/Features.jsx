import React from 'react';
import { motion } from 'framer-motion';
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

const features = [
  { icon: <Zap />, title: 'Fast Setup', desc: 'Go live in days, not months.', color: 'text-orange-500 bg-orange-50' },
  { icon: <Maximize />, title: 'Scalable', desc: 'Infrastructure that grows with you.', color: 'text-blue-500 bg-blue-50' },
  { icon: <Lock />, title: 'Secure', desc: 'PCI-DSS compliant systems.', color: 'text-emerald-500 bg-emerald-50' },
  { icon: <Smartphone />, title: 'Mobile-First', desc: 'Perfect display on every device.', color: 'text-purple-500 bg-purple-50' },
  { icon: <BarChart3 />, title: 'Analytics', desc: 'Real-time sales tracking.', color: 'text-cyan-500 bg-cyan-50' },
  { icon: <Globe2 />, title: 'Global', desc: 'Multi-currency and multi-language.', color: 'text-rose-500 bg-rose-50' },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[3rem] p-12 md:p-20 border-emerald-50 relative overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-50/20 via-transparent to-green-50/20" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black font-display text-center mb-16 text-slate-900">
              Why <Counter value={10000} suffix="+" /> Brands <br />
              <span className="text-emerald-500">Choose MartBusy</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="flex items-start gap-4"
                >
                  <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border", feature.color)}>
                    {React.cloneElement(feature.icon, { size: 24 })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-slate-800">{feature.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
