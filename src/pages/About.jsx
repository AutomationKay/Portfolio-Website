import React from 'react';
import { motion } from 'framer-motion';
import { pageMotion } from '../utils/pageMotion';

export default function About() {
  return (
    <div className="w-full overflow-x-hidden">
      <motion.div {...pageMotion} className="flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neon-green mb-6 sm:mb-8 text-center leading-tight">
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 lg:gap-12 w-full">
          {/* Portrait Image */}
          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
            <img 
              src="/images/portrait.jpeg" 
              alt="Kamaal Bartlett" 
              className="w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-neon-green shadow-lg" 
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-6 sm:gap-8 flex-grow w-full lg:w-auto">
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-neon-blue leading-relaxed text-left break-words hyphens-auto">
              I'm Kamaal Bartlett — Data Scientist, Robotics Enthusiast, and avid experimentor.
              I started out in Accounting and Finance, but my passion for experimenting with technology and problem-solving led me to dive into Computer Science.
            </p>

            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-neon-blue leading-relaxed text-left break-words hyphens-auto">
              Now, I'm aiming to leverage the experience I've gathered through my time in Finance, a data science bootcamp, and Data Science Master's degree to make the career change I've been planning for.
              The projects I've worked on have led me to the intersection of AI, control systems, data analytics, and robotics to create systems that interact with the world around them.
              I mainly code in Python, and I learned C++ once I discovered the world of embedded systems. I've also worked with SQL professionally, and I know HTML/CSS.
              I love the freedom C++ allows when it comes to experimenting and trying new ideas.
            </p>

            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-neon-blue leading-relaxed text-left break-words hyphens-auto">
              Outside of work, I enjoy building and tinkering with different robotics-related projects.
              I'm currently in the process of attempting to build my own functioning drone from scratch.
              Aside from coding, I play the guitar and I'm learning the piano.
              I also enjoy reading a variety of genres — from mysteries and thrillers to sci-fi, fantasy, and nonfiction.
              When I'm able to, I enjoy playing basketball and watching games whenever I can.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}