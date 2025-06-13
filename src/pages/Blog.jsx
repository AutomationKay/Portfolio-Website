import React from 'react';
import { motion } from 'framer-motion';
import { pageMotion } from '../utils/pageMotion';

export default function Blog() {
  const blogPosts = [
    {
      title: 'How I Built My MVP Prediction Model',
      snippet: 'Breaking down my approach to predicting NBA MVPs using public data...',
      url: 'https://medium.com/@yourusername/nba-mvp-model',
    },
    {
      title: 'Building My Blood Pressure Tracker App',
      snippet: 'Architecture, challenges, deployment lessons from my full-stack app...',
      url: 'https://medium.com/@yourusername/blood-pressure-app',
    },
  ];

  return (
    <motion.div {...pageMotion} className="min-h-screen flex flex-col justify-center items-center px-4">
     
      <h2 className="text-5xl text-neon-orange font-semibold mb-8">Blog</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-gray-900 rounded-lg p-6 shadow-lg border border-neon-orange card-glow text-left">
            <h3 className="text-2xl font-bold text-neon-green mb-4">{post.title}</h3>
            <p className="text-white mb-4">{post.snippet}</p>
            <a href={post.url} target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline">
              Read Full Post →
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
