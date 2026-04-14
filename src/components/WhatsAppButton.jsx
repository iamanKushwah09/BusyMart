import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const phoneNumber = "918076901732"; // Updated to match hero
  const message = encodeURIComponent("Hello MartBusy! I'm interested in your e-commerce services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl text-white group"
    >
      <div className="absolute -top-12 right-0 bg-white text-black text-xs font-bold py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
        Chat with us!
        <div className="absolute -bottom-1 right-6 w-2 h-2 bg-white rotate-45" />
      </div>
      <MessageCircle className="w-8 h-8" />
    </motion.a>
  );
};

export default WhatsAppButton;
