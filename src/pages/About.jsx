import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEOHead } from '../components/common/SEOHead';
import { CounterStat } from '../components/common/CounterStat';
import { 
  ShieldCheck, Target, Eye, Award, CheckCircle2, Users, HardHat, TrendingUp, Sparkles 
} from 'lucide-react';
import { companyStats } from '../data/companyStats';

export const About = () => {
  const values = [
    {
      title: "Uncompromising Safety",
      description: "Zero lost-time accident protocol. Safety is our primary cultural imperative across every project site.",
      icon: ShieldCheck
    },
    {
      title: "Structural Excellence",
      description: "Engineering to tolerances far stricter than building codes demand, ensuring multi-generational asset longevity.",
      icon: Award
    },
    {
      title: "Sustainable Innovation",
      description: "Pioneering low-carbon concrete, mass timber solutions, and LEED Platinum building frameworks.",
      icon: Sparkles
    },
    {
      title: "Transparent Integrity",
      description: "5D BIM financial visibility, open-book cost accounting, and strict schedule adherence on every tender.",
      icon: CheckCircle2
    },
    {
      title: "Collaborative Mastery",
      description: "Partnering seamlessly with architects, public authorities, and private developers from inception to handover.",
      icon: Users
    }
  ];

  const timeline = [
    { year: "2014", title: "Foundation & First Civil Contracts", desc: "Viva Construct established in NY with 12 structural engineers." },
    { year: "2017", title: "Expansion into Skyscraper Engineering", desc: "Awarded first $45M commercial tower project in downtown Manhattan." },
    { year: "2020", title: "LEED & BIM 5D Integration", desc: "Transitioned all design-build tenders to 5D digital twin modeling." },
    { year: "2023", title: "National Infrastructure Division", desc: "Surpassed $1 Billion in managed civil transit and highway bridges." },
    { year: "2026", title: "Tier-1 Industry Leadership", desc: "Over 150+ completed landmark projects with 25+ national safety awards." }
  ];

  return (
    <>
      <SEOHead 
        title="About Viva Construct | Our Legacy, Mission & Leadership"
        description="Learn about Viva Construct's decade of engineering excellence, core values, leadership team, and growth timeline."
      />

      <Breadcrumbs 
        currentPage="About Viva Construct" 
        subtitle="A decade of engineering innovation, structural perfection, and sustainable master planning."
      />

      {/* Story & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <span className="text-[#F4A300] font-bold text-xs uppercase tracking-widest block mb-2 font-['Montserrat']">
                Our Corporate Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0A2342] font-['Montserrat'] tracking-tight">
                Built on Trust. Engineered for Tomorrow.
              </h2>
              <p className="text-gray-600 text-base mt-4 leading-relaxed">
                Founded in 2014 by Marcus Vance, Viva Construct began with a single mission: to redefine construction standards by fusing advanced computational structural engineering with timeless architectural aesthetics.
              </p>
              <p className="text-gray-600 text-base mt-4 leading-relaxed">
                Today, Viva Construct stands as an award-winning Tier-1 construction firm managing multi-million dollar portfolios across commercial skylines, luxury waterfront residential estates, industrial logistics parks, and critical public infrastructure networks.
              </p>

              {/* Mission & Vision Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="p-5 bg-[#F8F9FA] rounded-2xl border border-gray-200 border-l-4 border-l-[#F4A300]">
                  <div className="flex items-center gap-2 text-[#0A2342] font-bold font-['Montserrat'] mb-2">
                    <Target className="w-5 h-5 text-[#F4A300]" />
                    <span>Our Mission</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    To deliver landmark structural assets safely, sustainably, and on schedule through cutting-edge engineering precision.
                  </p>
                </div>

                <div className="p-5 bg-[#F8F9FA] rounded-2xl border border-gray-200 border-l-4 border-l-[#0A2342]">
                  <div className="flex items-center gap-2 text-[#0A2342] font-bold font-['Montserrat'] mb-2">
                    <Eye className="w-5 h-5 text-[#0A2342]" />
                    <span>Our Vision</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    To lead the global transition toward zero-carbon structural engineering and futuristic urban developments.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80" 
                alt="Engineers reviewing blueprints on site" 
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-white"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#0A2342] text-white p-6 rounded-2xl shadow-xl hidden sm:block">
                <div className="text-4xl font-black text-[#F4A300] font-['Montserrat']">10+</div>
                <div className="text-xs font-bold uppercase tracking-wider mt-1">Years of Legacy</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#F4A300] font-bold text-xs uppercase tracking-widest block mb-2 font-['Montserrat']">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A2342] font-['Montserrat'] tracking-tight">
              Our 5 Core Pillars of Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((v, i) => {
              const IconComp = v.icon;
              return (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#0A2342] text-[#F4A300] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-[#0A2342] font-['Montserrat'] mb-2">{v.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-[#0A2342] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#F4A300] font-bold text-xs uppercase tracking-widest block mb-2 font-['Montserrat']">
              Decade of Expansion
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-['Montserrat'] tracking-tight">
              Timeline of Growth & Landmarks
            </h2>
          </div>

          <div className="relative border-l-2 border-[#F4A300]/40 ml-4 md:ml-32 space-y-12">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                {/* Bullet */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#F4A300] border-4 border-[#0A2342] group-hover:scale-125 transition-transform" />
                
                <div className="md:absolute md:-left-32 md:top-0 text-xl font-black text-[#F4A300] font-['Montserrat'] mb-1">
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
