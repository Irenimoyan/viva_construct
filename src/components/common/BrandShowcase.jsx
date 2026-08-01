import React, { useState } from 'react';
import { ShieldCheck, Award, FileText, CheckCircle2, Download, Layers, Globe2, Sparkles, Building2, HardHat } from 'lucide-react';

export const BrandShowcase = () => {
  const [activeTagline, setActiveTagline] = useState('Building Excellence. Delivering Confidence.');

  const taglines = [
    'Building Excellence. Delivering Confidence.',
    'Engineering Quality. Constructing Trust.',
    'Building Tomorrow, Today.',
    'Precision in Every Project.',
    'Strong Foundations. Lasting Partnerships.'
  ];

  const colorTokens = [
    { name: 'Primary Deep Crimson', hex: '#B22222', desc: 'Core brand identity, primary CTA triggers, active states & logo accent' },
    { name: 'Dark Crimson Red', hex: '#8B0000', desc: 'Hover states, dark gradient stops & high-contrast indicators' },
    { name: 'Onyx Pure Black', hex: '#000000', desc: 'Header navigation, footer backdrop, glassmorphism overlays' },
    { name: 'Charcoal Gray', hex: '#222222', desc: 'Secondary backgrounds, borders, card container fills' },
    { name: 'Accent Amber Gold', hex: '#F4A300', desc: 'Secondary badges, rating stars, award highlights' },
  ];

  const coreValues = [
    { name: "Integrity", desc: "We uphold honesty, transparency, and accountability in every project." },
    { name: "Excellence", desc: "We consistently strive for the highest standards in workmanship and service delivery." },
    { name: "Innovation", desc: "We embrace modern technologies and creative solutions to improve project outcomes." },
    { name: "Safety", desc: "Safety is integrated into every stage of our operations to protect our people, clients, and communities." },
    { name: "Professionalism", desc: "We conduct our business with competence, respect, and ethical responsibility." },
    { name: "Teamwork", desc: "Collaboration drives our success and strengthens every project we undertake." },
    { name: "Customer Satisfaction", desc: "Our clients remain at the heart of every decision we make." },
    { name: "Sustainability", desc: "We build responsibly while considering environmental and social impacts." }
  ];

  return (
    <div className="bg-[#111111] text-white rounded-3xl p-8 md:p-12 border border-[#444444]/50 shadow-2xl relative overflow-hidden my-12">
      {/* Background Glow Overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B22222]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-10">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#444444]/40">
          <div>
            <span className="inline-flex items-center gap-2 bg-[#B22222]/20 text-[#B22222] border border-[#B22222]/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
              <ShieldCheck className="w-3.5 h-3.5" /> Corporate Brand Standards System
            </span>
            <h2 className="text-3xl font-black font-['Montserrat'] tracking-tight text-white">
              Viva Constructs Limited — Brand Identity & Values
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
              Official corporate profile, year established (2025), headquarters in Lagos, 36 Nigerian states & West Africa execution capability, and legal compliance (RC: 8867751).
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => alert("Viva Constructs Limited Official Corporate Profile PDF download initiated.")}
              className="bg-[#B22222] hover:bg-[#8B0000] text-white text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-lg shadow-[#B22222]/20 flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Download Corporate Brochure
            </button>
          </div>
        </div>

        {/* Tagline Showcase Selector */}
        <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-[#333333]">
          <span className="text-xs font-bold text-[#B22222] uppercase tracking-widest block mb-2 font-['Montserrat']">
            Official Corporate Taglines
          </span>
          <div className="text-2xl sm:text-3xl font-black font-['Montserrat'] text-white mb-4 transition-all">
            "{activeTagline}"
          </div>
          <div className="flex flex-wrap gap-2">
            {taglines.map((t, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTagline(t)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
                  activeTagline === t
                    ? 'bg-[#B22222] text-white font-bold'
                    : 'bg-[#222222] text-gray-300 hover:bg-[#333333]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Brand Logo Presentation & Usage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#1A1A1A] p-6 rounded-2xl border border-[#333333]">
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-[#000000] rounded-xl border border-[#444444]/60">
            <img 
              src="/Viva logo.png" 
              alt="Viva Constructs Limited Official Brand Logo" 
              className="w-32 h-auto object-contain rounded-xl shadow-lg border border-white/10"
            />
            <span className="text-xs font-bold text-gray-300 font-['Montserrat'] mt-3">
              Official Crest Logo
            </span>
            <span className="text-[10px] text-[#B22222] font-semibold tracking-widest uppercase mt-0.5">
              Viva Constructs Limited (Est. 2025)
            </span>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-xl font-bold font-['Montserrat'] text-white flex items-center gap-2">
              <Globe2 className="w-5 h-5 text-[#B22222]" /> Regional Coverage & Legal Verification
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Viva Constructs Limited is headquartered in Lagos, Nigeria, with full multi-disciplinary engineering capacity to execute complex residential, commercial, industrial, telecommunications, and civil projects across all 36 states of Nigeria and throughout West Africa.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-[#222222] p-3 rounded-lg border border-[#444444] text-xs">
                <span className="text-gray-400 block text-[10px] uppercase font-bold">Year Established</span>
                <span className="text-white font-semibold">2025</span>
              </div>
              <div className="bg-[#222222] p-3 rounded-lg border border-[#444444] text-xs">
                <span className="text-gray-400 block text-[10px] uppercase font-bold">Headquarters Location</span>
                <span className="text-white font-semibold">Lagos, Nigeria</span>
              </div>
              <div className="bg-[#222222] p-3 rounded-lg border border-[#444444] text-xs">
                <span className="text-gray-400 block text-[10px] uppercase font-bold">Coverage Scope</span>
                <span className="text-[#B22222] font-semibold">36 States & West Africa</span>
              </div>
            </div>
          </div>
        </div>

        {/* 8 Core Values Grid */}
        <div>
          <h3 className="text-lg font-bold font-['Montserrat'] text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#B22222]" /> 8 Corporate Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-[#1A1A1A] p-4 rounded-xl border border-[#333333] hover:border-[#B22222]/50 transition-colors">
                <div className="flex items-center gap-2 text-[#B22222] font-bold text-xs mb-1 font-['Montserrat']">
                  <CheckCircle2 className="w-4 h-4" /> {val.name}
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Color Palette Tokens */}
        <div>
          <h3 className="text-lg font-bold font-['Montserrat'] text-white mb-4 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B22222]" /> Visual Design System Tokens
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {colorTokens.map((token) => (
              <div key={token.hex} className="bg-[#1A1A1A] rounded-xl p-4 border border-[#333333]">
                <div 
                  className="w-full h-14 rounded-lg shadow-inner mb-3 border border-white/10 flex items-end justify-end p-2"
                  style={{ backgroundColor: token.hex }}
                >
                  <span className="text-[10px] font-mono bg-black/60 text-white px-2 py-0.5 rounded font-bold">
                    {token.hex}
                  </span>
                </div>
                <h4 className="font-bold text-xs text-white font-['Montserrat']">{token.name}</h4>
                <p className="text-[11px] text-gray-400 mt-1 leading-snug">{token.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
