import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield, Zap } from 'lucide-react';
import Counter from './Counter';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-4">About MartBusy</h2>
            <h3 className="text-4xl md:text-5xl font-black font-display mb-8 leading-tight text-slate-900 transition-colors">
              We Don't Just Build Stores, <br />
              <span className="text-emerald-500">We Build Empires.</span>
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed transition-colors">
              At MartBusy, we understand that e-commerce is more than just a website—it's your vision brought to life. 
              Our mission is to eliminate technical barriers and provide you with a high-performance ecosystem 
              designed for massive scale and seamless management.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-8 pt-8 border-t border-slate-100">
              <div>
                <p className="text-3xl font-black text-slate-900"><Counter value={2500} suffix="+" /></p>
                <p className="text-sm text-slate-500">Successful Stores</p>
              </div>
              <div>
                <p className="text-3xl font-black text-slate-900"><Counter value={45} /></p>
                <p className="text-sm text-slate-500">Global Reach</p>
              </div>
              <div>
                <p className="text-3xl font-black text-slate-900"><Counter value={180} suffix="%" /></p>
                <p className="text-sm text-slate-500">Customer Growth</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-12">
              <div className="glass p-8 rounded-[2rem] border-emerald-50 hover:border-emerald-200 transition-colors shadow-sm">
                <Rocket className="w-10 h-10 text-emerald-500 mb-4" />
                <h4 className="text-xl font-bold mb-2 text-slate-900">Rapid Growth</h4>
                <p className="text-sm text-slate-500">Scale your operations globally with our cloud-native infrastructure.</p>
              </div>
              <div className="glass p-8 rounded-[2rem] border-emerald-50 hover:border-emerald-200 transition-colors shadow-sm">
                <Zap className="w-10 h-10 text-emerald-600 mb-4" />
                <h4 className="text-xl font-bold mb-2 text-slate-900">Ultra-Fast</h4>
                <p className="text-sm text-slate-500">Lightning-fast load times specifically tuned for conversion optimization.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="glass p-8 rounded-[2rem] border-emerald-50 hover:border-emerald-200 transition-colors shadow-sm">
                <Shield className="w-10 h-10 text-emerald-700 mb-4" />
                <h4 className="text-xl font-bold mb-2 text-slate-900">Full Security</h4>
                <p className="text-sm text-slate-500">Enterprise-grade security and fraud protection at every touchpoint.</p>
              </div>
              <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-[2rem] flex items-center justify-center text-center shadow-lg">
                <h4 className="text-3xl font-black text-white leading-tight">Your Success is Our Priority.</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
