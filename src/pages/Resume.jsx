import React from 'react';
import { motion } from 'framer-motion';
import { pageMotion } from '../utils/pageMotion';

export function Resume() {
  return (
    <motion.div {...pageMotion} className="flex flex-col items-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 w-full">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-neon-orange font-semibold mb-6 sm:mb-8 text-center">
        Resume
      </h2>

      <div className="w-full max-w-6xl mx-auto">
        {/* Resume iframe container */}
        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden mb-6 sm:mb-8">
          <iframe 
            className="w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] xl:h-[90vh]" 
            src="/resume.pdf"
            title="Resume"
            style={{ border: 'none' }}
          />
        </div>

        {/* Download button */}
        <div className="text-center">
          <a
            href="/resume.pdf"
            download
            className="inline-block mt-4 px-4 sm:px-6 py-2 sm:py-3 border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 rounded-md font-bold uppercase tracking-wider text-sm sm:text-base"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </motion.div>
  );
}