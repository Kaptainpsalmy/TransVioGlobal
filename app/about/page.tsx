'use client';

import { motion } from 'framer-motion';
import { 
  FaBullseye, 
  FaEye, 
  FaHandshake, 
  FaUsers, 
  FaLightbulb, 
  FaChartLine, 
  FaGlobeAmericas, 
  FaPeopleCarry,
  FaLinkedinIn,
  FaEnvelope
} from 'react-icons/fa';
import Image from 'next/image';

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

 

 

  const coreValues = [
    { icon: <FaHandshake size={24} />, title: "Integrity", description: "We do business with honesty, transparency, and ethical practices in all our operations." },
    { icon: <FaUsers size={24} />, title: "Customer Focus", description: "Our customers' success is our success. We listen, adapt, and go the extra mile." },
    { icon: <FaLightbulb size={24} />, title: "Innovation", description: "We embrace technology and creative thinking to solve complex logistics challenges." },
    { icon: <FaChartLine size={24} />, title: "Excellence", description: "We set high standards and continuously improve our services and operations." },
    { icon: <FaGlobeAmericas size={24} />, title: "Sustainability", description: "We're committed to reducing our environmental impact through green logistics." },
    { icon: <FaPeopleCarry size={24} />, title: "Teamwork", description: "We collaborate across borders and functions to deliver seamless service." }
  ];

  const stats = [
    { number: "1,250+", label: "Vehicles in Our Fleet" },
    { number: "75", label: "Warehouses Worldwide" },
    { number: "3.5M", label: "Square Feet of Storage" },
    { number: "98%", label: "On-Time Delivery Rate" }
  ];

  const certifications = [
    { image: "/cert1.png", label: "ISO 9001:2015 Certified" },
    { image: "/cert2.png", label: "C-TPAT Certified" },
    { image: "/cert3.png", label: "GDP Compliant" },
    { image: "/cert4.png", label: "SmartWay Transport Partner" }
  ];

  const partners = [
    { image: "/partner1.png" },
    { image: "/partner2.png" },
    { image: "/partner3.png" },
    { image: "/partner4.png" },
    { image: "/partner5.png" }
  ];

  return (
    <>
      {/* Page Banner */}
      <section className="relative bg-gradient-to-r from-blue-900/80 to-indigo-900/80 backdrop-blur-sm py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/texture.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About TransVioGlobal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Delivering excellence through innovation and reliability
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-300">
              Our Story
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600">
              Founded in 2005, TransVioGlobal began as a small regional logistics provider with just five trucks and a warehouse. Today, we&apos;ve grown into a global leader in supply chain solutions, serving clients in over 150 countries.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-600">
              Our journey has been marked by strategic acquisitions, technological innovation, and an unwavering commitment to customer satisfaction. From our humble beginnings, we&apos;ve expanded our services to include air and ocean freight, warehousing, e-commerce fulfillment, and specialized logistics solutions.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-600">
              What hasn&apos;t changed is our dedication to treating every shipment as if it were our own, ensuring your goods arrive safely, on time, and with the personalized service that has become our hallmark.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 p-2">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/warehouse.png"
                  alt="TransVioGlobal history"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gradient-to-r from-blue-50/50 to-cyan-50/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white mb-6">
                <FaBullseye size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-300 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To simplify global commerce by providing innovative, reliable, and sustainable logistics solutions that empower businesses to grow and thrive in an interconnected world.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white mb-6">
                <FaEye size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-300 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted logistics partner worldwide, recognized for operational excellence, customer-centric innovation, and our positive impact on communities and the environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-300 mb-3">
            Our Core Values
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide every decision we make
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      
      {/* Fleet & Facilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-300 mb-3">
            Our Fleet & Facilities
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-sm text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-700">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { image: "/fleet1.jpg", caption: "Modern Delivery Fleet" },
            { image: "/fleet2.jpg", caption: "Automated Warehouse" },
            { image: "/fleet3.jpg", caption: "Air Cargo Partners" },
            { image: "/fleet4.jpg", caption: "Ocean Freight Network" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-video rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
              <Image
                src={item.image}
                alt={item.caption}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <p className="text-white font-medium">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications & Partners */}
      <section className="bg-gradient-to-r from-blue-50/50 to-cyan-50/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-300 mb-3">
              Certifications & Partners
            </motion.h2>
          </motion.div>

          <div className="mb-16">
            <h3 className="text-xl font-semibold text-gray-300 mb-8 text-center">Our Certifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-sm text-center"
                >
                  <div className="relative h-20 mb-4">
                    <Image
                      src={cert.image}
                      alt={cert.label}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-gray-700">{cert.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-300 mb-8 text-center">Strategic Partners</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-sm"
                >
                  <div className="relative h-16 w-32">
                    <Image
                      src={partner.image}
                      alt={`Partner ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Experience the TransVioGlobal Difference?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us with their logistics needs.
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-400/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
