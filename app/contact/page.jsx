'use client'

import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaChevronDown, FaChevronUp, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    newsletter: false
  });

  const [activeFaq, setActiveFaq] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! Our team will respond within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      newsletter: false
    });
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I get a shipping quote?",
      answer: (
        <p className="mt-2 text-gray-600">
          You can get an instant quote by using our online booking tool on the <a href="/book" className="text-blue-600 hover:underline">Book a Shipment</a> page. 
          Simply enter your shipment details (origin, destination, dimensions, weight) and you&apos;ll receive a price estimate.
        </p>
      )
    },
    {
      question: "What documents do I need for international shipping?",
      answer: (
        <div className="mt-2 text-gray-600">
          <p>Required documents vary by country and shipment type but typically include:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Commercial invoice</li>
            <li>Packing list</li>
            <li>Certificate of Origin (if applicable)</li>
            <li>Export/Import licenses</li>
          </ul>
        </div>
      )
    },
    {
      question: "What are your customer service hours?",
      answer: (
        <p className="mt-2 text-gray-600">
          Our main customer service team is available Monday-Friday from 8:00 AM to 6:00 PM EST. 
          For urgent shipment issues outside these hours, our 24/7 support team can be reached at +1 (800) 555-9876.
        </p>
      )
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Page Banner */}
      <section className="bg-gradient-to-r from-blue-900/80 to-indigo-900/80 backdrop-blur-sm py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">We&apos;re here to help with all your logistics needs</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>
              <p className="text-gray-600 mb-8">Have questions about our services or need assistance with an existing shipment? Our team is ready to help.</p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-700">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Headquarters</h3>
                    <p className="text-gray-600">123 Logistics Plaza, Suite 400<br />New York, NY 10001<br />United States</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-700">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Phone</h3>
                    <p className="text-gray-600">+1 (800) 555-9876</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-700">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Email</h3>
                    <p className="text-gray-600">info@transvioglobal.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-700">
                    <FaClock className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Working Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM EST</p>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <a href="#" className="bg-blue-100 p-3 rounded-full text-blue-700 hover:bg-blue-200 transition">
                    <FaFacebookF className="text-xl" />
                  </a>
                  <a href="#" className="bg-blue-100 p-3 rounded-full text-blue-700 hover:bg-blue-200 transition">
                    <FaTwitter className="text-xl" />
                  </a>
                  <a href="#" className="bg-blue-100 p-3 rounded-full text-blue-700 hover:bg-blue-200 transition">
                    <FaLinkedinIn className="text-xl" />
                  </a>
                  <a href="#" className="bg-blue-100 p-3 rounded-full text-blue-700 hover:bg-blue-200 transition">
                    <FaInstagram className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject*</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="quote">Request a Quote</option>
                      <option value="tracking">Tracking Help</option>
                      <option value="booking">Booking Assistance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                  <textarea
                    id="message"
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                    Subscribe to our newsletter for updates and offers
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Single Location Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Location</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">New York Headquarters</h3>
                <div className="space-y-4 text-gray-600">
                  <p className="flex items-start gap-3">
                    <FaMapMarkerAlt className="mt-1 text-blue-600" />
                    <span>123 Logistics Plaza, Suite 400<br />New York, NY 10001</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <FaPhoneAlt className="text-blue-600" />
                    <span>+1 (800) 555-9876</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <FaEnvelope className="text-blue-600" />
                    <span>ny-office@transvioglobal.com</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <FaClock className="mt-1 text-blue-600" />
                    <span>Monday - Friday: 8:00 AM - 6:00 PM EST<br />Saturday: 9:00 AM - 2:00 PM EST</span>
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256024847!2d-73.98887592403496!3d40.74844097138979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1681234567890!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TransVioGlobal Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition"
                >
                  <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                  {activeFaq === index ? <FaChevronUp className="text-blue-600" /> : <FaChevronDown className="text-blue-600" />}
                </button>
                {activeFaq === index && (
                  <div className="p-6 pt-0 bg-gray-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;