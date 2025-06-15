'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBox, 
  FaBoxes, 
  FaCcVisa, 
  FaPaypal, 
  FaBuilding,
  FaCheckCircle,
  FaPrint,
  FaArrowRight,
  FaArrowLeft
} from 'react-icons/fa';

const BookShipmentPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [packageType, setPackageType] = useState<'single' | 'multiple'>('single');
  const [paymentMethod, setPaymentMethod] = useState<'credit' | 'paypal' | 'account'>('credit');
  const [sameAsPickup, setSameAsPickup] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    pickupAddress: '',
    pickupDate: '',
    pickupTime: '',
    pickupInstructions: '',
    deliveryAddress: '',
    deliveryDate: '',
    deliveryInstructions: '',
    serviceType: '',
    packageWeight: '',
    packageValue: '',
    packageLength: '',
    packageWidth: '',
    packageHeight: '',
    packageDescription: '',
    fragile: false,
    hazardous: false,
    perishable: false,
    totalWeight: '',
    packageCount: '',
    largestLength: '',
    largestWidth: '',
    largestHeight: '',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
    accountNumber: '',
    billingName: '',
    billingCompany: '',
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingZip: '',
    billingCountry: 'US',
    termsAgreement: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const steps = [
    { number: 1, title: 'Shipment Details' },
    { number: 2, title: 'Package Info' },
    { number: 3, title: 'Review & Pay' }
  ];

  const serviceOptions = [
    { value: 'standard', label: 'Standard Ground (3-5 days)' },
    { value: 'express', label: 'Express (2-3 days)' },
    { value: 'overnight', label: 'Overnight' },
    { value: 'international', label: 'International' },
    { value: 'freight', label: 'Freight' }
  ];

  const timeWindows = [
    { value: 'morning', label: 'Morning (8AM - 12PM)' },
    { value: 'afternoon', label: 'Afternoon (12PM - 4PM)' },
    { value: 'evening', label: 'Evening (4PM - 8PM)' }
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
            Book a Shipment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Fast, easy online booking for all your shipping needs
          </motion.p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Progress Steps */}
        <div className="flex justify-between mb-12 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10">
            <motion.div 
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
              initial={{ width: '0%' }}
              animate={{ width: `${(currentStep - 1) * 50}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          
          {steps.map(step => (
            <div key={step.number} className="flex flex-col items-center">
              <motion.div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold mb-2 ${
                  currentStep >= step.number
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white'
                    : 'bg-white/80 border-2 border-gray-300 text-gray-400'
                }`}
                whileHover={{ scale: currentStep >= step.number ? 1.05 : 1 }}
              >
                {step.number}
              </motion.div>
              <span className={`text-sm font-medium ${
                currentStep >= step.number ? 'text-gray-900' : 'text-gray-500'
              }`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Shipment Details */}
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 md:p-10"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipment Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="form-group">
                    <label htmlFor="pickupAddress" className="block text-gray-700 mb-2">Pickup Address*</label>
                    <input
                      type="text"
                      id="pickupAddress"
                      name="pickupAddress"
                      value={formData.pickupAddress}
                      onChange={handleChange}
                      placeholder="Street address"
                      className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="pickupDate" className="block text-gray-700 mb-2">Pickup Date*</label>
                    <input
                      type="date"
                      id="pickupDate"
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="form-group">
                    <label htmlFor="pickupTime" className="block text-gray-700 mb-2">Pickup Time Window*</label>
                    <select
                      id="pickupTime"
                      name="pickupTime"
                      value={formData.pickupTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select time window</option>
                      {timeWindows.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="pickupInstructions" className="block text-gray-700 mb-2">Special Instructions</label>
                    <textarea
                      id="pickupInstructions"
                      name="pickupInstructions"
                      value={formData.pickupInstructions}
                      onChange={handleChange}
                      placeholder="Building access codes, etc."
                      rows={2}
                      className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="form-group">
                    <label htmlFor="deliveryAddress" className="block text-gray-700 mb-2">Delivery Address*</label>
                    <input
                      type="text"
                      id="deliveryAddress"
                      name="deliveryAddress"
                      value={formData.deliveryAddress}
                      onChange={handleChange}
                      placeholder="Street address"
                      className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="deliveryDate" className="block text-gray-700 mb-2">Delivery Date (optional)</label>
                    <input
                      type="date"
                      id="deliveryDate"
                      name="deliveryDate"
                      value={formData.deliveryDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="form-group">
                    <label htmlFor="serviceType" className="block text-gray-700 mb-2">Service Type*</label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select service</option>
                      {serviceOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="deliveryInstructions" className="block text-gray-700 mb-2">Delivery Instructions</label>
                    <textarea
                      id="deliveryInstructions"
                      name="deliveryInstructions"
                      value={formData.deliveryInstructions}
                      onChange={handleChange}
                      placeholder="Leave at front door, etc."
                      rows={2}
                      className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <motion.button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-400/30 transition-all flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Continue <FaArrowRight />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Step 2: Package Info */}
          <AnimatePresence mode="wait">
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 md:p-10"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Package Information</h2>
                
                <div className="flex gap-4 mb-8">
                  <motion.div
                    className={`flex-1 p-4 rounded-lg border-2 cursor-pointer flex flex-col items-center ${
                      packageType === 'single' 
                        ? 'border-blue-500 bg-blue-50/50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setPackageType('single')}
                    whileHover={{ y: -5 }}
                  >
                    <FaBox className={`text-2xl mb-2 ${
                      packageType === 'single' ? 'text-blue-500' : 'text-gray-400'
                    }`} />
                    <span className={`font-medium ${
                      packageType === 'single' ? 'text-blue-600' : 'text-gray-600'
                    }`}>Single Package</span>
                  </motion.div>
                  
                  <motion.div
                    className={`flex-1 p-4 rounded-lg border-2 cursor-pointer flex flex-col items-center ${
                      packageType === 'multiple' 
                        ? 'border-blue-500 bg-blue-50/50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setPackageType('multiple')}
                    whileHover={{ y: -5 }}
                  >
                    <FaBoxes className={`text-2xl mb-2 ${
                      packageType === 'multiple' ? 'text-blue-500' : 'text-gray-400'
                    }`} />
                    <span className={`font-medium ${
                      packageType === 'multiple' ? 'text-blue-600' : 'text-gray-600'
                    }`}>Multiple Packages</span>
                  </motion.div>
                </div>

                {packageType === 'single' ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="form-group">
                        <label htmlFor="packageWeight" className="block text-gray-700 mb-2">Weight (kg)*</label>
                        <input
                          type="number"
                          id="packageWeight"
                          name="packageWeight"
                          value={formData.packageWeight}
                          onChange={handleChange}
                          step="0.1"
                          min="0.1"
                          className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="packageValue" className="block text-gray-700 mb-2">Declared Value ($)</label>
                        <input
                          type="number"
                          id="packageValue"
                          name="packageValue"
                          value={formData.packageValue}
                          onChange={handleChange}
                          min="0"
                          className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="form-group">
                        <label htmlFor="packageLength" className="block text-gray-700 mb-2">Length (cm)*</label>
                        <input
                          type="number"
                          id="packageLength"
                          name="packageLength"
                          value={formData.packageLength}
                          onChange={handleChange}
                          min="1"
                          className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="packageWidth" className="block text-gray-700 mb-2">Width (cm)*</label>
                        <input
                          type="number"
                          id="packageWidth"
                          name="packageWidth"
                          value={formData.packageWidth}
                          onChange={handleChange}
                          min="1"
                          className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="packageHeight" className="block text-gray-700 mb-2">Height (cm)*</label>
                        <input
                          type="number"
                          id="packageHeight"
                          name="packageHeight"
                          value={formData.packageHeight}
                          onChange={handleChange}
                          min="1"
                          className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group mb-6">
                      <label htmlFor="packageDescription" className="block text-gray-700 mb-2">Contents Description*</label>
                      <input
                        type="text"
                        id="packageDescription"
                        name="packageDescription"
                        value={formData.packageDescription}
                        onChange={handleChange}
                        placeholder="e.g. Documents, Clothing, Electronics"
                        className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div className="flex flex-wrap gap-6 mb-8">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          id="fragile"
                          name="fragile"
                          checked={formData.fragile}
                          onChange={handleChange}
                          className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">Fragile Items</span>
                      </label>
                      
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          id="hazardous"
                          name="hazardous"
                          checked={formData.hazardous}
                          onChange={handleChange}
                          className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">Hazardous Materials</span>
                      </label>
                      
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          id="perishable"
                          name="perishable"
                          checked={formData.perishable}
                          onChange={handleChange}
                          className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">Perishable Goods</span>
                      </label>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-blue-50/50 rounded-lg p-4 mb-6">
                      <p className="text-blue-800">
                        For multiple packages, please provide the total weight and dimensions of your largest package. 
                        Our team will contact you for additional details after booking.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="form-group">
                        <label htmlFor="totalWeight" className="block text-gray-700 mb-2">Total Weight (kg)*</label>
                        <input
                          type="number"
                          id="totalWeight"
                          name="totalWeight"
                          value={formData.totalWeight}
                          onChange={handleChange}
                          step="0.1"
                          min="0.1"
                          className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="packageCount" className="block text-gray-700 mb-2">Number of Packages*</label>
                        <input
                          type="number"
                          id="packageCount"
                          name="packageCount"
                          value={formData.packageCount}
                          onChange={handleChange}
                          min="2"
                          className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="form-group">
                        <label htmlFor="largestLength" className="block text-gray-700 mb-2">Largest Length (cm)*</label>
                        <input
                          type="number"
                          id="largestLength"
                          name="largestLength"
                          value={formData.largestLength}
                          onChange={handleChange}
                          min="1"
                          className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="largestWidth" className="block text-gray-700 mb-2">Largest Width (cm)*</label>
                        <input
                          type="number"
                          id="largestWidth"
                          name="largestWidth"
                          value={formData.largestWidth}
                          onChange={handleChange}
                          min="1"
                          className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="largestHeight" className="block text-gray-700 mb-2">Largest Height (cm)*</label>
                        <input
                          type="number"
                          id="largestHeight"
                          name="largestHeight"
                          value={formData.largestHeight}
                          onChange={handleChange}
                          min="1"
                          className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                <div className="flex justify-between">
                  <motion.button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaArrowLeft /> Back
                  </motion.button>
                  
                  <motion.button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-400/30 transition-all flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Continue <FaArrowRight />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Step 3: Review & Pay */}
          <AnimatePresence mode="wait">
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 md:p-10"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Review & Payment</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* Shipment Summary */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-sm hover:shadow-md transition-all"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Shipment Summary</h3>
                    <div className="space-y-3">
                      <div className="flex">
                        <span className="text-gray-600 w-32">Pickup:</span>
                        <span className="text-gray-800 font-medium">
                          {formData.pickupAddress || '123 Main St, New York, NY'}
                        </span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-600 w-32">Delivery:</span>
                        <span className="text-gray-800 font-medium">
                          {formData.deliveryAddress || '456 Oak Ave, Los Angeles, CA'}
                        </span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-600 w-32">Service:</span>
                        <span className="text-gray-800 font-medium">
                          {serviceOptions.find(s => s.value === formData.serviceType)?.label || 'Standard Ground'}
                        </span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-600 w-32">Pickup Date:</span>
                        <span className="text-gray-800 font-medium">
                          {formData.pickupDate || 'May 20, 2023'}
                        </span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-600 w-32">Est. Delivery:</span>
                        <span className="text-gray-800 font-medium">
                          {formData.deliveryDate || 'May 24, 2023'}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Package Details */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-sm hover:shadow-md transition-all"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Package Details</h3>
                    <div className="space-y-3">
                      <div className="flex">
                        <span className="text-gray-600 w-32">Package Type:</span>
                        <span className="text-gray-800 font-medium">
                          {packageType === 'single' ? 'Single Package' : 'Multiple Packages'}
                        </span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-600 w-32">Weight:</span>
                        <span className="text-gray-800 font-medium">
                          {packageType === 'single' 
                            ? `${formData.packageWeight || '5.5'} kg` 
                            : `${formData.totalWeight || '15.0'} kg (${formData.packageCount || '3'} packages)`}
                        </span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-600 w-32">Dimensions:</span>
                        <span className="text-gray-800 font-medium">
                          {packageType === 'single'
                            ? `${formData.packageLength || '30'} × ${formData.packageWidth || '20'} × ${formData.packageHeight || '15'} cm`
                            : `${formData.largestLength || '40'} × ${formData.largestWidth || '30'} × ${formData.largestHeight || '25'} cm (largest)`}
                        </span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-600 w-32">Contents:</span>
                        <span className="text-gray-800 font-medium">
                          {formData.packageDescription || 'Electronics'}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Payment Method */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Method</h3>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <motion.div
                      className={`flex-1 min-w-[150px] p-4 rounded-lg border-2 cursor-pointer flex flex-col items-center ${
                        paymentMethod === 'credit' 
                          ? 'border-blue-500 bg-blue-50/50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setPaymentMethod('credit')}
                      whileHover={{ y: -5 }}
                    >
                      <FaCcVisa className={`text-2xl mb-2 ${
                        paymentMethod === 'credit' ? 'text-blue-500' : 'text-gray-400'
                      }`} />
                      <span className={`font-medium ${
                        paymentMethod === 'credit' ? 'text-blue-600' : 'text-gray-600'
                      }`}>Credit/Debit Card</span>
                    </motion.div>
                    
                    <motion.div
                      className={`flex-1 min-w-[150px] p-4 rounded-lg border-2 cursor-pointer flex flex-col items-center ${
                        paymentMethod === 'paypal' 
                          ? 'border-blue-500 bg-blue-50/50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setPaymentMethod('paypal')}
                      whileHover={{ y: -5 }}
                    >
                      <FaPaypal className={`text-2xl mb-2 ${
                        paymentMethod === 'paypal' ? 'text-blue-500' : 'text-gray-400'
                      }`} />
                      <span className={`font-medium ${
                        paymentMethod === 'paypal' ? 'text-blue-600' : 'text-gray-600'
                      }`}>PayPal</span>
                    </motion.div>
                    
                    <motion.div
                      className={`flex-1 min-w-[150px] p-4 rounded-lg border-2 cursor-pointer flex flex-col items-center ${
                        paymentMethod === 'account' 
                          ? 'border-blue-500 bg-blue-50/50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setPaymentMethod('account')}
                      whileHover={{ y: -5 }}
                    >
                      <FaBuilding className={`text-2xl mb-2 ${
                        paymentMethod === 'account' ? 'text-blue-500' : 'text-gray-400'
                      }`} />
                      <span className={`font-medium ${
                        paymentMethod === 'account' ? 'text-blue-600' : 'text-gray-600'
                      }`}>Company Account</span>
                    </motion.div>
                  </div>

                  {paymentMethod === 'credit' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-sm"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="form-group">
                          <label htmlFor="cardNumber" className="block text-gray-700 mb-2">Card Number*</label>
                          <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder="1234 5678 9012 3456"
                            className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="form-group">
                          <label htmlFor="cardName" className="block text-gray-700 mb-2">Name on Card*</label>
                          <input
                            type="text"
                            id="cardName"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleChange}
                            placeholder="John Smith"
                            className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="cardExpiry" className="block text-gray-700 mb-2">Expiry Date*</label>
                          <input
                            type="text"
                            id="cardExpiry"
                            name="cardExpiry"
                            value={formData.cardExpiry}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="cardCvv" className="block text-gray-700 mb-2">CVV*</label>
                          <input
                            type="text"
                            id="cardCvv"
                            name="cardCvv"
                            value={formData.cardCvv}
                            onChange={handleChange}
                            placeholder="123"
                            className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {paymentMethod === 'paypal' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="bg-blue-50/50 rounded-lg p-6 text-center"
                    >
                      <p className="text-blue-800">
                        You will be redirected to PayPal to complete your payment after submitting this form.
                      </p>
                    </motion.div>
                  )}

                  {paymentMethod === 'account' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-sm"
                    >
                      <div className="form-group">
                        <label htmlFor="accountNumber" className="block text-gray-700 mb-2">Account Number*</label>
                        <input
                          type="text"
                          id="accountNumber"
                          name="accountNumber"
                          value={formData.accountNumber}
                          onChange={handleChange}
                          placeholder="TVG-123456"
                          className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Billing Information */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Billing Information</h3>
                  
                  <label className="flex items-center gap-2 cursor-pointer mb-4">
                    <input
                      type="checkbox"
                      id="sameAsPickup"
                      checked={sameAsPickup}
                      onChange={() => setSameAsPickup(!sameAsPickup)}
                      className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">Same as pickup address</span>
                  </label>

                  {!sameAsPickup && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-sm"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="form-group">
                          <label htmlFor="billingName" className="block text-gray-700 mb-2">Full Name*</label>
                          <input
                            type="text"
                            id="billingName"
                            name="billingName"
                            value={formData.billingName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="billingCompany" className="block text-gray-700 mb-2">Company</label>
                          <input
                            type="text"
                            id="billingCompany"
                            name="billingCompany"
                            value={formData.billingCompany}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                      <div className="form-group mb-6">
                        <label htmlFor="billingAddress" className="block text-gray-700 mb-2">Address*</label>
                        <input
                          type="text"
                          id="billingAddress"
                          name="billingAddress"
                          value={formData.billingAddress}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="form-group">
                          <label htmlFor="billingCity" className="block text-gray-700 mb-2">City*</label>
                          <input
                            type="text"
                            id="billingCity"
                            name="billingCity"
                            value={formData.billingCity}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="billingState" className="block text-gray-700 mb-2">State/Province*</label>
                          <input
                            type="text"
                            id="billingState"
                            name="billingState"
                            value={formData.billingState}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="billingZip" className="block text-gray-700 mb-2">Postal Code*</label>
                          <input
                            type="text"
                            id="billingZip"
                            name="billingZip"
                            value={formData.billingZip}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="billingCountry" className="block text-gray-700 mb-2">Country*</label>
                        <select
                          id="billingCountry"
                          name="billingCountry"
                          value={formData.billingCountry}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        >
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="UK">United Kingdom</option>
                          {/* More countries */}
                        </select>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Terms Agreement */}
                <div className="mb-8">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      id="termsAgreement"
                      name="termsAgreement"
                      checked={formData.termsAgreement}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      required
                    />
                    <span className="text-gray-700">
                      I agree to the <a href="#" className="text-blue-500 hover:text-blue-600">Terms of Service</a> and{' '}
                      <a href="#" className="text-blue-500 hover:text-blue-600">Privacy Policy</a>
                    </span>
                  </label>
                </div>

                <div className="flex justify-between">
                  <motion.button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaArrowLeft /> Back
                  </motion.button>
                  
                  <motion.button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-400/30 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Complete Booking
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </section>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 w-full max-w-md overflow-hidden"
            >
              <div className="p-6 border-b border-white/20">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Booking Confirmed!</h2>
                  <button 
                    onClick={() => setShowConfirmation(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    &times;
                  </button>
                </div>
              </div>
              
              <div className="p-6 text-center">
                <div className="text-green-500 mb-4">
                  <FaCheckCircle size={48} className="mx-auto" />
                </div>
                <p className="text-gray-700 mb-4">Your shipment has been successfully booked.</p>
                
                <div className="bg-blue-50/50 rounded-lg p-4 mb-6 text-left">
                  <p className="mb-2">
                    <strong>Tracking Number:</strong> <span>TVG789012345</span>
                  </p>
                  <p className="mb-2">
                    <strong>Estimated Pickup:</strong> <span>May 20, 2023 - Morning</span>
                  </p>
                  <p className="text-sm">
                    A confirmation email with all details has been sent to your registered email address.
                  </p>
                </div>
              </div>
              
              <div className="p-6 border-t border-white/20 flex flex-col sm:flex-row gap-3">
                <motion.button
                  onClick={() => window.print()}
                  className="flex-1 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPrint /> Print Confirmation
                </motion.button>
                <motion.button
                  onClick={() => window.location.href = '/track'}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-400/30 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Track Shipment
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BookShipmentPage;