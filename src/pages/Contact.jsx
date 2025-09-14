import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText  } from 'lucide-react';
import { pageMotion } from '../utils/pageMotion'; 

export function Contact() {
  const contactInfo = [
    { icon: <Linkedin className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />, label: 'LinkedIn', url: 'https://linkedin.com/in/kamaal-bartlett/' },
    { icon: <Github className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />, label: 'GitHub', url: 'https://github.com/automationkay' },
    { icon: <Mail className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />, label: 'Email', url: 'mailto:bartlettkamaal@gmail.com' },
    { icon: <FileText className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />, label: 'Medium', url: 'https://medium.com/@bartlettkamaal' },
  ];

  return (
    <motion.div {...pageMotion} className="w-full text-center py-8 sm:py-12 lg:py-16 px-4">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-neon-orange font-semibold mb-8 sm:mb-10 lg:mb-12">
        Contact
      </h2>
   
      <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24 xl:gap-32 text-neon-blue max-w-4xl mx-auto">
        {contactInfo.map((item, i) => (
          <a 
            key={i} 
            href={item.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center hover:text-neon-green transition-colors duration-300 group"
          >
            <div className="transform group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <span className="mt-2 sm:mt-3 lg:mt-4 text-base sm:text-lg lg:text-xl font-semibold">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </motion.div>
  );
}