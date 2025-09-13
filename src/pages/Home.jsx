import React from 'react';
import { motion } from 'framer-motion';
import { pageMotion } from '../utils/pageMotion';

export default function Home() {
  return (
    <motion.div {...pageMotion} className="w-full flex flex-col items-center text-center py-16">
      <h1 className="text-5xl md:text-6xl font-bold text-neon-green mb-8">Welcome!</h1>
      <p className="text-xl md:text-2xl text-neon-blue max-w-3xl mb-10">
        I'm Kamaal Bartlett — a Masters degree educated Data Scientist, Robotics Lover, current Reinforcement Learning explorer and avid basketball watcher.
        Explore my projects, blog, resume, and feel free to reach out if you'd like to collaborate.
      </p>
    </motion.div>
  );
}
