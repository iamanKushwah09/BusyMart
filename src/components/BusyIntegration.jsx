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
  FileText,
  MapPin,
  Route,
  CreditCard,
  LineChart,
  History,
  TrendingUp,
  Smartphone,
  Lock,
  Search,
  PieChart,
  CheckCircle2,
  Image as ImageIcon
} from 'lucide-react';
import { cn } from '../lib/utils';

const advancedFeatures = [
  {
    title: "Real-Time Stock Sync",
    desc: "Instant stock synchronization from BUSY.",
    icon: <RefreshCw className="w-5 h-5" />,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100"
  },
  {
    title: "Price Lists",
    desc: "Customer-wise and Vendor-wise price lists.",
    icon: <Users className="w-5 h-5" />,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100"
  },
  {
    title: "Image & Docs",
    desc: "Product Image & Document Management.",
    icon: <ImageIcon className="w-5 h-5" />,
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100"
  },
  {
    title: "Approval Workflow",
    desc: "Order Approval Workflow for secure processing.",
    icon: <CheckCircle2 className="w-5 h-5" />,
    color: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-100"
  },
  {
    title: "GPS Tracking",
    desc: "Salesman GPS Tracking for field operations.",
    icon: <MapPin className="w-5 h-5" />,
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100"
  },
  {
    title: "Route Planning",
    desc: "Route Planning & Visit Monitoring.",
    icon: <Route className="w-5 h-5" />,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100"
  },
  {
    title: "Collection Entry",
    desc: "Seamless payment and collection entry.",
    icon: <CreditCard className="w-5 h-5" />,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100"
  },
  {
    title: "Sales Analytics",
    desc: "Comprehensive Sales Analytics Dashboard.",
    icon: <LineChart className="w-5 h-5" />,
    color: "text-pink-600",
    bg: "bg-pink-50",
    border: "border-pink-100"
  },
  {
    title: "Order History",
    desc: "Detailed Customer Order History.",
    icon: <History className="w-5 h-5" />,
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100"
  },
  {
    title: "Vendor Reports",
    desc: "Vendor Performance Reports for insights.",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100"
  },
  {
    title: "Mobile Responsive",
    desc: "Mobile Responsive Design for all devices.",
    icon: <Smartphone className="w-5 h-5" />,
    color: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-100"
  },
  {
    title: "Access Control",
    desc: "Role-Based User Access Control.",
    icon: <Lock className="w-5 h-5" />,
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-100"
  },
  {
    title: "Auto Sync",
    desc: "Automatic Sale Order Sync with BUSY.",
    icon: <Database className="w-5 h-5" />,
    color: "text-lime-600",
    bg: "bg-lime-50",
    border: "border-lime-100"
  },
  {
    title: "Ledger Reports",
    desc: "Ledger & Outstanding Ageing Reports.",
    icon: <FileText className="w-5 h-5" />,
    color: "text-fuchsia-600",
    bg: "bg-fuchsia-50",
    border: "border-fuchsia-100"
  },
  {
    title: "Product Search",
    desc: "Product Search, Filter & Category Navigation.",
    icon: <Search className="w-5 h-5" />,
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    border: "border-yellow-100"
  },
  {
    title: "BI Reports",
    desc: "Business Intelligence & Performance Reports.",
    icon: <PieChart className="w-5 h-5" />,
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100"
  }
];

const BusyIntegration = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-1.5 px-4 mb-6 rounded-full bg-emerald-100/50 border border-emerald-200 text-sm font-semibold text-emerald-800"
          >
            <ShieldCheck className="w-4 h-4" />
            Enterprise Grade Software
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black font-display text-slate-900 mb-6 leading-tight"
          >
            Advanced <span className="text-emerald-500">BUSY</span> Integration
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-3xl mx-auto text-lg md:text-xl font-medium"
          >
            Experience seamless online data synchronization with BUSY. Elevate your business with professional tools designed to enhance efficiency and growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto relative z-10">
          {advancedFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-300 group flex flex-col h-full"
            >
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:rotate-6", feature.bg, feature.border, feature.color)}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium mt-auto">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] -left-[10%] w-[50%] h-[50%] bg-emerald-200/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-blue-200/20 rounded-full blur-[120px]" />
      </div>
    </section>
  );
};

export default BusyIntegration;
