import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEOHead } from '../components/common/SEOHead';
import { processSteps } from '../data/processData';
import { CheckCircle2, ArrowRight, HardHat } from 'lucide-react';

export const Process = () => {
  return (
    <>
      <SEOHead 
        title="Our 6-Step Construction Process | Viva Construct"
        description="Learn about Viva Construct's rigorous 6-step construction lifecycle from initial consultation to 5D BIM planning, site execution, quality auditing, and asset handover."
      />

      <Breadcrumbs 
        currentPage="Our Process" 
        subtitle="A proven 6-stage engineering lifecycle designed for schedule accuracy, zero-defect quality, and cost governance."
      />

      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {processSteps.map((step, idx) => (
              <div 
                key={step.step}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:shadow-2xl transition-shadow"
              >
                {/* Step Number & Title */}
                <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-gray-200 pb-6 lg:pb-0 lg:pr-8">
                  <span className="text-5xl font-black text-[#F4A300] font-['Montserrat'] block">
                    {step.step}
                  </span>
                  <h3 className="text-2xl font-bold text-[#0A2342] font-['Montserrat'] mt-2">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-1">
                    Stage {idx + 1} of 6
                  </p>
                </div>

                {/* Description & Deliverables */}
                <div className="lg:col-span-8 space-y-4">
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>

                  <div className="bg-[#F8F9FA] p-5 rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-xs text-[#0A2342] font-['Montserrat'] uppercase tracking-wider mb-3">
                      Stage Deliverables & Verification:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {step.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                          <CheckCircle2 className="w-4 h-4 text-[#F4A300] flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
