import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, ShieldCheck, Award, HardHat, CheckCircle2, ChevronRight, 
  Building2, Home as HomeIcon, Factory, LandPlot, Play, Star, MapPin, Calendar, Clock
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { CounterStat } from '../components/common/CounterStat';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';
import { testimonialsData } from '../data/testimonialsData';
import { companyStats } from '../data/companyStats';

export const Home = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <>
      <SEOHead 
        title="Viva Construct Limited | Building Excellence. Delivering Confidence."
        description="Viva Constructs Limited is a multi disciplinary construction, engineering, and project management company committed to delivering innovative, high quality, and cost effective infrastructure solutions. We specialize in residential, commercial, industrial, telecommunications, and civil engineering projects, providing end-to-end services from planning and design through construction, commissioning, and maintenance.
"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#000000]">
        {/* Background Image with Cinematic Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 scale-105"
          style={{
            backgroundImage: `url("/frontpage.jpeg")`
          }}
        />
        <div className="absolute inset-0 hero-overlay" />

        {/* Ambient Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-white">
          <div className="max-w-3xl">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#B22222]/20 border border-[#B22222]/40 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-[#B22222] mb-6 backdrop-blur-md"
            >
              <HardHat className="w-4 h-4 text-[#B22222]" />
              <span>Tier-1 Construction & Civil Engineering Enterprise</span>
            </motion.div>

            {/* Animated Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black font-['Montserrat'] tracking-tight leading-[1.1] text-white"
            >
              Building Excellence.<br />
              <span className="text-[#B22222]">Delivering Confidence.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-300 text-base sm:text-xl mt-6 font-normal leading-relaxed max-w-2xl"
            >
              Viva Constructs Limited is a multi-disciplinary construction, engineering, and project management company committed to delivering innovative, high quality, and cost-effective infrastructure solutions across all 36 States of Nigeria and West Africa.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap sm:flex-row gap-3 mt-8"
            >
              <Link
                to="/projects"
                className="bg-[#B22222] hover:bg-[#8B0000] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#B22222]/30 inline-flex items-center justify-center gap-2 group"
              >
                Explore Projects 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all border border-white/20 backdrop-blur-md inline-flex items-center justify-center gap-2"
              >
                Request Proposal
              </Link>
            </motion.div>
          </div>

          {/* Floating Statistics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            {companyStats.slice(0, 4).map((stat, idx) => (
              <div 
                key={idx}
                className="glass-card-dark p-5 sm:p-6 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-[#B22222]/50 transition-all"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#B22222]/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#B22222] mb-1 font-['Montserrat']">
                  <CounterStat endValue={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-['Montserrat']">
                  {stat.label}
                </div>
                <p className="text-[11px] text-gray-400 mt-1 hidden sm:block">
                  {stat.description}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Section 2: Why Clients Choose Us */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image Grid */}
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/frontpage.jpeg" 
                  alt="Viva Constructs Project Site"
                  className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>

              {/* Floating Highlight Card */}
              <div className="absolute -bottom-8 -right-4 sm:bottom-6 sm:right-6 z-20 bg-[#000000] text-white p-6 rounded-2xl shadow-2xl border border-[#B22222]/40 max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-[#B22222] flex items-center justify-center text-white font-bold">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white font-['Montserrat']">Safety & HSE First</h4>
                    <p className="text-xs text-[#B22222]">100% Commitment to Safety</p>
                  </div>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Every project is executed with disciplined project management and zero-defect safety governance.
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <span className="text-[#B22222] font-bold text-xs uppercase tracking-widest block mb-2 font-['Montserrat']">
                What Makes Viva Constructs Different?
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#000000] font-['Montserrat'] tracking-tight leading-tight">
                At Viva Constructs Limited, We Don’t Simply Build Structures  We Build Confidence.
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed">
                Our strength lies in combining technical expertise with disciplined project management to deliver exceptional results across residential, commercial, industrial, telecommunications, and civil engineering projects.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Experienced multi disciplinary engineering team",
                  "End-to-end project management & SLA delivery",
                  "Transparent budgeting & procurement",
                  "Strict Health, Safety & Environmental (HSE) compliance",
                  "Telecommunications infrastructure specialists",
                  "36 States & West Africa execution capability",
                  "Strict quality assurance processes",
                  "Modern construction technologies",
                  "Client focused solutions tailored to each project",
                  "Long term value rather than short-term fixes"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#B22222]/20 flex items-center justify-center text-[#B22222] flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B22222]" />
                    </div>
                    <span className="text-xs font-semibold text-[#000000] leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-6">
                <Link
                  to="/about"
                  className="bg-[#000000] hover:bg-[#222222] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg flex items-center gap-2"
                >
                  Read Our Story & Inspiration <ChevronRight className="w-4 h-4 text-[#B22222]" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Core Services Grid Showcase */}
      <section className="py-20 bg-[#F8F9FA] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#B22222] font-bold text-xs uppercase tracking-widest block mb-2 font-['Montserrat']">
              Comprehensive Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#000000] font-['Montserrat'] tracking-tight">
              Mastery Across All Construction Disciplines
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3">
              Explore our core specialized construction services engineered for maximum durability, structural performance, and aesthetic splendor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 6).map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-80" />
                    <span className="absolute top-4 left-4 bg-[#B22222] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                      {service.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#000000] font-['Montserrat'] group-hover:text-[#B22222] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#B22222] font-semibold mt-1">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm mt-3 line-clamp-3 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#000000] group-hover:text-[#B22222] transition-colors"
                  >
                    View Service Scope <ArrowRight className="w-4 h-4 text-[#B22222]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-[#B22222] hover:bg-[#8B0000] text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg transition-all inline-flex items-center gap-2"
            > 
              Explore our Specialized Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Target Audience & Partnership Section */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#B22222] font-bold text-xs uppercase tracking-widest block mb-2 font-['Montserrat']">
              Target Partners & Clients
            </span>
            <h2 className="text-3xl font-black text-[#000000] font-['Montserrat']">
              Who We Partner With & Serve
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Viva Constructs Limited delivers trusted infrastructure solutions tailored for key institutional and private stakeholders.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Government Agencies",
              "Telecommunications Cos",
              "Real Estate Developers",
              "Corporate Enterprises",
              "Financial Institutions",
              "NGOs & International Donors",
              "Architects & Consultants",
              "Private Property Owners",
              "Foreign Investors",
              "Industrial Operators"
            ].map((aud, idx) => (
              <div key={idx} className="bg-[#F8F9FA] p-4 rounded-xl border border-gray-200 text-center hover:border-[#B22222] transition-colors">
                <span className="text-xs font-bold text-[#000000] font-['Montserrat']">{aud}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Featured Landmark Projects */}
      <section className="py-20 bg-[#000000] text-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#B22222]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="text-[#B22222] font-bold text-xs uppercase tracking-widest block mb-2 font-['Montserrat']">
                Portfolio Showcase
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-['Montserrat'] tracking-tight">
                Landmark Projects Built to Last
              </h2>
            </div>
            <Link
              to="/projects"
              className="mt-4 md:mt-0 text-[#B22222] hover:text-white font-bold text-sm flex items-center gap-2 transition-colors"
            >
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.slice(0, 3).map((project) => (
              <div 
                key={project.id}
                className="glass-card-dark rounded-2xl overflow-hidden border border-white/10 group hover:border-[#B22222]/50 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.mainImage} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-90" />
                  <span className="absolute top-4 left-4 bg-[#B22222] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4 text-xs text-gray-300 flex items-center justify-between">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#B22222]" /> {project.location}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#B22222]" /> {project.year}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white font-['Montserrat'] group-hover:text-[#B22222] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2 line-clamp-2">
                    {project.shortDescription}
                  </p>

                  <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center text-xs">
                    <div>
                      <span className="text-gray-400 block">Investment Scale</span>
                      <span className="text-[#B22222] font-bold">{project.budget}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block">Duration</span>
                      <span className="text-white font-bold">{project.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 5: Testimonials Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#B22222] font-bold text-xs uppercase tracking-widest block mb-2 font-['Montserrat']">
              Client Endorsements
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#000000] font-['Montserrat'] tracking-tight">
              Trusted by Developers & Institutional Clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.slice(0, 3).map((item) => (
              <div key={item.id} className="bg-[#F8F9FA] p-8 rounded-2xl border border-gray-200 shadow-md relative flex flex-col justify-between">
                <div>
                  <div className="flex text-[#B22222] mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#B22222]" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm italic leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#B22222]" />
                  <div>
                    <h4 className="font-bold text-sm text-[#000000] font-['Montserrat']">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.title}, {item.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: CTA Banner */}
      <section className="py-16 bg-[#000000] text-white relative overflow-hidden border-t border-[#444444]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black font-['Montserrat'] tracking-tight">
              Ready to Construct Your Landmark Vision?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-2 max-w-xl">
              Connect with our structural engineers and estimating directors to request a tender bid or feasibility audit.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="bg-[#B22222] hover:bg-[#8B0000] text-white font-bold text-base px-8 py-4 rounded-xl shadow-2xl transition-all transform hover:-translate-y-0.5"
            >
              Request Proposal
            </Link>
            <a
              href="tel:+2347089057979"
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-base px-6 py-4 rounded-xl transition-all border border-white/20"
            >
              +234-7089057979
            </a>
          </div>
        </div>
      </section>

    </>
  );
};
