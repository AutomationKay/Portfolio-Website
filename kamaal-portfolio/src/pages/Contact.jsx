import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    { icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
    { icon: <Github className="w-6 h-6" />, label: 'GitHub', url: 'https://github.com/yourusername' },
    { icon: <Mail className="w-6 h-6" />, label: 'Email', url: 'mailto:your@email.com' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto text-center"
    >
      <h2 className="text-5xl text-neon-orange font-semibold mb-8">Contact</h2>
      <div className="flex justify-center space-x-12 text-neon-blue text-lg">
        {contactInfo.map((item, i) => (
          <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:underline">
            {item.icon}
            <span className="mt-2">{item.label}</span>
          </a>
        ))}
      </div>
    </motion.section>
  );
}
