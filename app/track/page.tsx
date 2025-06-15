'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaSearch, 
  FaPrint, 
  FaEnvelope, 
  FaBell, 
  FaHeadset,
  FaCheckCircle,
  FaTruck,
  FaCircle,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';

const TrackShipmentPage = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Why isn't my tracking number working?",
      answer: "Tracking numbers typically take 1-2 hours to activate in our system after processing. If your tracking number isn't working after this time, please ensure you've entered it correctly. If the issue persists, contact our customer service team for assistance."
    },
    {
      question: "My package status hasn't updated in several days. What should I do?",
      answer: "While most shipments update regularly, there can be delays in scanning during transit, especially for international shipments or in remote areas. If your package hasn't updated for more than 48 hours beyond the expected scan time, please contact us with your tracking number for investigation."
    },
    {
      question: "Can I change the delivery address after shipment?",
      answer: "Address changes may be possible depending on the shipment status and service level. Please contact our customer service immediately with your tracking number to request an address change. Additional fees may apply."
    },
    {
      question: 'What does "Delivery Exception" mean?',
      answer: 'A delivery exception occurs when there\'s an unexpected event that could delay delivery, such as weather conditions, incorrect address, or customs hold. Check the detailed status for more information, or contact us for assistance resolving the issue.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      setShowResults(true);
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const timelineSteps = [
    {
      status: 'Order Processed',
      date: 'May 15, 2023 - 09:30 AM',
      description: 'Your shipment has been processed and is ready for pickup.',
      completed: true
    },
    {
      status: 'Picked Up',
      date: 'May 15, 2023 - 02:15 PM',
      description: 'Your package has been collected by our driver.',
      completed: true
    },
    {
      status: 'In Transit',
      date: 'May 16, 2023 - 08:45 AM',
      description: 'Your shipment is on its way to the destination facility.',
      completed: true
    },
    {
      status: 'Out for Delivery',
      date: 'May 17, 2023 - 07:30 AM',
      description: 'Your package is with the delivery driver and will arrive today.',
      active: true
    },
    {
      status: 'Delivered',
      date: 'Estimated: May 17, 2023 - by 8:00 PM',
      description: 'Your package will be delivered to the recipient.',
      pending: true
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50/50 to-white min-h-screen">
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
            Track Your Shipment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Real-time updates on your package&apos;s journey
          </motion.p>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden"
        >
          <div className="p-8 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Enter Tracking Number</h2>
              <p className="text-gray-600">Track up to 10 shipments at once (separate by comma or space)</p>
            </div>
            
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="e.g. TVG123456789"
                  className="flex-grow px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-400/30 transition-all flex items-center justify-center gap-2"
                >
                  Track <FaSearch />
                </button>
              </div>
            </form>
            
            <p className="text-center text-gray-600">
              Don&apos;t know your tracking number?{' '}
              <a href="/contact" className="text-blue-500 hover:text-blue-600">
                Contact us
              </a>{' '}
              for assistance.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Tracking Results */}
      <AnimatePresence>
        {showResults && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
              {/* Results Header */}
              <div className="p-6 border-b border-white/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <h2 className="text-2xl font-bold text-gray-900">Shipment Status</h2>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-700">
                      Tracking Number: <span className="font-medium">{trackingNumber || 'TVG123456789'}</span>
                    </span>
                    <button className="px-4 py-2 bg-white/90 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-2">
                      <FaPrint /> Print
                    </button>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="p-6 md:p-8">
                <div className="relative mb-12">
                  {/* Progress Bar */}
                  <div className="h-1 bg-gray-200 rounded-full w-full mb-12">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      style={{ width: '75%' }} // 3 of 4 steps completed (75%)
                    ></div>
                  </div>

                  {/* Timeline Steps */}
                  <div className="space-y-10">
                    {timelineSteps.map((step, index) => (
                      <div key={index} className="relative flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                            step.completed 
                              ? 'bg-green-500 text-white'
                              : step.active
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-gray-500'
                          }`}>
                            {step.completed ? (
                              <FaCheckCircle size={18} />
                            ) : step.active ? (
                              <FaTruck size={16} />
                            ) : (
                              <FaCircle size={10} />
                            )}
                          </div>
                          {index < timelineSteps.length - 1 && (
                            <div className={`w-0.5 h-12 ${step.completed ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                          )}
                        </div>
                        <div className={`pt-1 pb-6 ${index < timelineSteps.length - 1 ? 'border-b border-gray-200' : ''}`}>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.status}</h3>
                          <p className="text-gray-600 text-sm mb-2">{step.date}</p>
                          <p className="text-gray-700">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shipment Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* Details Card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-sm hover:shadow-md transition-all"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Shipment Details</h3>
                    <div className="space-y-3">
                      {[
                        { label: 'Origin:', value: 'New York, NY' },
                        { label: 'Destination:', value: 'Los Angeles, CA' },
                        { label: 'Service:', value: 'Standard Ground' },
                        { label: 'Weight:', value: '12.5 kg' },
                        { label: 'Dimensions:', value: '30 × 20 × 15 cm' }
                      ].map((detail, i) => (
                        <div key={i} className="flex">
                          <span className="text-gray-600 w-32">{detail.label}</span>
                          <span className="text-gray-800 font-medium">{detail.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Map Card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white/90 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm hover:shadow-md transition-all overflow-hidden"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 p-6 pb-0">Current Location</h3>
                    <div className="relative h-64 bg-gray-100 mt-4">
                      {/* Replace with actual map component */}
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        Map Visualization
                      </div>
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm flex items-center gap-2">
                        <FaMapMarkerAlt className="text-red-500" />
                        <span className="text-gray-800 font-medium">Riverside, CA</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 justify-center">
                  <button className="px-6 py-2 bg-white/90 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-2">
                    <FaEnvelope /> Email Updates
                  </button>
                  <button className="px-6 py-2 bg-white/90 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-2">
                    <FaBell /> Get Notifications
                  </button>
                  <button className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-400/30 transition-all flex items-center gap-2">
                    <FaHeadset /> Need Help?
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Tracking FAQ</h2>
          <p className="text-gray-600">Common questions about shipment tracking</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-white/50 transition-all"
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {activeFaq === index ? (
                  <FaChevronUp className="text-gray-500" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </button>
              <AnimatePresence>
                {activeFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-700">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TrackShipmentPage;