'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCheckCircle, 
  FaPlane, 
  FaShip, 
  FaTruck,
  FaChartLine,
  FaLock,
  FaBolt,
  FaEye,

} from 'react-icons/fa';
import Image from 'next/image';
const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('domestic');

  const tabs = [
    { id: 'domestic', label: 'Domestic Shipping' },
    { id: 'international', label: 'International Shipping' },
    { id: 'freight', label: 'Freight Services' },
  
  ];

  const benefits = [
    { icon: <FaChartLine size={24} />, title: 'Cost Efficiency', description: 'Optimized routes and volume discounts reduce your logistics spend.' },
    { icon: <FaLock size={24} />, title: 'Secure Handling', description: 'Advanced security protocols protect your valuable shipments.' },
    { icon: <FaBolt size={24} />, title: 'Fast Transit', description: 'Priority handling and express options for urgent shipments.' },
    { icon: <FaEye size={24} />, title: 'Full Visibility', description: 'Real-time tracking from pickup to final delivery.' }
  ];

  const freightOptions = [
    { icon: <FaPlane size={24} />, title: 'Air Freight', description: 'Fastest transit times with our global air cargo network and airline partnerships.' },
    { icon: <FaShip size={24} />, title: 'Ocean Freight', description: 'Cost-effective solutions for large shipments with FCL and LCL options.' },
    { icon: <FaTruck size={24} />, title: 'Road Freight', description: 'Reliable overland transport with temperature-controlled options.' }
  ];

  return (
 <>

      <section className="relative bg-gradient-to-r from-blue-900/80 to-indigo-900/80 backdrop-blur-sm py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Comprehensive logistics solutions tailored to your business needs
          </motion.p>
        </div>
      </section>

      {/* Services Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <div className="flex space-x-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
                    : 'bg-white/80 hover:bg-white text-gray-700 backdrop-blur-sm border border-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Domestic Shipping */}
        {activeTab === 'domestic' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-lg"
          >
            <div className="p-2">
          <div className="bg-gradient-to-br from-blue-100/50 to-cyan-100/50 rounded-xl  overflow-hidden">
                {/* Replace with actual image */}
            <div className="relative bg-gradient-to-br from-cyan-400/20 to-blue-500/20 aspect-video rounded-xl overflow-hidden">
            <Image 
            src="/domestic-shipping.png" 
            alt="Logistics Hero Image" 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority  // Optional: if this is above-the-fold image
            />
            </div>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Domestic Shipping Solutions</h2>
              <p className="text-gray-600 mb-6">
                Our nationwide network ensures fast, reliable delivery to any location within the country. Whether you need same-day, next-day, or scheduled deliveries, we have the solution for you.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Same-day and next-day delivery options",
                  "Real-time tracking and notifications",
                  "Temperature-controlled transport available",
                  "Dedicated account management",
                  "Flexible pickup and delivery windows"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="text-cyan-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href="/book"
                className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-400/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request a Quote
              </motion.a>
            </div>
          </motion.div>
        )}

        {/* International Shipping */}
        {activeTab === 'international' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-lg"
          >
            <div className="p-2">
              <div className="bg-gradient-to-br from-blue-100/50 to-cyan-100/50 rounded-xl overflow-hidden">
                {/* Replace with actual image */}
                    <div className="relative bg-gradient-to-br from-cyan-400/20 to-blue-500/20 aspect-video rounded-xl overflow-hidden">
            <Image 
            src="/international.png" 
            alt="Logistics Hero Image" 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority  // Optional: if this is above-the-fold image
            />
            </div>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">International Shipping</h2>
              <p className="text-gray-600 mb-6">
                Navigate global trade with confidence using our comprehensive international shipping services. We handle customs clearance, documentation, and compliance so you don&apos;t have to.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Air, sea, and land freight options",
                  "Customs brokerage and compliance",
                  "Door-to-door international delivery",
                  "Trade lane expertise in 150+ countries",
                  "Duty and tax optimization"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="text-cyan-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href="/book"
                className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-400/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request a Quote
              </motion.a>
            </div>
          </motion.div>
        )}

        {/* Freight Services */}
        {activeTab === 'freight' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-lg"
          >
            <div className="p-2">
              <div className="bg-gradient-to-br from-blue-100/50 to-cyan-100/50 rounded-xl  overflow-hidden">
                {/* Replace with actual image */}
                   <div className="relative bg-gradient-to-br from-cyan-400/20 to-blue-500/20 aspect-video rounded-xl overflow-hidden">
            <Image 
            src="/freight.png" 
            alt="Logistics Hero Image" 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority  // Optional: if this is above-the-fold image
            />
            </div>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Freight Services</h2>
              <p className="text-gray-600 mb-8">
                From small parcels to full container loads, we provide flexible freight solutions optimized for cost, speed, and reliability across all transport modes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {freightOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="text-cyan-500 mb-3">{option.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{option.title}</h3>
                    <p className="text-gray-600 text-sm">{option.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.a
                href="/book"
                className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-400/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request a Quote
              </motion.a>
            </div>
          </motion.div>
        )}
      </section>

      {/* Service Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-3">Benefits of Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Why businesses choose TransVioGlobal for their logistics needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-sm hover:shadow-md transition-all text-center"
            >
              <div className="text-cyan-500 mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900/80 to-indigo-900/80 backdrop-blur-md py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Custom Logistics Solution?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Our experts will design a service package tailored to your specific requirements.
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-400/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
 </>
  );
};

export default ServicesPage;