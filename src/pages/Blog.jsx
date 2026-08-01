import React, { useState } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEOHead } from '../components/common/SEOHead';
import { Modal } from '../components/common/Modal';
import { blogData } from '../data/blogData';
import { Calendar, User, Clock, ArrowRight, BookOpen } from 'lucide-react';

export const Blog = () => {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <>
      <SEOHead 
        title="Engineering Insights & Industry Blog | Viva Construct"
        description="Read Viva Construct's latest technical whitepapers on low-carbon concrete, 5D BIM digital twin simulations, and seismic retrofitting."
      />

      <Breadcrumbs 
        currentPage="Industry Insights & News" 
        subtitle="Technical articles, structural engineering whitepapers, and construction technology breakthroughs."
      />

      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogData.map((post) => (
              <div 
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <span className="absolute top-4 left-4 bg-[#B22222] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#B22222]" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#B22222]" /> {post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#000000] font-['Montserrat'] group-hover:text-[#B22222] transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm mt-3 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex justify-between items-center border-t border-gray-100 mt-4">
                  <div className="text-xs text-gray-500">
                    By <span className="font-bold text-[#000000]">{post.author}</span>
                  </div>

                  <button
                    onClick={() => setActiveArticle(post)}
                    className="text-xs font-bold text-[#000000] hover:text-[#B22222] transition-colors flex items-center gap-1"
                  >
                    Read Article <ArrowRight className="w-3.5 h-3.5 text-[#B22222]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Article Modal */}
      {activeArticle && (
        <Modal
          isOpen={!!activeArticle}
          onClose={() => setActiveArticle(null)}
          title={activeArticle.title}
        >
          <div className="space-y-6">
            <img 
              src={activeArticle.image} 
              alt={activeArticle.title} 
              className="w-full h-72 object-cover rounded-xl shadow"
            />

            <div className="flex items-center justify-between text-xs text-gray-500 border-b pb-3">
              <span>Category: <strong className="text-[#B22222]">{activeArticle.category}</strong></span>
              <span>Published: <strong>{activeArticle.date}</strong></span>
              <span>Author: <strong>{activeArticle.author}</strong> ({activeArticle.authorRole})</span>
            </div>

            <div className="prose max-w-none text-gray-700 text-sm leading-relaxed whitespace-pre-line">
              {activeArticle.content}
            </div>

            <div className="flex justify-end pt-4 border-t">
              <button
                onClick={() => setActiveArticle(null)}
                className="bg-[#000000] hover:bg-[#B22222] text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
