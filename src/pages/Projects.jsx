import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEOHead } from '../components/common/SEOHead';
import { Modal } from '../components/common/Modal';
import { projectsData } from '../data/projectsData';
import { 
  MapPin, Calendar, DollarSign, Clock, Layers, ArrowRight, Search, Filter, 
  CheckCircle2, HardHat, ExternalLink, Video 
} from 'lucide-react';

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Telecommunications', 'Commercial', 'Residential', 'Civil Engineering'];

  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.client.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEOHead 
        title="Landmark Portfolio | Viva Construct"
        description="Browse Viva Construct's landmark portfolio of commercial skyscrapers, luxury estates, highways, and industrial facilities."
      />

      <Breadcrumbs 
        currentPage="Projects Portfolio" 
        subtitle="Explore iconic architectural engineering achievements delivered across the globe."
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
                      ? 'bg-[#B22222] text-white shadow-md'
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
                placeholder="Search location, client..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-50 text-xs pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#B22222] transition-colors"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Projects Portfolio Grid */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-200">
              <HardHat className="w-12 h-12 text-[#B22222] mx-auto mb-3" />
              <h3 className="text-xl font-bold text-[#000000] font-['Montserrat']">No Projects Found</h3>
              <p className="text-sm text-gray-500 mt-1">Try searching for a different keyword or category filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={project.mainImage} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-85" />
                      
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-[#B22222] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                          {project.category}
                        </span>
                        {project.video && (
                          <span className="bg-[#000000]/80 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow flex items-center gap-1">
                            <Video className="w-3 h-3 text-[#B22222]" /> Video Tour
                          </span>
                        )}
                      </div>

                      <div className="absolute bottom-3 left-4 right-4 text-xs text-gray-300 flex items-center justify-between">
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#B22222]" /> {project.location}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#B22222]" /> {project.year}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#000000] font-['Montserrat'] group-hover:text-[#B22222] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 font-medium">
                        Client: {project.client}
                      </p>
                      <p className="text-gray-600 text-sm mt-3 line-clamp-2 leading-relaxed">
                        {project.shortDescription}
                      </p>

                      <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-gray-400 block">Investment</span>
                          <span className="font-bold text-[#B22222]">{project.budget}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 block">Timeline</span>
                          <span className="font-bold text-[#000000]">{project.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="w-full bg-[#000000] hover:bg-[#B22222] text-white text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                      View Case Study & Gallery <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Project Details Modal */}
      {activeModalProject && (
        <Modal
          isOpen={!!activeModalProject}
          onClose={() => setActiveModalProject(null)}
          title={activeModalProject.title}
        >
          <div className="space-y-6">
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {activeModalProject.video ? (
                <div className="md:col-span-2 relative rounded-xl overflow-hidden shadow bg-black h-64">
                  <video 
                    src={activeModalProject.video} 
                    controls 
                    autoPlay 
                    muted 
                    loop 
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <img 
                  src={activeModalProject.mainImage} 
                  alt={activeModalProject.title}
                  className="w-full h-64 md:col-span-2 object-cover rounded-xl shadow"
                />
              )}
              <div className="grid grid-rows-2 gap-3">
                {activeModalProject.gallery.slice(0, 2).map((img, idx) => (
                  <img 
                    key={idx} 
                    src={img} 
                    alt={`Gallery ${idx}`}
                    className="w-full h-30 object-cover rounded-xl shadow" 
                  />
                ))}
              </div>
            </div>

            {/* Overview */}
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-gray-600 mb-3">
                <span className="bg-[#B22222] text-white px-3 py-1 rounded-full">{activeModalProject.category}</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-800">Client: {activeModalProject.client}</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-800">Location: {activeModalProject.location}</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-800">Year: {activeModalProject.year}</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-800">Duration: {activeModalProject.duration}</span>
              </div>
              <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                {activeModalProject.description}
              </p>
            </div>

            {/* Challenges & Solutions */}
            {activeModalProject.challenges && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                  <h4 className="font-bold text-xs text-[#B22222] font-['Montserrat'] uppercase tracking-wider mb-1">
                    Engineering Challenges:
                  </h4>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {activeModalProject.challenges}
                  </p>
                </div>
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <h4 className="font-bold text-xs text-emerald-800 font-['Montserrat'] uppercase tracking-wider mb-1">
                    Viva Constructs Solutions:
                  </h4>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {activeModalProject.solutions}
                  </p>
                </div>
              </div>
            )}

            {/* Key Services & Features */}
            {activeModalProject.services && (
              <div className="bg-[#F8F9FA] p-5 rounded-xl border border-gray-200">
                <h4 className="font-bold text-sm text-[#000000] font-['Montserrat'] mb-3">
                  Scope of Services Executed:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProject.services.map((serv, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-[#B22222] flex-shrink-0" />
                      <span>{serv}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-end gap-4 pt-4 border-t">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2.5 text-xs font-bold text-gray-600 hover:text-gray-800"
              >
                Close
              </button>
              <Link
                to="/contact"
                className="bg-[#B22222] hover:bg-[#8B0000] text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow transition-all"
              >
                Inquire Similar Project
              </Link>
            </div>

          </div>
        </Modal>
      )}
    </>
  );
};
