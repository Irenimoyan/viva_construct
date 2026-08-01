import React from 'react';
import { motion } from 'framer-motion';
import { HardHat } from 'lucide-react';

export const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-[#000000] flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute w-72 h-72 bg-[#B22222]/20 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
          ease: "easeInOut"
        }}
        className="relative z-10 w-24 h-24 flex items-center justify-center shadow-2xl mb-6"
      >
        <img 
          src="/Viva logo.png" 
          alt="Viva Construct Logo Loading" 
          className="w-20 h-20 object-contain rounded-2xl border border-white/20 shadow-2xl bg-black/60 p-2" 
        />
      </motion.div>

      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-2xl font-black font-['Montserrat'] tracking-widest uppercase"
      >
        <span className="text-[#B22222]">VIVA.</span>CONSTRUCT LTD
      </motion.h2>

      <p className="relative z-10 text-xs text-gray-400 tracking-[0.3em] uppercase mt-2 font-semibold">
        Building Excellence. Creating Lasting Value.
      </p>

      {/* Progress Bar Animation */}
      <div className="relative z-10 w-52 h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
          className="w-full h-full bg-[#B22222]"
        />
      </div>
    </div>
  );
};
