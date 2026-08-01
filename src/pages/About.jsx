import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEOHead } from '../components/common/SEOHead';
import { CounterStat } from '../components/common/CounterStat';
import { BrandShowcase } from '../components/common/BrandShowcase';
import { 
  ShieldCheck, Target, Eye, Award, CheckCircle2, Users, HardHat, TrendingUp, Sparkles, Compass, Lightbulb, HeartHandshake, FileCheck, Layers
} from 'lucide-react';
import { companyStats } from '../data/companyStats';

export const About = () => {
  const coreValues = [
    {
      title: "Integrity",
      description: "We uphold honesty, transparency, and accountability in every project.",
      icon: ShieldCheck
    },
    {
      title: "Excellence",
      description: "We consistently strive for the highest standards in workmanship and service delivery.",
      icon: Award
    },
    {
      title: "Innovation",
      description: "We embrace modern technologies and creative solutions to improve project outcomes.",
      icon: Sparkles
    },
    {
      title: "Safety",
      description: "Safety is integrated into every stage of our operations to protect our people, clients, and communities.",
      icon: HardHat
    },
    {
      title: "Professionalism",
      description: "We conduct our business with competence, respect, and ethical responsibility.",
      icon: FileCheck
    },
    {
      title: "Teamwork",
      description: "Collaboration drives our success and strengthens every project we undertake.",
      icon: Users
    },
    {
      title: "Customer Satisfaction",
      description: "Our clients remain at the heart of every decision we make.",
      icon: HeartHandshake
    },
    {
      title: "Sustainability",
      description: "We build responsibly while considering environmental and social impacts.",
      icon: Compass
    }
  ];

  const timeline = [
    { year: "2025", title: "Establishment & Corporate Vision", desc: "Viva Constructs Limited established in Lagos, Nigeria with a vision to bridge quality construction and dependable engineering delivery." },
    { year: "2025", title: "Multi-Sector Infrastructure Expansion", desc: "Successfully scaled operational capabilities across residential, commercial, industrial, telecommunications, and civil engineering projects." },
    { year: "2026", title: "Nationwide & West African Reach", desc: "Executing projects across all 36 Nigerian states and throughout West Africa with 50+ projects delivered safely and on schedule." }
  ];

  return (
    <>
      <SEOHead 
        title="About Viva Constructs Limited | Our Story, Mission & Vision"
        description="Learn about Viva Constructs Limited's founding story, inspiration, mission, vision to become Africa's leading construction firm, and 8 core values."
      />

      <Breadcrumbs 
        currentPage="About Viva Constructs Limited" 
        subtitle="Redefining standards in construction, engineering, and project management across Nigeria and West Africa."
      />

      {/* Story & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <span className="text-[#B22222] font-bold text-xs uppercase tracking-widest block mb-2 font-['Montserrat']">
                1. ABOUT THE COMPANY — Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#000000] font-['Montserrat'] tracking-tight leading-tight">
                Building Tomorrow, Today.
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed">
                Viva Constructs Limited was founded with a clear vision to redefine the standards of construction and engineering services through professionalism, innovation, accountability, and exceptional project delivery.
              </p>
              <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
                Recognizing the growing need for reliable construction partners capable of delivering projects without compromising on quality, safety, or timelines, the company was established to provide clients with dependable engineering solutions backed by technical expertise and integrity.
              </p>
              <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
                Since inception, Viva Constructs Limited has evolved into a trusted engineering and construction company, successfully delivering projects across multiple sectors including residential developments, commercial facilities, telecommunications infrastructure, civil engineering works, renovations, and interior fit-outs.
              </p>

              {/* Mission & Vision Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="p-5 bg-[#F8F9FA] rounded-2xl border border-gray-200 border-l-4 border-l-[#B22222]">
                  <div className="flex items-center gap-2 text-[#000000] font-bold font-['Montserrat'] mb-2">
                    <Target className="w-5 h-5 text-[#B22222]" />
                    <span>Mission Statement</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    To provide innovative, sustainable, and cost effective construction and engineering solutions through excellence in project execution, skilled professionals, integrity, and an unwavering commitment to client satisfaction.
                  </p>
                </div>

                <div className="p-5 bg-[#F8F9FA] rounded-2xl border border-gray-200 border-l-4 border-l-[#000000]">
                  <div className="flex items-center gap-2 text-[#000000] font-bold font-['Montserrat'] mb-2">
                    <Eye className="w-5 h-5 text-[#B22222]" />
                    <span>Vision Statement</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    To become one of Africa’s leading construction and engineering companies, recognized for delivering world-class infrastructure, transforming communities, and setting new standards of excellence.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80" 
                  alt="Viva Constructs Engineering Site" 
                  className="w-full h-[520px] object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-[#000000] text-white p-6 rounded-2xl shadow-xl border border-[#B22222]/40 hidden sm:block">
                <div className="text-4xl font-black text-[#B22222] font-['Montserrat']">36 States</div>
                <div className="text-xs font-bold uppercase tracking-wider mt-1 text-gray-300">Nigeria & West Africa Capability</div>
              </div>
            </div>

          </div>

          {/* Inspiration Section */}
          <div className="mt-20 bg-[#F8F9FA] p-8 sm:p-12 rounded-3xl border border-gray-200">
            <div className="max-w-4xl">
              <span className="text-[#B22222] font-bold text-xs uppercase tracking-widest block mb-2 font-['Montserrat'] flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-[#B22222]" /> Corporate Origins
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#000000] font-['Montserrat'] mb-4">
                What Inspired Viva Constructs?
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                The company was inspired by the need to bridge the gap between quality construction and dependable service delivery.
              </p>
              <p className="text-gray-700 text-sm sm:text-base mt-3 leading-relaxed">
                Too often, projects suffer from delays, poor workmanship, and inadequate project management. Viva Constructs Limited was created to challenge this narrative by providing construction services rooted in professionalism, transparency, and technical excellence.
              </p>
              <p className="text-gray-700 text-sm sm:text-base mt-3 font-semibold text-[#B22222]">
                Our goal has always been to create infrastructure that stands the test of time while delivering an outstanding experience for every client.
              </p>
            </div>
          </div>

          {/* Interactive Brand Standards Showcase */}
          <div className="mt-16">
            <BrandShowcase />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#B22222] font-bold text-xs uppercase tracking-widest block mb-2 font-['Montserrat']">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#000000] font-['Montserrat'] tracking-tight">
              Our 8 Corporate Core Values
            </h2>
            <p className="text-gray-600 text-sm mt-3">
              Principles that govern every project, site operation, and client partnership at Viva Constructs Limited.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, i) => {
              const IconComp = v.icon;
              return (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all group flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#000000] text-[#B22222] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-[#B22222]/20">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-base text-[#000000] font-['Montserrat'] mb-2">{v.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{v.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-[#000000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#B22222] font-bold text-xs uppercase tracking-widest block mb-2 font-['Montserrat']">
              Corporate Milestones
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-['Montserrat'] tracking-tight">
              Our Journey of Growth & Excellence
            </h2>
          </div>

          <div className="relative border-l-2 border-[#B22222]/40 ml-4 md:ml-32 space-y-12">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                {/* Bullet */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#B22222] border-4 border-[#000000] group-hover:scale-125 transition-transform" />
                
                <div className="md:absolute md:-left-32 md:top-0 text-xl font-black text-[#B22222] font-['Montserrat'] mb-1">
                  {item.year}
                </div>

                <div className="glass-card-dark p-6 rounded-2xl border border-white/10 max-w-2xl">
                  <h3 className="text-xl font-bold text-white font-['Montserrat']">{item.title}</h3>
                  <p className="text-gray-300 text-sm mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
