import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Menu, X, ChevronRight, HardHat, ShieldCheck, Clock 
} from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Team', path: '/team' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Process', path: '/process' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-[#07162C] text-gray-300 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 hover:text-[#F4A300] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#F4A300]" />
              +1 (800) 555-0199
            </span>
            <span className="flex items-center gap-1.5 hover:text-[#F4A300] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#F4A300]" />
              contact@vivaconstruct.com
            </span>
            <span className="flex items-center gap-1.5 hover:text-[#F4A300] transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#F4A300]" />
              750 5th Ave, New York, NY
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1.5 bg-[#F4A300]/20 text-[#F4A300] px-2.5 py-0.5 rounded-full font-medium text-[11px]">
              <ShieldCheck className="w-3 h-3" /> ISO 9001 / 45001 Certified
            </span>
            <span className="text-gray-400 flex items-center gap-1">
              <Clock className="w-3 h-3 text-emerald-400" /> Mon-Fri: 07:00 - 19:00
            </span>
          </div>
        </div>
      </div>

      {/* Main Glassmorphism Header */}
      <nav className={`transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3 shadow-2xl' : 'bg-[#0A2342]/90 backdrop-blur-md py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F4A300] to-[#D98F00] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <HardHat className="w-6 h-6 text-[#0A2342]" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-wider text-white font-['Montserrat'] block leading-none">
                VIVA<span className="text-[#F4A300]">.</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] text-gray-300 font-semibold uppercase block mt-0.5">
                CONSTRUCT
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all relative ${
                    isActive 
                      ? 'text-[#F4A300] font-semibold' 
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#F4A300] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              to="/contact"
              className="bg-[#F4A300] hover:bg-[#D98F00] text-[#0A2342] font-bold text-sm px-5 py-2.5 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#F4A300]/25 flex items-center gap-2"
            >
              Get a Quote <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-lg text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7 text-[#F4A300]" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-[#07162C] border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive 
                        ? 'bg-[#F4A300] text-[#0A2342] font-bold' 
                        : 'text-gray-200 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="w-full text-center bg-[#F4A300] text-[#0A2342] font-bold px-5 py-3 rounded-lg shadow-lg"
                >
                  Request Proposal
                </Link>
                <div className="text-center text-xs text-gray-400 pt-2">
                  Emergency Desk: <span className="text-[#F4A300] font-semibold">+1 (800) 555-0199</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
