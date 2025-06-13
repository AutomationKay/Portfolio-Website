import React from 'react';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <motion.div {...pageMotion} className="min-h-screen flex flex-col justify-center items-center px-4">
      <h2 className="text-5xl text-neon-orange font-semibold mb-8">Resume</h2>

      <div className="flex flex-col items-center">
        <iframe
          src="/resume.pdf"
          title="Resume"
          className="w-full h-[80vh] border-4 border-neon-blue rounded-lg shadow-lg"
        ></iframe>

        <a
          href="/resume.pdf"
          download
          className="mt-8 btn-terminal"
        >
          Download Resume (PDF)
        </a>
      </div>
    </motion.div>
  );
}
