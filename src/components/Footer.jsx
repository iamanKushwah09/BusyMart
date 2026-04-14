import React from 'react';
import { ShoppingBag, Mail, Phone, MapPin, Globe, Share2, Heart, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-emerald-50/30 pt-20 pb-10 border-t border-emerald-100 mt-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200">
                <ShoppingBag className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold font-display tracking-tight text-slate-900">
                MartBusy
              </span>
            </a>
            <p className="text-slate-500 leading-relaxed">
              Empowering the next generation of e-commerce winners with cutting-edge technology and localized solutions.
            </p>
            <div className="flex gap-4">
              {[Send, Share2, Heart, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white border border-emerald-100 flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-slate-900">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Features', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-emerald-600 transition-colors font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-slate-900">Services</h4>
            <ul className="space-y-4">
              {['Web Development', 'Store Setup', 'Payment Gateways', 'Digital Marketing', '24/7 Support'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-emerald-600 transition-colors font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-slate-900">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-500">
                <MapPin size={18} className="text-emerald-600" />
                <span className="font-medium">123 Digital Square, IND</span>
              </li>
              <li className="flex items-center gap-3 text-slate-500">
                <Phone size={18} className="text-emerald-600" />
                <span className="font-medium">+91 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3 text-slate-500">
                <Mail size={18} className="text-emerald-600" />
                <span className="font-medium">hello@martbusy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm font-medium">
          <p>© {new Date().getFullYear()} <a href="https://logicfirst.in" className="hover:text-green-600">LogicFirst Technologies</a> All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-emerald-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
