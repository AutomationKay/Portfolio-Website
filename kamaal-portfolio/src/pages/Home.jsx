import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col justify-center items-center min-h-screen text-center px-4">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-neon-green mb-4">
        Kamaal Bartlett
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
        className="text-xl md:text-2xl text-white">
        Robotics • AI • Data Science
      </motion.p>
      <motion.button
        onClick={() => navigate('/about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-10 btn-terminal"
      >
        Enter Portfolio
      </motion.button>
    </section>
  );
}
