"use client";

import { motion } from 'framer-motion';
import { FileText, Package, Wrench, Smartphone, TrendingUp } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: FileText,
      title: 'Paper & Cardboard',
      description: 'Newspapers, magazines, books, cardboard boxes, office paper',
      rate: '₹8-12/kg',
      image: 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg'
    },
    {
      icon: Package,
      title: 'Plastic Materials',
      description: 'Bottles, containers, packaging materials, plastic furniture',
      rate: '₹5-15/kg',
      image: 'https://images.pexels.com/photos/3737492/pexels-photo-3737492.jpeg'
    },
    {
      icon: Wrench,
      title: 'Metal Scrap',
      description: 'Iron, steel, aluminum, copper, brass, and other metals',
      rate: '₹15-45/kg',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg'
    },
    {
      icon: Smartphone,
      title: 'E-Waste',
      description: 'Old phones, laptops, TVs, electronics, computer parts',
      rate: 'Best Price',
      image: 'https://images.pexels.com/photos/4883800/pexels-photo-4883800.jpeg'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We collect all types of recyclable materials at competitive rates with doorstep pickup
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {service.rate}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg flex items-center justify-center">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-4 flex items-center text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span>High demand rates</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Don't see what you're looking for?
          </p>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
            Contact us for custom requirements and bulk collections
          </span>
        </motion.div>
      </div>
    </section>
  );
}