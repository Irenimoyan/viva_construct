import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEOHead } from '../components/common/SEOHead';
import { certificationsData } from '../data/certificationsData';
import { ShieldCheck, Award, CheckCircle2, FileCheck, Lock } from 'lucide-react';

export const Certifications = () => {
  return (
    <>
      <SEOHead 
        title="Certifications & Safety Compliance | Viva Construct"
        description="Verify Viva Construct's official ISO 9001, ISO 14001, ISO 45001, LEED Platinum, and OSHA safety certifications."
      />

      <Breadcrumbs 
        currentPage="Certifications & Compliance" 
        subtitle="Rigorously audited safety, environmental management, and structural quality accreditations."
      />

      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationsData.map((cert) => (
              <div 
                key={cert.id}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all relative overflow-hidden group flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#F4A300]/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0A2342] text-[#F4A300] flex items-center justify-center mb-6 shadow-md">
                    <ShieldCheck className="w-8 h-8" />
                  </div>

                  <span className="bg-[#F4A300] text-[#0A2342] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                    {cert.badge}
                  </span>

                  <h3 className="text-xl font-bold text-[#0A2342] font-['Montserrat'] mt-3">
                    {cert.title}
                  </h3>
                  
                  <p className="text-xs text-gray-500 font-medium mt-1">
                    Issuer: {cert.issuer}
                  </p>

                  <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500">
                  <span className="flex items-center gap-1 font-mono text-[11px] text-[#0A2342] font-bold">
                    <Lock className="w-3 h-3 text-[#F4A300]" /> {cert.code}
                  </span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Active Audit
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};
