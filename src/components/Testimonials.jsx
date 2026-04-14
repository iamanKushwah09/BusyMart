import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, Bloom Fashion',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    content: 'MartBusy transformed our boutique into a global powerhouse. Their integration services are next-level!',
    rating: 5
  },
  {
    name: 'David Chen',
    role: 'Founder, TechGadget',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    content: 'The 24/7 support is a lifesaver. We never have to worry about downtime during our big sales events.',
    rating: 5
  },
  {
    name: 'Elena Rodriguez',
    role: 'Director, EcoStay',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    content: 'Cleanest UI we have ever worked with. Our customers love the mobile shopping experience.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-mesh overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-display mb-4 text-slate-900">Trusted by Market Leaders</h2>
          <div className="flex justify-center gap-1">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-emerald-500 fill-emerald-500" />)}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-[2.5rem] border-emerald-50 relative shadow-lg hover:shadow-emerald-100 transition-all"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-emerald-100/30" />
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-emerald-500 shadow-md" />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-600 italic leading-relaxed relative z-10 line-clamp-4">"{t.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
