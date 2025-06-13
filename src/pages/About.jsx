import React from 'react';
import { motion } from 'framer-motion';
import { pageMotion } from '../utils/pageMotion';

export default function About() {
  return (
    <motion.div {...pageMotion} className="min-h-screen flex flex-col justify-center items-center px-4">
      <h2 className="text-5xl text-neon-orange font-semibold mb-8">About Me</h2>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
        <img 
          src="/images/portrait.jpg" 
          alt="Kamaal Bartlett" 
          className="w-60 h-60 rounded-full object-cover border-4 border-neon-green shadow-lg" 
        />

        <p className="text-xl leading-relaxed text-white text-center md:text-left">
          I’m Kamaal Bartlett — developer, robotics engineer, and data scientist.
          My work blends artificial intelligence, real-time control systems, deep learning, data analytics, and robotics to build intelligent autonomous systems that interact with real-world environments.
        </p>
      </div>
    </motion.div>
  );
}
