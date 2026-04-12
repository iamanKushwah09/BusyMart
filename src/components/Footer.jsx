import React from 'react';
import { ShoppingBag, Mail, Phone, MapPin, Globe, Share2, Heart, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050914] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <ShoppingBag className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold font-display tracking-tight text-white">
                BusyMart
              </span>
            </a>
            <p className="text-white/50 leading-relaxed">
              Empowering the next generation of e-commerce winners with cutting-edge technology and localized solutions.
            </p>
            <div className="flex gap-4">
              {[Send, Share2, Heart, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/50 hover:text-white hover:border-primary/50 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Features', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/50 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-4">
              {['Web Development', 'Store Setup', 'Payment Gateways', 'Digital Marketing', '24/7 Support'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/50 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/50">
                <MapPin size={18} className="text-primary" />
                <span>123 Digital Square, IND</span>
              </li>
              <li className="flex items-center gap-3 text-white/50">
                <Phone size={18} className="text-primary" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3 text-white/50">
                <Mail size={18} className="text-primary" />
                <span>hello@busymart.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-sm">
          <p>© {new Date().getFullYear()} BusyMart. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
