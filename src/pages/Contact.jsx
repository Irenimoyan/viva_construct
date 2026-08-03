import React, { useState } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEOHead } from '../components/common/SEOHead';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, ShieldAlert, Building2 
} from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Commercial Construction',
    budget: '$10M - $50M',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'Commercial Construction',
        budget: '$10M - $50M',
        message: ''
      });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <SEOHead 
        title="Contact & Tender Bids | Viva Construct"
        description="Connect with Viva Construct to request a tender bid, structural consultation, or 24/7 site maintenance service."
      />

      <Breadcrumbs 
        currentPage="Contact Corporate Desk" 
        subtitle="Request a formal tender bid, schedule an engineering feasibility audit, or reach our emergency hotline."
      />

      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-[#B22222] font-bold text-xs uppercase tracking-widest block mb-2 font-['Montserrat']">
                  Direct Inquiries & Tenders
                </span>
                <h2 className="text-3xl font-black text-[#000000] font-['Montserrat'] tracking-tight">
                  Corporate Headquarters & Engineering Desks
                </h2>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  Our estimating and senior engineering directors are ready to review project blueprints, RFP documents, and tender specifications.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#000000] text-[#B22222] flex items-center justify-center flex-shrink-0 border border-[#B22222]/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#000000] font-['Montserrat']">Corporate Headquarters & Operations</h4>
                    <p className="text-xs text-gray-600 mt-1">39 Ugbejeaki street Mende Maryland, Lagos State, Nigeria.</p>
                    <p className="text-[11px] text-[#B22222] font-bold mt-0.5">Execution Capacity: All 36 States of Nigeria & West Africa</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#000000] text-[#B22222] flex items-center justify-center flex-shrink-0 border border-[#B22222]/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#000000] font-['Montserrat']">Corporate Phone & Hotlines</h4>
                    <p className="text-xs text-gray-600 mt-1">Main Desk: +234-7089057979</p>
                    <p className="text-xs text-[#B22222] font-bold mt-0.5">24/7 Site Emergency Hotline: +234-7089057979</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#000000] text-[#B22222] flex items-center justify-center flex-shrink-0 border border-[#B22222]/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#000000] font-['Montserrat']">Official Email Desks</h4>
                    <p className="text-xs text-gray-600 mt-1">Tender & RFP Bids: Ganiyat@vivaconstructs.com</p>
                    <p className="text-xs text-gray-600">General Desk: Ganiyat@vivaconstructs.com</p>
                  </div>
                </div>

                <div className="bg-[#000000] text-white p-5 rounded-2xl shadow-lg border border-[#B22222]/30 flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#B22222] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-sm text-white font-['Montserrat']">Operating Hours</h4>
                    <p className="text-xs text-gray-300 mt-1">Monday - Friday: 08:00 AM - 17:00 PM</p>
                    <p className="text-xs text-gray-300">Saturday: 09:00 AM - 14:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-[#000000] font-['Montserrat'] mb-2">
                Request a Project Proposal or Tender Bid
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Fill out the specifications below and our engineering team will respond with a formal proposal within 24 hours.
              </p>

              {submitted && (
                <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-4 rounded-xl mb-6 text-xs flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold">Proposal Request Submitted Successfully!</p>
                    <p>Our senior estimating director will contact you via email shortly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Johnathan Vance"
                      className="w-full bg-gray-50 text-xs px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#B22222]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Corporate Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="j.vance@company.com"
                      className="w-full bg-gray-50 text-xs px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#B22222]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 708 905 7979"
                      className="w-full bg-gray-50 text-xs px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#B22222]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Company / Entity</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Vanguard Holdings"
                      className="w-full bg-gray-50 text-xs px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#B22222]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Primary Service Needed</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-gray-50 text-xs px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#B22222]"
                    >
                      <option value="Commercial Construction">Commercial Construction</option>
                      <option value="Residential Luxury">Residential Luxury</option>
                      <option value="Industrial Logistics">Industrial Logistics</option>
                      <option value="Civil Infrastructure">Civil Infrastructure</option>
                      <option value="Roads & Bridges">Roads & Bridges</option>
                      <option value="Seismic Retrofit">Seismic Retrofit</option>
                      <option value="Interior Fit-Out">Interior Fit-Out</option>
                      <option value="Structural Engineering">Structural Engineering</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Estimated Budget Scale</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-gray-50 text-xs px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#B22222]"
                    >
                      <option value="Under $5M">Under $5M</option>
                      <option value="$5M - $20M">$5M - $20M</option>
                      <option value="$20M - $100M">$20M - $100M</option>
                      <option value="$100M+">$100M+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Project Overview & Timeline Specs *</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Provide details about site location, estimated square footage, target groundbreaking date, or BIM requirements..."
                    className="w-full bg-gray-50 text-xs px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#B22222]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#B22222] hover:bg-[#8B0000] text-white font-bold text-sm py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Submit Proposal Request <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>

          {/* Interactive Map Embed Frame */}
          <div className="mt-16 bg-white rounded-3xl p-6 shadow-xl border border-gray-200 overflow-hidden">
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
          </div>

        </div>
      </section>
    </>
  );
};
