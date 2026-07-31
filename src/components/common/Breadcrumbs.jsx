import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumbs = ({ currentPage, subtitle }) => {
  const location = useLocation();

  return (
    <div className="bg-[#0A2342] text-white pt-32 pb-16 px-4 relative overflow-hidden">
      {/* Structural Accent Line */}
      <div className="absolute top-0 left-0 w-2 h-full bg-[#F4A300]" />

      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center space-x-2 text-xs md:text-sm text-gray-300 mb-4">
          <Link to="/" className="hover:text-[#F4A300] transition-colors flex items-center gap-1">
            <Home className="w-4 h-4 text-[#F4A300]" />
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-500" />
          <span className="text-[#F4A300] font-semibold">{currentPage}</span>
        </nav>

        <h1 className="text-3xl md:text-5xl font-black font-['Montserrat'] text-white tracking-tight">
          {currentPage}
        </h1>
        {subtitle && (
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mt-3 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
