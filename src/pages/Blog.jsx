import React from 'react';
import { motion } from 'framer-motion';
import { pageMotion } from '../utils/pageMotion';
import Carousel from '../components/Carousel';

const BlogCard = ({ post }) => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <div className="bg-gray-900 rounded-lg p-8 shadow-lg border border-neon-orange card-glow text-left w-full max-w-xl h-[300px] flex flex-col justify-between">
      <div>
        <h3 className="text-3xl font-bold text-neon-green mb-6">{post.title}</h3>
        <p className="text-white text-lg">{post.snippet}</p>
      </div>
      <a href={post.url} target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline text-lg self-start mt-4">
        Read Full Post →
      </a>
    </div>
  </div>
);

export default function Blog() {
  const blogPosts = [
    { title: 'How I Built My MVP Prediction Model', snippet: 'Breaking down my approach to predicting NBA MVPs using public data...', url: 'https://medium.com/@yourusername/nba-mvp-model' },
    { title: 'Building My Blood Pressure Tracker App', snippet: 'Architecture, challenges, and deployment lessons from my full-stack app...', url: 'https://medium.com/@yourusername/blood-pressure-app' },
  ];

  const blogCards = blogPosts.map((post, index) => <BlogCard key={index} post={post} />);

  return (
    <motion.div {...pageMotion} className="flex flex-col items-center px-4 w-full">
      <h2 className="text-5xl text-neon-orange font-semibold mb-8">Blog</h2>
      <Carousel items={blogCards} />
    </motion.div>
  );
}
