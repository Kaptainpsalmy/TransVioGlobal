'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { 
  FaTruck, 
  FaPlane, 
  FaShip, 
  FaWarehouse,
  FaGlobe,
  FaShieldAlt,
  FaClock,
  FaHeadset,
  FaQuoteLeft,
  FaStar,
  FaStarHalfAlt,
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
  FaArrowRight
} from 'react-icons/fa';

// Animation variants
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



export default function HomeSections() {
  return (
    <div className="space-y-20 md:space-y-32">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 backdrop-blur-sm z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="show"
              variants={containerVariants}
              className="text-center lg:text-left"
            >
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Delivering Excellence Worldwide
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Fast, reliable, and secure logistics solutions tailored to your business needs. Wherever you need it, whenever you need it.
              </motion.p>
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a 
                  href="/track" 
                  className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-400/30 transition-all"
                >
                  Track Shipment
                </a>
                <a 
                  href="/book" 
                  className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg font-medium hover:bg-white/20 transition-all"
                >
                  Get a Quote
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 p-2">
                 <div className="bg-gradient-to-br from-cyan-400/20 to-blue-500/20 aspect-video rounded-xl flex items-center justify-center">
                 
                <Image 
                  src="/Hero.png" 
                  alt="Logistics Hero Image" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                  className="w-full h-full rounded-lg shadow-lg"
                />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-300 mb-3">
            Our Services
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive logistics solutions for businesses of all sizes
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden border border-white/20 hover:shadow-lg transition-all"
            >
              <div className="p-6">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a 
                  href={service.link} 
                  className="text-blue-500 hover:text-blue-600 font-medium flex items-center gap-1"
                >
                  Learn More <FaArrowRight className="text-sm" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Tracking Section */}
      <section className="bg-gradient-to-r from-blue-900/80 to-indigo-900/80 backdrop-blur-md py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-white/20 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Track Your Shipment</h3>
            <p className="text-white/80 mb-6">Enter your tracking number to get real-time updates</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="text" 
                placeholder="Enter tracking number" 
                className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-400/30 transition-all flex items-center justify-center gap-2"
              >
                Track <FaSearch />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-300 mb-3">
            Why Choose TransVioGlobal?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
            We go the extra mile to ensure your shipments arrive safely and on time
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

  

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900/80 to-indigo-900/80 backdrop-blur-md py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Simplify Your Logistics?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get a free consultation and quote tailored to your business needs.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-400/30 transition-all"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Data
const services = [
  {
    icon: <FaTruck size={24} />,
    title: "Domestic Shipping",
    description: "Reliable nationwide delivery with real-time tracking and guaranteed time windows.",
    link: "/services#domestic"
  },
  {
    icon: <FaPlane size={24} />,
    title: "International Shipping",
    description: "Seamless cross-border logistics with customs clearance and end-to-end visibility.",
    link: "/services#international"
  },
  {
    icon: <FaShip size={24} />,
    title: "Freight Services",
    description: "Air, sea, and land freight solutions optimized for cost and delivery time.",
    link: "/services#freight"
  },
  {
    icon: <FaWarehouse size={24} />,
    title: "Warehouse Solutions",
    description: "Smart storage, inventory management, and fulfillment services.",
    link: "/services#warehouse"
  }
];

const features = [
  {
    icon: <FaGlobe size={20} />,
    title: "Global Network",
    description: "Partners in 150+ countries ensuring seamless international logistics."
  },
  {
    icon: <FaShieldAlt size={20} />,
    title: "Secure Handling",
    description: "Advanced security protocols and insured shipments for peace of mind."
  },
  {
    icon: <FaClock size={20} />,
    title: "On-Time Delivery",
    description: "95% on-time delivery rate with real-time tracking updates."
  },
  {
    icon: <FaHeadset size={20} />,
    title: "24/7 Support",
    description: "Dedicated customer service available anytime you need assistance."
  }
];

const testimonials = [
  {
    quote: "TransVioGlobal has transformed our supply chain. Their international shipping solutions saved us 30% in logistics costs while improving delivery times.",
    name: "Sarah Johnson",
    position: "CEO, TechGadgets Inc.",
    rating: 5,
    image: "/images/client1.jpg"
  },
  {
    quote: "Their warehouse management system integrated perfectly with our e-commerce platform, reducing our fulfillment time by 40%.",
    name: "Michael Chen",
    position: "Operations Director, FashionHub",
    rating: 4.5,
    image: "/images/client2.jpg"
  },
  {
    quote: "The real-time tracking and proactive customer service make TransVioGlobal our preferred logistics partner for critical shipments.",
    name: "David Martinez",
    position: "Supply Chain Manager, PharmaCare",
    rating: 5,
    image: "/images/client3.jpg"
  }
];

// Testimonials Component
function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="max-w-7xl overflow-hidden mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
        className="text-center mb-16"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-300 mb-3">
          What Our Clients Say
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
          Trusted by businesses worldwide
        </motion.p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          key={currentTestimonial}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-8 md:p-10 border border-white/20"
        >
          <div className="mb-6 text-blue-500">
            <FaQuoteLeft size={24} />
          </div>
          <p className="text-lg text-gray-700 mb-8">
            {testimonials[currentTestimonial].quote}
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 overflow-hidden">
              {/* Replace with actual image */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                Avatar
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</h4>
              <p className="text-gray-600 text-sm">{testimonials[currentTestimonial].position}</p>
              <div className="flex mt-1">
                {[...Array(5)].map((_, i) => (
                  i < Math.floor(testimonials[currentTestimonial].rating) ? (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ) : i < testimonials[currentTestimonial].rating ? (
                    <FaStarHalfAlt key={i} className="text-yellow-400 text-sm" />
                  ) : (
                    <FaStar key={i} className="text-gray-300 text-sm" />
                  )
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center items-center gap-4 mt-8">
          <button 
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all"
          >
            <FaChevronLeft />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentTestimonial ? 'bg-blue-500 w-6' : 'bg-white/30'}`}
              />
            ))}
          </div>
          <button 
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
