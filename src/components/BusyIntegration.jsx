import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Users, 
  Receipt, 
  ShoppingCart, 
  RefreshCw, 
  ShieldCheck,
  LayoutGrid,
  FileText
} from 'lucide-react';
import { cn } from '../lib/utils';

const integrationFeatures = [
  {
    title: "Item Master Sync",
    desc: "Real-time synchronization of your inventory, categories, and pricing directly from BUSY.",
    icon: <Database className="w-6 h-6" />,
    className: "md:col-span-2 md:row-span-1 bg-emerald-50/50 border-emerald-100",
    iconColor: "text-emerald-600"
  },
  {
    title: "Party Ledgers",
    desc: "Instant access to party-wise accounts and outstanding balances.",
    icon: <Users className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1 bg-blue-50/50 border-blue-100",
    iconColor: "text-blue-600"
  },
  {
    title: "Bill Receivables",
    desc: "Track and manage all your pending bills and receivables seamlessly.",
    icon: <Receipt className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-2 bg-purple-50/50 border-purple-100",
    iconColor: "text-purple-600"
  },
  {
    title: "Salesman Order Booking",
    desc: "Enable your sales team to book orders on-the-go with immediate sync to your central system.",
    icon: <ShoppingCart className="w-6 h-6" />,
    className: "md:col-span-2 md:row-span-1 bg-orange-50/50 border-orange-100",
    iconColor: "text-orange-600"
  },
  {
    title: "Real-time Synchronization",
    desc: "Zero delay between your offline BUSY data and your online digital storefront.",
    icon: <RefreshCw className="w-6 h-6" />,
    className: "md:col-span-2 md:row-span-1 bg-cyan-50/50 border-cyan-100",
    iconColor: "text-cyan-600"
  },
  {
    title: "Account Masters",
    desc: "Comprehensive management of all your account groups and ledgers.",
    icon: <FileText className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1 bg-rose-50/50 border-rose-100",
    iconColor: "text-rose-600"
  }
];

const BusyIntegration = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black font-display text-slate-900 mb-6"
          >
            Powerful <span className="text-emerald-500">BUSY</span> Integration
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-3xl mx-auto text-xl font-medium"
          >
            Bridge the gap between your accounting and your sales. Our deep integration with BUSY Accounting Software ensures your business data is always accurate and available.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {integrationFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={cn(
                "p-8 rounded-[2.5rem] border transition-all duration-300 group flex flex-col justify-between",
                feature.className
              )}
            >
              <div className="flex-grow">
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                  className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-500 bg-white shadow-lg border border-slate-100",
                    feature.iconColor
                  )}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <ShieldCheck className={cn("w-5 h-5", feature.iconColor)} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-emerald-100/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-100/20 rounded-full blur-[120px]" />
      </div>
    </section>
  );
};

export default BusyIntegration;
