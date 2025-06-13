import React from 'react';
import { motion } from 'framer-motion';
import { pageMotion } from '../utils/pageMotion';

export default function Home() {
  return (
    <motion.div {...pageMotion} className="flex flex-col items-center text-center px-4 py-16 max-w-[1600px] mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold text-neon-green mb-8">Welcome!</h1>
      <p className="text-xl md:text-2xl text-neon-blue max-w-3xl mb-10">
        I'm Kamaal Bartlett — Robotics Engineer, AI Developer, and Data Scientist.
        Explore my projects, blog, resume, and feel free to reach out if you'd like to collaborate.
      </p>
    </motion.div>
  );
}
