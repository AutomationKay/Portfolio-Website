import React from 'react';
import { motion } from 'framer-motion';
import { pageMotion } from '../utils/pageMotion';

export function Home() {
  return (
    <motion.div {...pageMotion} className="w-full flex flex-col items-center text-center py-8 sm:py-12 lg:py-16 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neon-green mb-6 sm:mb-8">
        Welcome!
      </h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neon-blue leading-relaxed">
          I'm Kamaal Bartlett — a Masters degree educated Data Scientist, Robotics Lover, current Reinforcement Learning explorer and avid basketball watcher.
          Explore my projects, blog, resume, and feel free to reach out if you'd like to collaborate.
        </p>
      </div>
    </motion.div>
  );
}
