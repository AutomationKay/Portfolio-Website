import React from 'react';
import { motion } from 'framer-motion';
import { pageMotion } from '../utils/pageMotion';

export default function About() {
  return (
    <motion.div {...pageMotion} className="flex flex-col items-center px-4 py-16">
      <h2 className="text-5xl text-neon-orange font-semibold mb-8">About Me</h2>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
        <img 
          src="/images/portrait.jpg" 
          alt="Kamaal Bartlett" 
          className="w-60 h-60 rounded-full object-cover border-4 border-neon-green shadow-lg" 
        />

        <p className="text-xl leading-relaxed text-white text-center md:text-left">
          I’m Kamaal Bartlett — Software Engineer, Robotics Enthusiast, and Data Science masters graduate.
          I began my career working in Accounting and Finance before taking the leap to dive into the world of Computer Science.
          Since making this decision I've spent countless hours in preparation to make this career change.
          I completed a Data Science bootcamp from Springboard, attended and graduated from The University of Denver with a Master's degree in Computer Science,

          My work blends artificial intelligence, real-time control systems, deep learning, data analytics, and robotics to build intelligent autonomous systems that interact with real-world environments.
        </p>
      </div>
    </motion.div>
  );
}
