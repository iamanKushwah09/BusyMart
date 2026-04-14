import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield, Zap, History } from 'lucide-react';
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
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-4 flex items-center gap-2">
              <History size={18} /> Read Our History
            </h2>
            <h3 className="text-4xl md:text-5xl font-black font-display mb-8 leading-tight text-slate-900 transition-colors">
              Welcome to <span className="text-emerald-500">LogicFirst Technologies</span>
            </h3>
            <p className="text-xl font-medium text-slate-700 mb-6 leading-relaxed">
              An end-to-end IT solution company based in Noida, India.
            </p>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Established in 2021, LogicFirst Technologies is a dynamic team passionate about revolutionizing IT with innovative solutions. We specialize in web design, search engine optimization (SEO), web application development, and business process applications, including accounting, VAT management, billing, inventory control, excise, payroll, and CRM.
              </p>
              <p>
                Additionally, we provide comprehensive computer networking infrastructure solutions. Our customer-centric approach combines creativity with cutting-edge technology to deliver tailored solutions that exceed expectations.
              </p>
              <p>
                Whether you're a startup building your online presence or an enterprise streamlining operations, we have the expertise to help you succeed. Driven by our core values of integrity, innovation, and excellence, we are committed to delivering high-quality solutions that boost revenues, reduce costs, and strengthen customer relationships.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8 pt-10 mt-10 border-t border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Integrity</h4>
                  <p className="text-sm text-slate-500">Pure Honesty in Results</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Innovation</h4>
                  <p className="text-sm text-slate-500">Always Moving Forward</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-emerald-50 rounded-[3rem] blur-2xl opacity-50 -z-10" />
            <div className="glass p-10 md:p-16 rounded-[3rem] border-emerald-50 shadow-2xl space-y-8">
              <h4 className="text-3xl font-black text-slate-900 leading-tight">
                Partnering with you to achieve <span className="text-emerald-500">growth and success</span>.
              </h4>
              <p className="text-slate-600 text-lg leading-relaxed italic">
                "At LogicFirst Technologies, we don't just provide services; we partner with you to achieve growth and success. Let LogicFirst make your digital dreams a reality—one innovative solution at a time."
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-emerald-50 p-6 rounded-2xl">
                  <p className="text-3xl font-black text-emerald-600">2021</p>
                  <p className="text-sm text-emerald-900/60 font-bold uppercase tracking-wider">Established</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl">
                  <p className="text-3xl font-black text-slate-900">100%</p>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Commitment</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
