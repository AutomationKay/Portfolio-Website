import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto text-center"
    >
      <h2 className="text-5xl text-neon-orange font-semibold mb-8">About Me</h2>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
        <img src="/images/portrait.jpg" alt="Kamaal Bartlett" className="w-60 h-60 rounded-full object-cover border-4 border-neon-green shadow-lg" />
        <p className="text-xl leading-relaxed text-white max-w-xl text-left">
          I’m Kamaal Bartlett — developer, robotics engineer, and data scientist.<br /><br />
          My work blends artificial intelligence, real-time control systems, deep learning, data analytics, and robotics to build intelligent autonomous systems that interact with real-world environments.
        </p>
      </div>
    </motion.section>
  );
}
