"use client";

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/seo';

export function WhatsAppButton() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your kabadi services. Please provide more information.");
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsApp}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 25px 50px -12px rgba(37, 211, 102, 0.5)"
      }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg z-40 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:animate-bounce" />
      
      {/* Pulse Animation */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-green-500 rounded-full"
      />
    </motion.button>
  );
}