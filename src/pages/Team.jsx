import React, { useState } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEOHead } from '../components/common/SEOHead';
import { Modal } from '../components/common/Modal';
import { teamData } from '../data/teamData';
import { Mail, Phone, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa6';

export const Team = () => {
  const [activeTeamModal, setActiveTeamModal] = useState(null);

  return (
    <>
      <SEOHead 
        title="Executive Leadership | Viva Construct"
        description="Meet Viva Construct's executive leadership team, chief architects, senior structural engineers, and safety directors."
      />

      <Breadcrumbs 
        currentPage="Leadership & Experts" 
        subtitle="Meet the visionaries, senior structural engineers, and safety leaders driving multi-million dollar construction achievements."
      />

      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member) => (
              <div 
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2342] via-transparent to-transparent opacity-80" />
                    <span className="absolute bottom-4 left-4 bg-[#F4A300] text-[#0A2342] text-[11px] font-bold px-3 py-1 rounded-full shadow">
                      {member.experience}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0A2342] font-['Montserrat'] group-hover:text-[#F4A300] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#F4A300] font-bold mt-1">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm mt-3 leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>

                    <div className="mt-4 space-y-1.5">
                      {member.credentials.slice(0, 2).map((cred, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                          <Award className="w-3.5 h-3.5 text-[#F4A300]" />
                          <span>{cred}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex justify-between items-center border-t border-gray-100 mt-4">
                  <button
                    onClick={() => setActiveTeamModal(member)}
                    className="text-xs font-bold text-[#0A2342] hover:text-[#F4A300] transition-colors flex items-center gap-1"
                  >
                    View Full Bio <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center space-x-2">
                    <a href={`mailto:${member.email}`} className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-[#F4A300] hover:text-[#0A2342] transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-[#F4A300] hover:text-[#0A2342] transition-colors">
                      <FaLinkedinIn className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Bio Modal */}
      {activeTeamModal && (
        <Modal
          isOpen={!!activeTeamModal}
          onClose={() => setActiveTeamModal(null)}
          title={activeTeamModal.name}
        >
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <img 
                src={activeTeamModal.image} 
                alt={activeTeamModal.name} 
                className="w-36 h-36 rounded-2xl object-cover shadow-lg border-2 border-[#F4A300]"
              />
              <div>
                <span className="bg-[#F4A300]/20 text-[#0A2342] text-xs font-bold px-3 py-1 rounded-full">
                  {activeTeamModal.experience}
                </span>
                <h3 className="text-2xl font-bold text-[#0A2342] font-['Montserrat'] mt-2">
                  {activeTeamModal.name}
                </h3>
                <p className="text-sm font-bold text-[#F4A300]">{activeTeamModal.role}</p>

                <div className="mt-3 space-y-1 text-xs text-gray-600">
                  <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[#F4A300]" /> {activeTeamModal.email}</p>
                  <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#F4A300]" /> {activeTeamModal.phone}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm text-[#0A2342] font-['Montserrat'] mb-2">Executive Biography</h4>
              <p className="text-gray-700 text-sm leading-relaxed">{activeTeamModal.bio}</p>
            </div>

            <div className="bg-[#F8F9FA] p-5 rounded-xl border border-gray-200">
              <h4 className="font-bold text-sm text-[#0A2342] font-['Montserrat'] mb-3">Academic & Industry Credentials</h4>
              <div className="space-y-2">
                {activeTeamModal.credentials.map((cred, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-gray-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#F4A300]" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t">
              <button
                onClick={() => setActiveTeamModal(null)}
                className="bg-[#0A2342] text-white text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-[#07162C]"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
