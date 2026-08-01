import React, { useState } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEOHead } from '../components/common/SEOHead';
import { faqData, faqCategories } from '../data/faqData';
import { Search, ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(0); // first open by default

  const filteredFaqs = faqData.filter(item => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <>
      <SEOHead 
        title="Frequently Asked Questions | Viva Construct"
        description="Find answers to common questions about Viva Construct's contracting models, safety standards, BIM scheduling, and project bids."
      />

      <Breadcrumbs 
        currentPage="Frequently Asked Questions" 
        subtitle="Transparent answers regarding tendering, contractual models, safety protocols, and project timelines."
      />

      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Pills & Search */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {faqCategories.map((cat) => (
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

            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search FAQ questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-50 text-xs pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#B22222]"
              />
            </div>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={faq.id} 
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-base text-[#000000] font-['Montserrat'] flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#B22222] flex-shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[#000000] transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#B22222]' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-6 pb-6 pt-2 text-sm text-gray-600 leading-relaxed border-t border-gray-100"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
};
