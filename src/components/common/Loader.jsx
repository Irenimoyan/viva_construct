import React from 'react';
import { motion } from 'framer-motion';

export const Loader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen min-h-screen z-[9999] bg-[#000000] flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute w-80 h-80 bg-[#B22222]/20 rounded-full blur-3xl pointer-events-none" />

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
          alt="Viva Constructs Limited Logo Loading" 
          className="w-20 h-20 object-cover rounded-full border border-white/20 shadow-2xl bg-black/60 p-1.5" 
        />
      </motion.div>

      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-2xl font-black font-['Montserrat'] tracking-widest uppercase text-center px-4"
      >
        <span className="text-[#B22222]">VIVA.</span>CONSTRUCTS LIMITED
      </motion.h2>

      <p className="relative z-10 text-[11px] sm:text-xs text-gray-400 tracking-[0.25em] uppercase mt-2 font-semibold text-center px-4">
        Building Excellence. Delivering Confidence.
      </p>

      {/* Progress Bar Animation */}
      <div className="relative z-10 w-56 h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
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
