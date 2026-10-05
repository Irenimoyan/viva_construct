import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEOHead } from '../components/common/SEOHead';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertTriangle, Building2, Loader2 
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

export const Contact = () => {
  const [state, handleSubmit] = useForm("mgaowgvg");
  const [showForm, setShowForm] = useState(true);

  // Handle "Send Another Inquiry" reset
  const handleReset = () => {
    setShowForm(false);
    // Brief delay to let AnimatePresence unmount the success view, then remount the form
    setTimeout(() => setShowForm(true), 100);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 }
    })
  };

  const inputClasses = "w-full bg-gray-50 text-sm px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#B22222] focus:ring-2 focus:ring-[#B22222]/20 transition-all text-gray-800 placeholder:text-gray-400";
  const labelClasses = "block text-xs font-bold text-gray-700 mb-1.5 font-['Montserrat'] uppercase tracking-wide";
  const selectClasses = "w-full bg-gray-50 text-sm px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#B22222] focus:ring-2 focus:ring-[#B22222]/20 transition-all text-gray-800 appearance-none cursor-pointer";

  return (
    <>
      <SEOHead 
        title="Contact & Project Inquiry | Viva Construct"
        description="Connect with Viva Construct to request a project proposal, schedule an engineering consultation, or reach our emergency hotline."
      />

      <Breadcrumbs 
        currentPage="Contact Us" 
        subtitle="Request a formal project proposal, schedule an engineering feasibility audit, or reach our emergency hotline."
      />

      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Info Column */}
            <motion.div 
              className="lg:col-span-5 space-y-6"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div>
                <span className="text-[#B22222] font-bold text-xs uppercase tracking-widest block mb-2 font-['Montserrat']">
                  Direct Inquiries & Consultations
                </span>
                <h2 className="text-3xl font-black text-[#000000] font-['Montserrat'] tracking-tight">
                  Corporate Headquarters & Engineering Desks
                </h2>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  Our estimating and senior engineering directors are ready to review project blueprints, RFP documents, and tender specifications.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                <motion.div 
                  variants={fadeInUp} custom={1}
                  className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#000000] text-[#B22222] flex items-center justify-center flex-shrink-0 border border-[#B22222]/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#000000] font-['Montserrat']">Corporate Headquarters & Operations</h4>
                    <p className="text-xs text-gray-600 mt-1">39 Ugbejeaki street Mende Maryland, Lagos State, Nigeria.</p>
                    <p className="text-[11px] text-[#B22222] font-bold mt-0.5">Execution Capacity: All 36 States of Nigeria & West Africa</p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={fadeInUp} custom={2}
                  className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#000000] text-[#B22222] flex items-center justify-center flex-shrink-0 border border-[#B22222]/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#000000] font-['Montserrat']">Corporate Phone & Hotlines</h4>
                    <p className="text-xs text-gray-600 mt-1">Main Desk: <a href="tel:+2347089057979" className="hover:text-[#B22222] transition-colors">+234-7089057979</a></p>
                    <p className="text-xs text-[#B22222] font-bold mt-0.5">24/7 Site Emergency Hotline: +234-7089057979</p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={fadeInUp} custom={3}
                  className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#000000] text-[#B22222] flex items-center justify-center flex-shrink-0 border border-[#B22222]/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#000000] font-['Montserrat']">Official Email Desks</h4>
                    <p className="text-xs text-gray-600 mt-1">Tender & RFP Bids: <a href="mailto:Ganiyat@vivaconstructs.com" className="hover:text-[#B22222] transition-colors">Ganiyat@vivaconstructs.com</a></p>
                    <p className="text-xs text-gray-600">General Desk: <a href="mailto:Ganiyat@vivaconstructs.com" className="hover:text-[#B22222] transition-colors">Ganiyat@vivaconstructs.com</a></p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={fadeInUp} custom={4}
                  className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#000000] text-[#B22222] flex items-center justify-center flex-shrink-0 border border-[#B22222]/30">
                    <FaWhatsapp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#000000] font-['Montserrat']">WhatsApp</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      <a 
                        href="https://wa.me/2347089057979" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-[#B22222] transition-colors"
                      >
                        Chat with us on WhatsApp
                      </a>
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={fadeInUp} custom={5}
                  className="bg-[#000000] text-white p-5 rounded-2xl shadow-lg border border-[#B22222]/30 flex items-start gap-4"
                >
                  <Clock className="w-6 h-6 text-[#B22222] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-sm text-white font-['Montserrat']">Operating Hours</h4>
                    <p className="text-xs text-gray-300 mt-1">Monday – Friday: 08:00 AM – 5:00 PM</p>
                    <p className="text-xs text-gray-300">Saturday: 09:00 AM – 2:00 PM</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Form Column */}
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-200" id="inquiry-form">
                <h3 className="text-2xl font-bold text-[#000000] font-['Montserrat'] mb-2">
                  Request a Project Proposal
                </h3>
                <p className="text-xs text-gray-500 mb-6">
                  Fill out the details below and our engineering team will respond with a formal proposal within 24 hours.
                </p>

                <AnimatePresence mode="wait">
                  {/* Success State */}
                  {state.succeeded && showForm ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="text-center py-12 px-6"
                    >
                      <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                      </div>
                      <h4 className="text-2xl font-black text-[#000000] font-['Montserrat'] mb-3">
                        Thank You!
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto mb-2">
                        Your project inquiry has been successfully submitted to Viva Construct.
                      </p>
                      <p className="text-gray-500 text-xs leading-relaxed max-w-md mx-auto mb-8">
                        Our team will review your request and get back to you as soon as possible.
                      </p>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="bg-[#B22222] hover:bg-[#8B0000] text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg transition-all inline-flex items-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        Send Another Inquiry
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Global Error Message */}
                      {state.errors && state.errors.length > 0 && !state.succeeded && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-red-50 border border-red-300 text-red-800 p-4 rounded-xl mb-6 text-xs flex items-center gap-3"
                        >
                          <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                          <div>
                            <p className="font-bold">Submission Error</p>
                            <p>Something went wrong while submitting your inquiry. Please check your information and try again.</p>
                          </div>
                        </motion.div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                        {/* Hidden subject field for Formspree email */}
                        <input type="hidden" name="_subject" value="New Viva Construct Project Inquiry" />

                        {/* Personal Information Section */}
                        <div className="pb-1">
                          <p className="text-xs font-bold text-[#B22222] uppercase tracking-widest mb-4 font-['Montserrat'] flex items-center gap-2">
                            <Building2 className="w-4 h-4" />
                            Personal Information
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="contact-name" className={labelClasses}>Full Name <span className="text-[#B22222]">*</span></label>
                              <input
                                id="contact-name"
                                type="text"
                                name="name"
                                required
                                placeholder="e.g. Adeola Johnson"
                                className={inputClasses}
                                aria-required="true"
                              />
                              <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                            </div>

                            <div>
                              <label htmlFor="contact-email" className={labelClasses}>Email Address <span className="text-[#B22222]">*</span></label>
                              <input
                                id="contact-email"
                                type="email"
                                name="email"
                                required
                                placeholder="you@company.com"
                                className={inputClasses}
                                aria-required="true"
                              />
                              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                            </div>
                          </div>

                          <div className="mt-4">
                            <label htmlFor="contact-phone" className={labelClasses}>Phone Number <span className="text-[#B22222]">*</span></label>
                            <input
                              id="contact-phone"
                              type="tel"
                              name="phone"
                              required
                              placeholder="+234 708 905 7979"
                              className={inputClasses}
                              aria-required="true"
                            />
                            <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-xs mt-1" />
                          </div>
                        </div>

                        {/* Project Information Section */}
                        <div className="pb-1">
                          <p className="text-xs font-bold text-[#B22222] uppercase tracking-widest mb-4 font-['Montserrat'] flex items-center gap-2">
                            <Building2 className="w-4 h-4" />
                            Project Information
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="contact-projectType" className={labelClasses}>Project Type</label>
                              <div className="relative">
                                <select
                                  id="contact-projectType"
                                  name="projectType"
                                  className={selectClasses}
                                  defaultValue=""
                                >
                                  <option value="" disabled>Select project type</option>
                                  <option value="Residential Construction">Residential Construction</option>
                                  <option value="Commercial Construction">Commercial Construction</option>
                                  <option value="Industrial Construction">Industrial Construction</option>
                                  <option value="Renovation & Remodeling">Renovation & Remodeling</option>
                                  <option value="Civil Engineering">Civil Engineering</option>
                                  <option value="Interior Fit-Out">Interior Fit-Out</option>
                                  <option value="Architectural Design">Architectural Design</option>
                                  <option value="Project Management">Project Management</option>
                                  <option value="Other">Other</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </div>
                              </div>
                              <ValidationError prefix="Project Type" field="projectType" errors={state.errors} className="text-red-500 text-xs mt-1" />
                            </div>

                            <div>
                              <label htmlFor="contact-location" className={labelClasses}>Project Location</label>
                              <input
                                id="contact-location"
                                type="text"
                                name="location"
                                placeholder="e.g. Victoria Island, Lagos"
                                className={inputClasses}
                              />
                              <ValidationError prefix="Location" field="location" errors={state.errors} className="text-red-500 text-xs mt-1" />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            <div>
                              <label htmlFor="contact-budget" className={labelClasses}>Estimated Budget</label>
                              <div className="relative">
                                <select
                                  id="contact-budget"
                                  name="budget"
                                  className={selectClasses}
                                  defaultValue=""
                                >
                                  <option value="" disabled>Select budget range</option>
                                  <option value="Under ₦5 Million">Under ₦5 Million</option>
                                  <option value="₦5 Million – ₦20 Million">₦5 Million – ₦20 Million</option>
                                  <option value="₦20 Million – ₦50 Million">₦20 Million – ₦50 Million</option>
                                  <option value="₦50 Million – ₦100 Million">₦50 Million – ₦100 Million</option>
                                  <option value="Above ₦100 Million">Above ₦100 Million</option>
                                  <option value="Not Yet Decided">Not Yet Decided</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </div>
                              </div>
                              <ValidationError prefix="Budget" field="budget" errors={state.errors} className="text-red-500 text-xs mt-1" />
                            </div>

                            <div>
                              <label htmlFor="contact-timeline" className={labelClasses}>Project Timeline</label>
                              <div className="relative">
                                <select
                                  id="contact-timeline"
                                  name="timeline"
                                  className={selectClasses}
                                  defaultValue=""
                                >
                                  <option value="" disabled>Select timeline</option>
                                  <option value="Immediately">Immediately</option>
                                  <option value="Within 1 Month">Within 1 Month</option>
                                  <option value="1–3 Months">1–3 Months</option>
                                  <option value="3–6 Months">3–6 Months</option>
                                  <option value="6–12 Months">6–12 Months</option>
                                  <option value="More than 1 Year">More than 1 Year</option>
                                  <option value="Not Yet Decided">Not Yet Decided</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </div>
                              </div>
                              <ValidationError prefix="Timeline" field="timeline" errors={state.errors} className="text-red-500 text-xs mt-1" />
                            </div>
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label htmlFor="contact-message" className={labelClasses}>Project Details & Message <span className="text-[#B22222]">*</span></label>
                          <textarea
                            id="contact-message"
                            name="message"
                            rows={5}
                            required
                            placeholder="Tell us about your project, requirements, preferred location, or any questions you have."
                            className={`${inputClasses} resize-none`}
                            aria-required="true"
                          />
                          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={state.submitting}
                          className="w-full bg-[#B22222] hover:bg-[#8B0000] disabled:bg-[#B22222]/60 disabled:cursor-not-allowed text-white font-bold text-sm py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-3 group"
                        >
                          {state.submitting ? (
                            <>
                              {/* Spinner with Viva Logo */}
                              <div className="relative w-6 h-6 flex items-center justify-center">
                                <div className="absolute inset-0 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                <img 
                                  src="/Viva logo.png" 
                                  alt="" 
                                  className="w-4 h-4 rounded-full object-cover" 
                                  aria-hidden="true"
                                />
                              </div>
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <span>Send Inquiry</span>
                              <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </>
                          )}
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

          </div>

          {/* Interactive Map Embed Frame */}
          <motion.div 
            className="mt-16 bg-white rounded-3xl p-6 shadow-xl border border-gray-200 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-3">
              <div>
                <span className="text-[#B22222] font-bold text-xs uppercase tracking-widest block font-['Montserrat']">
                  Interactive Site Map
                </span>
                <h4 className="font-bold text-xl text-[#000000] font-['Montserrat'] flex items-center gap-2 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#B22222]" /> 39 Ugbejeaki Street, Mende, Maryland, Lagos State
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  Corporate Headquarters of Viva Constructs Limited (RC: 8867751)
                </p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=39+Ugbejeaki+street+Mende+Maryland+Lagos+State+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#B22222] hover:bg-[#8B0000] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 shadow-md flex-shrink-0"
              >
                Open in Google Maps App <MapPin className="w-4 h-4" />
              </a>
            </div>

            {/* Embedded Google Map Container */}
            <div className="w-full h-[450px] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 relative shadow-inner">
              <iframe
                title="Google Map - Viva Constructs Limited Headquarters, 39 Ugbejeaki Street, Mende Maryland Lagos"
                src="https://maps.google.com/maps?q=39%20Ugbejeaki%20street%2C%20Mende%2C%20Maryland%2C%20Lagos%20State%2C%20Nigeria&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};
