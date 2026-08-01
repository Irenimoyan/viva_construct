import React from 'react';
import { motion } from 'framer-motion';
import { HardHat } from 'lucide-react';

export const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-[#0A2342] flex flex-col items-center justify-center text-white">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }}
        className="w-20 h-20 flex items-center justify-center text-[#0A2342] shadow-2xl mb-6 border-2 border-none"
      >
        <img src="./public/Viva logo.png" alt="" className="w-20 h-20 rounded-2xl" />
      </motion.div>

      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-black font-['Montserrat'] tracking-widest uppercase"
      >
      <span className="text-red-500">VIVA.</span>CONSTRUCT LTD
      </motion.h2>

      <p className="text-xs text-gray-400 tracking-[0.3em] uppercase mt-2">
        Building Excellence
      </p>

      {/* Progress Bar Animation */}
      <div className="w-48 h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="w-full h-full bg-red-600"
        />
      </div>
    </div>
  );
};
