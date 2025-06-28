import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel({ items }) {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="w-full max-w-4xl flex flex-col items-center">
      <div className="relative w-full flex items-center justify-center overflow-visible py-8">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.3 }}
            className="absolute w-full h-full"
          >
            {items[index]}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-center gap-8 mt-6">
        <button onClick={handlePrev} className="p-3 rounded-full bg-gray-800 text-neon-blue hover:bg-neon-blue hover:text-black transition-colors duration-300">
          <ChevronLeft size={32} />
        </button>
        <p className="text-xl font-semibold text-white">
          {index + 1} / {items.length}
        </p>
        <button onClick={handleNext} className="p-3 rounded-full bg-gray-800 text-neon-blue hover:bg-neon-blue hover:text-black transition-colors duration-300">
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}
