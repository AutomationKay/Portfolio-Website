import React from 'react';
import { motion } from 'framer-motion';
import { pageMotion } from '../utils/pageMotion';
import Carousel from '../components/Carousel';

const BlogCard = ({ post }) => (
  <div className="w-full max-w-6xl mx-auto px-4 py-12">
    <div className="bg-gray-900 rounded-lg p-8 shadow-lg border border-neon-orange card-glow text-left w-full max-w-3xl min-h-[350px] flex flex-col justify-between">
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
    { title: 'Predicting NBA Award Winners: From Scraping to Deployment', snippet: 'Breaking down my approach to predicting NBA MVPs using public data...', url: 'https://medium.com/@bartlettkamaal/predicting-nba-award-winners-from-scraping-to-deployment-bdec6e6e585c' },
    { title: 'I found out I had high blood pressure. So I built an app using public data to track it.', snippet: 'Architecture, challenges, and deployment lessons from my full-stack app...', url: 'https://medium.com/@bartlettkamaal/i-found-out-i-had-high-blood-pressure-so-i-built-an-app-using-public-data-to-track-it-72b9b1f4aaf0' },
  ];

  const blogCards = blogPosts.map((post, index) => <BlogCard key={index} post={post} />);

  return (
    <motion.div {...pageMotion} className="flex flex-col items-center px-4 w-full">
          <h2 className="text-5xl text-neon-orange font-semibold mb-12">Blog</h2>
      <div className="flex justify-center w-full">
              <div className="ml-[256px] w-full max-w-[calc(100vw-256px)] px-4 overflow-hidden"> 
        <Carousel items={blogCards} />
        </div>
      </div>
    </motion.div>
  );
}
  