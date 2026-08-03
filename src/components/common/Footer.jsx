import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HardHat, Phone, Mail, MapPin, Send, ShieldCheck, Award, 
  ArrowRight, CheckCircle2 
} from 'lucide-react';
import { FaLinkedinIn, FaXTwitter, FaInstagram, FaYoutube, FaFacebookF, FaTiktok } from 'react-icons/fa6';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#000000] text-gray-300 pt-16 pb-8 border-t border-[#444444]/40 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B22222]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#444444]/40">
          
          {/* Col 1: Corporate Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/Viva logo.png" 
                alt="Viva Constructs Logo" 
                className="w-12 h-12 object-cover rounded-full border border-white/20 shadow-lg group-hover:scale-105 transition-transform bg-black/40" 
              />
              <div>
                <span className="text-2xl font-black tracking-wider text-white font-['Montserrat'] block leading-none">
                  VIVA<span className="text-[#B22222]">.</span>
                </span>
                <span className="text-[10px] tracking-[0.25em] text-gray-400 font-semibold uppercase block mt-0.5">
                  CONSTRUCTS LIMITED
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              <strong className="text-white">Building Excellence. Delivering Confidence.</strong> Viva Constructs Limited is a multi-disciplinary construction, engineering, and project management company delivering high-quality residential, commercial, industrial, telecommunications, and civil infrastructure solutions across Nigeria and West Africa.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-2 bg-[#222222] px-3 py-1.5 rounded-lg border border-[#444444] text-xs">
                <ShieldCheck className="w-4 h-4 text-[#B22222]" />
                <span className="font-semibold text-white">RC: 8867751 Verified</span>
              </div>
              <div className="flex items-center gap-2 bg-[#222222] px-3 py-1.5 rounded-lg border border-[#444444] text-xs">
                <Award className="w-4 h-4 text-[#B22222]" />
                <span>36 States & West Africa</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white text-base font-bold font-['Montserrat'] mb-4 tracking-wide border-l-2 border-[#B22222] pl-3">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'About', 'Services', 'Projects', 'Team', 'Testimonials', 'Process', 'Certifications', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="hover:text-[#B22222] transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#B22222] transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Services */}
          <div>
            <h4 className="text-white text-base font-bold font-['Montserrat'] mb-4 tracking-wide border-l-2 border-[#B22222] pl-3">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                'Residential Construction',
                'Commercial Towers',
                'Industrial Facilities',
                'Civil Engineering',
                'Road Infrastructure',
                'Seismic Retrofit',
                'Interior Fit-Out',
                'Structural Engineering'
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="hover:text-[#B22222] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B22222]/60 group-hover:bg-[#B22222]" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter & Contact */}
          <div>
            <h4 className="text-white text-base font-bold font-['Montserrat'] mb-4 tracking-wide border-l-2 border-[#B22222] pl-3">
              Stay Informed
            </h4>
            <p className="text-xs text-gray-400 mb-3 leading-relaxed">
              Subscribe to Viva Insights for quarterly civil engineering innovations and project reports.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your corporate email"
                  required
                  className="w-full bg-[#222222] text-white text-xs px-3.5 py-2.5 rounded-lg border border-[#444444] focus:outline-none focus:border-[#B22222] transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 bg-[#B22222] text-white px-3 rounded-md hover:bg-[#8B0000] transition-colors flex items-center justify-center font-bold text-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {subscribed && (
                <p className="text-emerald-400 text-xs flex items-center gap-1 mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Subscribed successfully!
                </p>
              )}
            </form>

            <div className="mt-6 space-y-2 text-xs">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#B22222]" /> +234-7089057979
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B22222]" /> Ganiyat@vivaconstructs.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B22222]" /> 39 Ugbejeaki street Mende Maryland, Lagos State.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Viva Constructs Limited. All Rights Reserved. Building Excellence. Delivering Confidence.</p>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-[#B22222] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#B22222] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#B22222] transition-colors">Site Map</a>
            <a href="#" className="hover:text-[#B22222] transition-colors">OSHA Safety</a>
          </div>

          <div className="flex items-center space-x-2.5">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook" className="w-8 h-8 rounded-lg bg-[#222222] flex items-center justify-center hover:bg-[#B22222] hover:text-white transition-colors">
              <FaFacebookF className="w-3.5 h-3.5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram" className="w-8 h-8 rounded-lg bg-[#222222] flex items-center justify-center hover:bg-[#B22222] hover:text-white transition-colors">
              <FaInstagram className="w-3.5 h-3.5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn" className="w-8 h-8 rounded-lg bg-[#222222] flex items-center justify-center hover:bg-[#B22222] hover:text-white transition-colors">
              <FaLinkedinIn className="w-3.5 h-3.5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" title="X (Twitter)" className="w-8 h-8 rounded-lg bg-[#222222] flex items-center justify-center hover:bg-[#B22222] hover:text-white transition-colors">
              <FaXTwitter className="w-3.5 h-3.5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" title="YouTube" className="w-8 h-8 rounded-lg bg-[#222222] flex items-center justify-center hover:bg-[#B22222] hover:text-white transition-colors">
              <FaYoutube className="w-3.5 h-3.5" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" title="TikTok" className="w-8 h-8 rounded-lg bg-[#222222] flex items-center justify-center hover:bg-[#B22222] hover:text-white transition-colors">
              <FaTiktok className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
