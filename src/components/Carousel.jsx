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
    <div className="w-full flex flex-col items-center">
      {/* Main carousel container */}
      <div className="relative w-full max-w-7xl flex items-center justify-center overflow-hidden py-4 sm:py-6 lg:py-8 min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ 
              duration: 0.4,
              ease: "easeInOut"
            }}
            className="w-full flex justify-center"
          >
            <div className="w-full max-w-full">
              {items[index]}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation controls */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 mt-4 sm:mt-6 px-4">
        <button 
          onClick={handlePrev} 
          className="p-2 sm:p-3 rounded-full bg-gray-800 text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-neon-blue"
          aria-label="Previous item"
        >
          <ChevronLeft size={24} className="sm:w-8 sm:h-8" />
        </button>
        
        {/* Page indicator */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg sm:text-xl font-semibold text-white">
            {index + 1} / {items.length}
          </p>
          
          {/* Dots indicator */}
          <div className="flex gap-1 sm:gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  i === index 
                    ? 'bg-neon-green scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to item ${i + 1}`}
              />
            ))}
          </div>
        </div>
        
        <button 
          onClick={handleNext} 
          className="p-2 sm:p-3 rounded-full bg-gray-800 text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-neon-blue"
          aria-label="Next item"
        >
          <ChevronRight size={24} className="sm:w-8 sm:h-8" />
        </button>
      </div>

      {/* Swipe hint for mobile */}
      <div className="block sm:hidden mt-3 text-xs text-gray-400 text-center">
        Swipe or use arrows to navigate
      </div>
    </div>
  );
}