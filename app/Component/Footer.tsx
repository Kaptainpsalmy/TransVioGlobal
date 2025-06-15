'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock
} from 'react-icons/fa';

const Footer = () => {
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

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Track Shipment', href: '/track' },
    { name: 'Book Shipment', href: '/book' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Domestic Shipping', href: '/services#domestic' },
    { name: 'International Shipping', href: '/services#international' },
    { name: 'Freight Services', href: '/services#freight' },
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: 'Kargo Plaza No: 12, Kat: 3 Atatürk Mahallesi, Havalimanı Caddesi Arnavutköy, 34283 İstanbul, Türkiye' },
    { icon: <FaPhone />, text: '+902129884560' },
    { icon: <FaClock />, text: 'Mon-Fri: 8AM - 6PM (GMT +3)' },
  ];



  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-blue-900/80 to-indigo-900/80 backdrop-blur-md text-white pt-16 pb-8 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center">
              {/* <img src="/images/logo-white.png" alt="TransVioGlobal Logo" className="h-10 mr-3" /> */}
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                TransVioGlobal
              </span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Delivering excellence in global logistics with innovative solutions and unparalleled customer service.
            </p>
      
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link 
                    href={link.href} 
                    className="text-white/80 hover:text-cyan-300 text-sm transition-colors flex items-center"
                  >
                    <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link 
                    href={service.href} 
                    className="text-white/80 hover:text-cyan-300 text-sm transition-colors flex items-center"
                  >
                    <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-cyan-300 mr-3 mt-0.5">{contact.icon}</span>
                  <span className="text-white/80 text-sm">{contact.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TransVioGlobal. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-white/60 hover:text-cyan-300 text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-white/60 hover:text-cyan-300 text-sm transition-colors">Terms of Service</Link>
            <Link href="#" className="text-white/60 hover:text-cyan-300 text-sm transition-colors">Sitemap</Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
