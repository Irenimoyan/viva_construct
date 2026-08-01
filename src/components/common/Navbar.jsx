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
      <div className="bg-[#000000] text-gray-300 text-xs py-2 px-4 border-b border-[#444444]/40 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 hover:text-[#B22222] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#B22222]" />
              +234-7089057979
            </span>
            <span className="flex items-center gap-1.5 hover:text-[#B22222] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#B22222]" />
              Ganiyat@vivaconstructs.com
            </span>
            <span className="flex items-center gap-1.5 hover:text-[#B22222] transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#B22222]" />
              39 Ugbejeaki street Mende Maryland, Lagos State.
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1.5 bg-[#B22222]/20 text-[#B22222] px-2.5 py-0.5 rounded-full font-medium text-[11px] border border-[#B22222]/30">
              <ShieldCheck className="w-3 h-3 text-[#B22222]" /> RC: 8867751 Certified
            </span>
            <span className="text-gray-400 flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#B22222]" /> Mon-Fri: 8AM - 5PM <br /> Saturday: 9AM - 2PM:
            </span>
          </div>
        </div>
      </div>

      {/* Main Glassmorphism Header */}
      <nav className={`transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3 shadow-2xl' : 'bg-[#000000]/95 backdrop-blur-md py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/Viva logo.png" 
              alt="Viva Construct Logo"  
              className="w-12 h-12 object-contain rounded-xl border border-white/20 shadow-lg group-hover:scale-105 transition-transform"
            />
            <div>
              <span className="text-2xl font-black tracking-wider text-[#B22222] font-['Montserrat'] block leading-none">
                VIVA<span className="text-white">.</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] text-gray-400 font-semibold uppercase block mt-0.5">
                CONSTRUCTS LIMITED
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
                      ? 'text-[#B22222] font-semibold' 
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#B22222] rounded-full"
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
              className="bg-[#B22222] hover:bg-[#8B0000] text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#B22222]/30 flex items-center gap-2"
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
            {mobileMenuOpen ? <X className="w-7 h-7 text-[#B22222]" /> : <Menu className="w-7 h-7" />}
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
            className="xl:hidden bg-[#000000] border-b border-[#444444] overflow-hidden shadow-2xl"
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
                        ? 'bg-[#B22222] text-white font-bold' 
                        : 'text-gray-200 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-[#444444] flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="w-full text-center bg-[#B22222] text-white font-bold px-5 py-3 rounded-lg shadow-lg"
                >
                  Request Proposal
                </Link>
                <div className="text-center text-xs text-gray-400 pt-2">
                  Emergency Desk: <span className="text-[#B22222] font-semibold">+1 (800) 555-0199</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
