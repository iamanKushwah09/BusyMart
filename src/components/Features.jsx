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

const features = [
  { icon: <Zap />, title: 'Fast Setup', desc: 'Go live in days, not months.' },
  { icon: <Maximize />, title: 'Scalable', desc: 'Infrastructure that grows with you.' },
  { icon: <Lock />, title: 'Secure', desc: 'PCI-DSS compliant systems.' },
  { icon: <Smartphone />, title: 'Mobile-First', desc: 'Perfect display on every device.' },
  { icon: <BarChart3 />, title: 'Analytics', desc: 'Real-time sales tracking.' },
  { icon: <Globe2 />, title: 'Global', desc: 'Multi-currency and multi-language.' },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[3rem] p-12 md:p-20 border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black font-display text-center mb-16">
              Why <Counter value={10000} suffix="+" /> Brands <br />
              <span className="text-secondary">Choose BusyMart</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary shrink-0">
                    {React.cloneElement(feature.icon, { size: 24 })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                    <p className="text-white/50 leading-relaxed">{feature.desc}</p>
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
