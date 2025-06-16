import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { pageMotion } from '../utils/pageMotion'; 

export default function Contact() {
  const contactInfo = [
    { icon: <Linkedin className="w-16 h-16" />, label: 'LinkedIn', url: 'https://linkedin.com/in/kamaal-bartlett/' },
    { icon: <Github className="w-16 h-16" />, label: 'GitHub', url: 'https://github.com/automationkay' },
    { icon: <Mail className="w-16 h-16" />, label: 'Email', url: 'mailto:bartlettkamaal@gmail.com' },
  ];

  return (
      <motion.div /* {...pageMotion} */ className="w-full text-center py-16">
      <h2 className="text-5xl text-neon-orange font-semibold mb-12">Contact</h2>
   
      <div className="flex flex-col sm:flex-row justify-center items-center gap-24 sm:gap-32 md:gap-40 text-neon-blue">
        {contactInfo.map((item, i) => (
          <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-neon-green transition-colors duration-300">
            {item.icon}
      
            <span className="mt-4 text-xl font-semibold">{item.label}</span>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
