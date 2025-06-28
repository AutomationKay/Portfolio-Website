import React from 'react';
import { motion } from 'framer-motion';
import { pageMotion } from '../utils/pageMotion';

export default function Resume() {
  return (
    <motion.div {...pageMotion} className="flex flex-col items-center px-4 py-12 w-full">
      <h2 className="text-5xl text-neon-orange font-semibold mb-8"></h2>

      <div className="flex flex-col items-center w-full px-4 md:px-0">
        <iframe
          src="/resume.pdf"
          title="Resume"
          className="w-full h-[90vh] border-4 border-neon-blue rounded-lg shadow-lg"
        ></iframe>

        <a
          href="/resume.pdf"
          download
          className="mt-8 px-6 py-3 border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition rounded-md font-bold uppercase tracking-wider"
        >
          Download Resume (PDF)
        </a>
      </div>
    </motion.div>
  );
}
