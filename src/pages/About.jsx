import React from 'react';
import { motion } from 'framer-motion';
import { pageMotion } from '../utils/pageMotion';

export default function About() {
  return (
    <motion.div {...pageMotion} className="flex flex-col items-center px-4 py-16">
      <h2 className="text-5xl md:text-6xl font-bold text-neon-green mb-8">About Me</h2>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
        <img 
          src="/images/portrait.jpg" 
          alt="Kamaal Bartlett" 
          className="w-60 h-60 rounded-full object-cover border-4 border-neon-green shadow-lg" 
        />

        <p className="text-base md:text-xl text-neon-blue w-full max-w-3xl mb-10 leading-relaxed text-justify break-words">
          I’m Kamaal Bartlett — Software Engineer, Robotics Enthusiast, and Data Science Master's graduate.
                  I started out in Accounting and Finance, but my passion for experimenting with technology and problem-solving led me to dive into Computer Science.

                  Now, I'm aiming to leverage the experience I've gathered through my time in Finance, A data science bootcamp and graduate school to make the career change I've been planning for.
                  The projects I've worked on has led me to the intersection of AI, control systems, data analystics and robotics to create systems that interact with the world around them.
                  I mainly code in Python, then I learned C++ once I discovered the world of embedded systems. I've also worked with SQL professionally and I know HTML/CSS. I love the freedom C++ allows when it comes to
                  experimenting and trying new ideas.

                  Outside of work, I enjoy building and tinkering with different robotics related projects. I'm currently in the process of attempting to build my own functioning drone from scratch. Aside from coding, I play the guitar and I'm learning the piano.
                  I also enjoying reading a variety of generes from mysteries and thrillers, to sci-fi and fantasy as well as nonfiction works. When I'm able to, I enjoy playing basketball and I watch games whenever I can.


        </p>
      </div>
    </motion.div>
  );
}
