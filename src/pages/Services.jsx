import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEOHead } from '../components/common/SEOHead';
import { Modal } from '../components/common/Modal';
import { servicesData } from '../data/servicesData';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, HardHat, Search, Filter, 
  Home, Building2, Factory, LandPlot, Wrench, Paintbrush, Compass, Layers, ClipboardCheck 
} from 'lucide-react';

export const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeModalService, setActiveModalService] = useState(null);

  const categories = ['All', 'Building', 'Commercial', 'Industrial', 'Infrastructure', 'Specialized', 'Design', 'Management'];

  const filteredServices = servicesData.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEOHead 
        title="Construction Services | Viva Construct"
        description="Explore Viva Construct's 11 core services including residential luxury, commercial towers, industrial hubs, civil engineering, interior fit-outs, and structural engineering."
      />

      <Breadcrumbs 
        currentPage="Construction Services" 
        subtitle="End-to-end architectural engineering, heavy construction, and long-term asset management."
      />

      {/* Filter & Search Bar */}
      <section className="py-10 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#0A2342] text-[#F4A300] shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-50 text-xs pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F4A300] transition-colors"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Services Cards Grid */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredServices.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm border">
              <HardHat className="w-12 h-12 text-[#F4A300] mx-auto mb-3" />
              <h3 className="text-xl font-bold text-[#0A2342] font-['Montserrat']">No Services Found</h3>
              <p className="text-sm text-gray-500 mt-1">Try clearing your search query or switching categories.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div 
                  key={service.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2342] via-transparent to-transparent opacity-80" />
                      <span className="absolute top-4 left-4 bg-[#F4A300] text-[#0A2342] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                        {service.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#0A2342] font-['Montserrat'] group-hover:text-[#F4A300] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#F4A300] font-semibold mt-1">
                        {service.subtitle}
                      </p>
                      <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                        {service.shortDescription}
                      </p>

                      <div className="mt-4 space-y-2">
                        {service.features.slice(0, 3).map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#F4A300]" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 flex justify-between items-center">
                    <button
                      onClick={() => setActiveModalService(service)}
                      className="bg-[#0A2342] hover:bg-[#07162C] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5"
                    >
                      View Specs & Details <ArrowRight className="w-3.5 h-3.5 text-[#F4A300]" />
                    </button>
                    <Link
                      to="/contact"
                      className="text-xs font-bold text-[#F4A300] hover:underline"
                    >
                      Inquire Bid
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Service Detail Modal */}
      {activeModalService && (
        <Modal
          isOpen={!!activeModalService}
          onClose={() => setActiveModalService(null)}
          title={activeModalService.title}
        >
          <div className="space-y-6">
            <img 
              src={activeModalService.image} 
              alt={activeModalService.title} 
              className="w-full h-72 object-cover rounded-xl shadow-lg"
            />

            <div>
              <span className="text-[#F4A300] font-bold text-xs uppercase tracking-widest block font-['Montserrat']">
                {activeModalService.category} Discipline
              </span>
              <h3 className="text-2xl font-bold text-[#0A2342] font-['Montserrat'] mt-1">
                {activeModalService.subtitle}
              </h3>
              <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                {activeModalService.fullDescription}
              </p>
            </div>

            {/* Key Features List */}
            <div className="bg-[#F8F9FA] p-6 rounded-xl border border-gray-200">
              <h4 className="font-bold text-sm text-[#0A2342] font-['Montserrat'] mb-3">
                Key Technical Deliverables:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeModalService.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-[#F4A300]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Stats Bar */}
            <div className="grid grid-cols-3 gap-4 text-center bg-[#0A2342] text-white p-4 rounded-xl">
              <div>
                <span className="text-xs text-gray-400 block">Completed Projects</span>
                <span className="text-lg font-bold text-[#F4A300]">{activeModalService.stats.completed}</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block">Average Scale</span>
                <span className="text-lg font-bold text-white">{activeModalService.stats.avgScale}</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block">Warranty Period</span>
                <span className="text-lg font-bold text-[#F4A300]">{activeModalService.stats.warranty}</span>
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-4 border-t">
              <button
                onClick={() => setActiveModalService(null)}
                className="px-5 py-2.5 text-xs font-bold text-gray-600 hover:text-gray-800"
              >
                Close
              </button>
              <Link
                to="/contact"
                className="bg-[#F4A300] hover:bg-[#D98F00] text-[#0A2342] font-bold text-xs px-6 py-2.5 rounded-xl shadow transition-all"
              >
                Request Proposal for this Service
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
