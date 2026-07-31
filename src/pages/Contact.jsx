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
                <span className="text-[#F4A300] font-bold text-xs uppercase tracking-widest block mb-2 font-['Montserrat']">
                  Direct Inquiries
                </span>
                <h2 className="text-3xl font-black text-[#0A2342] font-['Montserrat'] tracking-tight">
                  Global Headquarters & Regional Desks
                </h2>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  Our estimating and senior engineering directors are ready to review project blueprints and tender specifications.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0A2342] text-[#F4A300] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0A2342] font-['Montserrat']">Global Headquarters</h4>
                    <p className="text-xs text-gray-600 mt-1">750 Fifth Avenue, Suite 2400, New York, NY 10019</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0A2342] text-[#F4A300] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0A2342] font-['Montserrat']">Corporate Phone & Hotline</h4>
                    <p className="text-xs text-gray-600 mt-1">Main Desk: +1 (800) 555-0199</p>
                    <p className="text-xs text-[#F4A300] font-bold mt-0.5">24/7 Site Emergency Hotline: +1 (800) 555-0191</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0A2342] text-[#F4A300] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0A2342] font-['Montserrat']">Official Email Addresses</h4>
                    <p className="text-xs text-gray-600 mt-1">Tender Bids: bids@vivaconstruct.com</p>
                    <p className="text-xs text-gray-600">General Desk: contact@vivaconstruct.com</p>
                  </div>
                </div>

                <div className="bg-[#0A2342] text-white p-5 rounded-2xl shadow-lg border border-[#F4A300]/30 flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#F4A300] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-sm text-white font-['Montserrat']">Operating Hours</h4>
                    <p className="text-xs text-gray-300 mt-1">Monday - Friday: 07:00 AM - 19:00 PM EST</p>
                    <p className="text-xs text-gray-300">Saturday: 08:00 AM - 14:00 PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-[#0A2342] font-['Montserrat'] mb-2">
                Request a Project Proposal or Tender Bid
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Fill out the specifications below and our engineering team will respond with a tender document within 24 hours.
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
                      className="w-full bg-gray-50 text-xs px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F4A300]"
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
                      className="w-full bg-gray-50 text-xs px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F4A300]"
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
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-gray-50 text-xs px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F4A300]"
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
                      className="w-full bg-gray-50 text-xs px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F4A300]"
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
                      className="w-full bg-gray-50 text-xs px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F4A300]"
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
                      className="w-full bg-gray-50 text-xs px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F4A300]"
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
                    className="w-full bg-gray-50 text-xs px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F4A300]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#F4A300] hover:bg-[#D98F00] text-[#0A2342] font-bold text-sm py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Submit Proposal Request <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>

          {/* Interactive Google Map Embed Frame */}
          <div className="mt-16 bg-white rounded-3xl p-4 shadow-lg border border-gray-200 overflow-hidden">
            <h4 className="font-bold text-sm text-[#0A2342] font-['Montserrat'] mb-3 pl-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#F4A300]" /> Headquarters Location
            </h4>
            <div className="w-full h-80 rounded-2xl overflow-hidden bg-gray-200 relative">
              <iframe
                title="Viva Construct New York Headquarters Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.989782806275!2d-73.97607362342624!3d40.76110373453883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f97bf1db8d%3A0x6b63793740e53a3e!2s750%205th%20Ave%2C%20New%20York%2C%20NY%2010019!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
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
