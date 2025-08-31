"use client";

import { motion } from 'framer-motion';
import { MessageCircle, Phone, ArrowRight, Recycle } from 'lucide-react';
import { siteConfig } from '@/lib/seo';

export function CallToAction() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I want to schedule a pickup for my scrap materials. Please let me know your rates and availability.");
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 via-green-600 to-blue-600 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32"
        >
          <Recycle className="w-full h-full" />
        </motion.div>
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.2, 1, 1.2]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-24 h-24"
        >
          <Recycle className="w-full h-full" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Turn Your{' '}
            <span className="text-yellow-300">Waste Into Cash?</span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust us for fair rates, 
            prompt service, and professional handling of their recyclable materials.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
        >
          <motion.button
            onClick={handleWhatsApp}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 px-8 py-4 bg-white text-emerald-600 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
            <span>Schedule WhatsApp Pickup</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.a
            href={`tel:${siteConfig.businessPhone}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-600 rounded-xl font-bold text-lg transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            <span>Call Immediately</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { title: 'Free Pickup', description: 'No charges for collection at your doorstep' },
            { title: 'Best Rates', description: 'Market-leading prices for all materials' },
            { title: 'Instant Payment', description: 'Get paid immediately after weighing' }
          ].map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold mb-2">{benefit.title}</div>
              <div className="opacity-90">{benefit.description}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}