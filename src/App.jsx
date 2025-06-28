import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Background from './components/Background';
import BootSequence from './components/BootSequence';
import './App.css'; 
import './components/Background.css';

export default function App() {
  const [isBooting, setIsBooting] = useState(false);
  const [enteredPortfolio, setEnteredPortfolio] = useState(false);

  const handleBootComplete = () => {
    setIsBooting(false);
    setEnteredPortfolio(true);
  };

  const handleEnterClick = () => {
    setIsBooting(true);
  };

  if (enteredPortfolio) {
    return (
      <div className = "min-h-screen bg-black text-white font-mono flex flex-col" style={{ fontFamily: "'Orbitron', 'Roboto Mono', monospace" }}>
        <Background />
        <Sidebar />
        <main className="relative z-10 flex-grow w-full flex flex-col justify-center items-center px-4 md:px-8 pt-32 pb-12">
          <div className="flex-grow p-8 md:p-12">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </AnimatePresence>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (isBooting) {
    return <BootSequence onComplete={handleBootComplete} />;
  }

  
  return (
    <div className="min-h-screen bg-black text-white font-mono flex flex-col" style={{ fontFamily: "'Orbitron', 'Roboto Mono', monospace" }}>
      <Background />
      <main className="relative z-10 flex-grow flex flex-col justify-center items-center text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          className="text-5xl md:text-7xl font-bold text-neon-green drop-shadow-md"
        >
          KAMAAL
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 1 }} 
          className="text-xl md:text-2xl mt-4 text-neon-blue"
        >
          Software Engineer | Robotics Enthusiast
        </motion.p>
        <motion.button 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1, duration: 1 }} 
          className="mt-10 px-6 py-3 border border-neon-orange text-neon-orange hover:bg-neon-orange hover:text-black transition rounded-md shadow-lg"
          onClick={handleEnterClick}
        >
          Initialize Systems
        </motion.button>
      </main>
    </div>
  );
}
