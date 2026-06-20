import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Features', href: '#features' },
    { name: 'Contact Us', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 200; // offset for navbar

      // Handle bottom of page (Contact section)
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (isAtBottom) {
        setActiveSection('#contact');
        return;
      }

      let currentSection = '#home';
      for (const link of navLinks) {
        const id = link.href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            currentSection = link.href;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (href) => {
    setActiveSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-auto',
        isScrolled ? 'py-4 glass border-b' : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" onClick={() => handleNavLinkClick('#home')} className="flex items-center gap-3.5 group">
          <div className="relative h-14 md:h-16 flex items-center justify-center transition-all duration-500 group-hover:scale-105">
            <img 
              src="/logo.png" 
              alt="MartBusy Logo" 
              loading="lazy"
              className="h-full w-auto object-contain drop-shadow-sm"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black font-display tracking-tight text-slate-900 leading-none">
              Mart<span className="text-emerald-500">Busy</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  'relative text-sm font-semibold transition-colors duration-300 py-1.5 px-1',
                  isActive ? 'text-primary' : 'text-slate-600 hover:text-slate-900'
                )}
                onClick={() => handleNavLinkClick(link.href)}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavBorder"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-b md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={cn(
                      'text-lg font-semibold transition-all duration-200 py-2 px-4 rounded-xl block',
                      isActive ? 'text-primary bg-emerald-50/60' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    )}
                    onClick={() => handleNavLinkClick(link.href)}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
