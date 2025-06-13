import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { pageMotion } from '../utils/pageMotion';

export default function Contact() {
  const contactInfo = [
    { icon: <Linkedin className="w-12 h-12" />, label: 'LinkedIn', url: 'https://linkedin.com/in/kamaal-bartlett/' },
    { icon: <Github className="w-12 h-12" />, label: 'GitHub', url: 'https://github.com/automationkay' },
    { icon: <Mail className="w-12 h-12" />, label: 'Email', url: 'mailto:bartlettkamaal@gmail.com' },
  ];

  return (
    <motion.div {...pageMotion} className="flex flex-col items-center px-4 py-16">
      <h2 className="text-5xl text-neon-orange font-semibold mb-8">Contact</h2>
      <div className="flex justify-center space-x-12 text-neon-blue text-lg">
        {contactInfo.map((item, i) => (
          <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:underline">
            {item.icon}
            <span className="mt-5 text x1">{item.label}</span>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
