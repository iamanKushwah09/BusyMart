import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ShieldCheck, TrendingUp, Zap,
  BarChart3, CheckCircle2,
  AlertCircle,
  Globe, Database, Users, MapPin, Route, CreditCard, LineChart,
  History, Smartphone, Lock, Search, PieChart, FileText, Image as ImageIcon,
  Maximize, Globe2, RefreshCw
} from 'lucide-react';
import { cn } from '../lib/utils';
import Counter from './Counter';

gsap.registerPlugin(ScrollTrigger);

// ─── Why Choose MartBusy ─────────────────────────────────────────────────────
const whyFeatures = [
  { icon: <Zap      />, title: 'Fast Setup',        desc: 'Go live in days, not months.',               color: 'text-orange-500 bg-orange-50  border-orange-100'  },
  { icon: <Maximize />, title: 'Scalable',          desc: 'Infrastructure that grows with you.',        color: 'text-blue-500   bg-blue-50    border-blue-100'    },
  { icon: <Lock     />, title: 'Secure',            desc: 'PCI-DSS compliant systems.',                 color: 'text-emerald-500 bg-emerald-50 border-emerald-100'},
  { icon: <Smartphone/>,title: 'Mobile-First',      desc: 'Perfect display on every device.',           color: 'text-purple-500  bg-purple-50  border-purple-100' },
  { icon: <BarChart3/>, title: 'Analytics',         desc: 'Real-time sales tracking.',                  color: 'text-cyan-500    bg-cyan-50    border-cyan-100'   },
  { icon: <Globe2   />, title: 'Global',            desc: 'Multi-currency and multi-language.',         color: 'text-rose-500    bg-rose-50    border-rose-100'   },
  { icon: <Database />, title: 'BUSY Integration',  desc: 'Real-time sync with BUSY accounting.',      color: 'text-indigo-500 bg-indigo-50 border-indigo-100' },
  { icon: <ShieldCheck/>,title:'GST Ready',         desc: 'E-Invoicing, E-Way Bills & GSTR filing.',   color: 'text-teal-500   bg-teal-50   border-teal-100'   },
];

// ─── Advanced BUSY Integration Cards ─────────────────────────────────────────
const advancedCards = [
  { title: 'Real-Time Stock Sync',  desc: 'Instant stock synchronization from BUSY.',                    icon: <RefreshCw  className="w-6 h-6" />, color: 'emerald', tag: 'Inventory'  },
  { title: 'Price Lists',           desc: 'Customer-wise and Vendor-wise price lists.',                   icon: <Users      className="w-6 h-6" />, color: 'blue',    tag: 'Pricing'    },
  { title: 'Image & Docs',          desc: 'Product Image & Document Management.',                         icon: <ImageIcon  className="w-6 h-6" />, color: 'violet',  tag: 'Media'      },
  { title: 'Approval Workflow',     desc: 'Order Approval Workflow for secure processing.',               icon: <CheckCircle2 className="w-6 h-6" />, color: 'rose', tag: 'Workflow'   },
  { title: 'GPS Tracking',          desc: 'Salesman GPS Tracking for field operations.',                  icon: <MapPin     className="w-6 h-6" />, color: 'amber',   tag: 'Field Ops'  },
  { title: 'Route Planning',        desc: 'Route Planning & Visit Monitoring.',                           icon: <Route      className="w-6 h-6" />, color: 'cyan',    tag: 'Logistics'  },
  { title: 'Collection Entry',      desc: 'Seamless payment and collection entry.',                       icon: <CreditCard className="w-6 h-6" />, color: 'emerald', tag: 'Payments'  },
  { title: 'Sales Analytics',       desc: 'Comprehensive Sales Analytics Dashboard.',                     icon: <LineChart  className="w-6 h-6" />, color: 'violet',  tag: 'Analytics'  },
  { title: 'Order History',         desc: 'Detailed Customer Order History.',                             icon: <History    className="w-6 h-6" />, color: 'blue',    tag: 'Orders'     },
  { title: 'Vendor Reports',        desc: 'Vendor Performance Reports for insights.',                     icon: <TrendingUp className="w-6 h-6" />, color: 'amber',   tag: 'Reports'    },
  { title: 'Mobile Responsive',     desc: 'Mobile Responsive Design for all devices.',                   icon: <Smartphone className="w-6 h-6" />, color: 'cyan',    tag: 'Mobile'     },
  { title: 'Access Control',        desc: 'Role-Based User Access Control.',                              icon: <Lock       className="w-6 h-6" />, color: 'rose',    tag: 'Security'   },
  { title: 'Auto Sync',             desc: 'Automatic Sale Order Sync with BUSY.',                        icon: <Database   className="w-6 h-6" />, color: 'emerald', tag: 'Sync'       },
  { title: 'Ledger Reports',        desc: 'Ledger & Outstanding Ageing Reports.',                        icon: <FileText   className="w-6 h-6" />, color: 'violet',  tag: 'Finance'    },
  { title: 'Product Search',        desc: 'Product Search, Filter & Category Navigation.',               icon: <Search     className="w-6 h-6" />, color: 'blue',    tag: 'Discovery'  },
  { title: 'BI Reports',            desc: 'Business Intelligence & Performance Reports.',                 icon: <PieChart   className="w-6 h-6" />, color: 'rose',    tag: 'BI'         },
];

// ─── Color Map ────────────────────────────────────────────────────────────────
const cmap = {
  emerald: { bg:'bg-emerald-50', text:'text-emerald-600', border:'border-emerald-100', badge:'bg-emerald-100 text-emerald-700', glow:'hover:shadow-emerald-100/70' },
  blue:    { bg:'bg-blue-50',    text:'text-blue-600',    border:'border-blue-100',    badge:'bg-blue-100 text-blue-700',       glow:'hover:shadow-blue-100/70'    },
  violet:  { bg:'bg-violet-50',  text:'text-violet-600',  border:'border-violet-100',  badge:'bg-violet-100 text-violet-700',   glow:'hover:shadow-violet-100/70'  },
  rose:    { bg:'bg-rose-50',    text:'text-rose-600',    border:'border-rose-100',    badge:'bg-rose-100 text-rose-700',       glow:'hover:shadow-rose-100/70'    },
  amber:   { bg:'bg-amber-50',   text:'text-amber-600',   border:'border-amber-100',   badge:'bg-amber-100 text-amber-700',    glow:'hover:shadow-amber-100/70'   },
  cyan:    { bg:'bg-cyan-50',    text:'text-cyan-600',    border:'border-cyan-100',    badge:'bg-cyan-100 text-cyan-700',       glow:'hover:shadow-cyan-100/70'    },
};

// ─── Main Component ───────────────────────────────────────────────────────────
const EcomBusyIntegration = () => {
  const sectionRef = useRef();

  useGSAP(() => {
    gsap.to('.blob-rotate', { rotation: 360, duration: 30, repeat: -1, ease: 'linear' });
  }, { scope: sectionRef });

  return (
    <section id="features" ref={sectionRef} className="relative bg-white overflow-hidden">

      {/* BG BLOBS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob-rotate absolute -top-60 -left-60 w-[700px] h-[700px] bg-emerald-100/25 rounded-full blur-[160px]" />
        <div className="blob-rotate absolute -bottom-60 -right-60 w-[700px] h-[700px] bg-blue-100/20   rounded-full blur-[160px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-50/20 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-28">

        {/* ── 1. WHY 10,000+ BRANDS CHOOSE MARTBUSY ── */}
        <div className="mb-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="glass rounded-[3rem] p-12 md:p-20 border border-emerald-50 relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-50/20 via-transparent to-green-50/20 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black font-display text-center mb-4 text-slate-900">
                Why <Counter value={10000} suffix="+" /> Brands
              </h2>
              <p className="text-center text-4xl md:text-5xl font-black font-display mb-16">
                <span className="text-emerald-500 relative inline-block">
                  Choose MartBusy
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-emerald-200/60 z-[-1]" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 10 Q50 20 100 10" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  </svg>
                </span>
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                {whyFeatures.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className={cn('w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border transition-all duration-300 group-hover:scale-110 group-hover:rotate-3', f.color)}>
                      {React.cloneElement(f.icon, { size: 28 })}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-slate-800 group-hover:text-emerald-600 transition-colors">{f.title}</h3>
                      <p className="text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── 2. ADVANCED BUSY INTEGRATION — 16 CARDS ── */}
        <div className="mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-sm font-bold text-emerald-700 mb-4">
              <ShieldCheck className="w-4 h-4" /> Enterprise Grade Software
            </span>
            <h3 className="text-3xl md:text-4xl font-black font-display text-slate-900">
              Advanced <span className="text-emerald-500">BUSY</span> Integration
            </h3>
            <p className="text-slate-500 max-w-2xl mx-auto mt-3 text-lg font-medium">
              16 powerful modules for seamless data synchronization with BUSY.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {advancedCards.map((f, i) => {
              const c = cmap[f.color];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  className={cn('bg-white p-7 rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col', c.border, c.glow)}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className={cn('w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110', c.bg, c.text)}>
                      {f.icon}
                    </div>
                    <span className={cn('text-xs font-bold px-2.5 py-1 rounded-lg self-center', c.badge)}>{f.tag}</span>
                  </div>
                  <h4 className="text-[15px] font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">{f.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium mt-auto">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── 3. WHY INDIAN SELLERS CHOOSE BUSY — DARK BANNER ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900" />
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: 'radial-gradient(circle at 20% 50%,#10b981 0%,transparent 50%),radial-gradient(circle at 80% 20%,#3b82f6 0%,transparent 40%)' }}
          />
          <div className="relative z-10 p-10 md:p-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-bold text-emerald-300 mb-6">
                <AlertCircle className="w-4 h-4" /> Why Indian Sellers Choose BUSY
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                E-commerce sellers <em className="not-italic text-emerald-400">cannot use</em> the Composition Scheme — GST compliance is mandatory from Day 1.
              </h3>
              <p className="text-slate-400 font-medium leading-relaxed text-lg">
                BUSY is purpose-built for India's regulatory landscape. From TCS reconciliation to multi-state GSTINs, it handles the compliance burden so you can focus on growing your sales.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: 'Mandatory GST from Day 1',  sub: 'No Composition Scheme for ecom sellers'   },
                { label: 'TCS Auto-Reconciliation',   sub: 'Section 52 CGST — handled automatically' },
                { label: 'Multi-State Scalability',   sub: 'Manage 15+ state registrations in BUSY'  },
                { label: 'Audit-Ready Books',          sub: 'Single source of truth for all channels'  },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }}
                  className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 hover:bg-white/10 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-bold text-sm">{item.label}</p>
                    <p className="text-slate-400 text-xs font-medium">{item.sub}</p>
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

export default EcomBusyIntegration;
