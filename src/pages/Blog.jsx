import React from 'react';
import { motion } from 'framer-motion';
import { pageMotion } from '../utils/pageMotion';
import Carousel from '../components/Carousel';

const BlogCard = ({ post }) => (
  <div className="w-full max-w-4xl mx-auto px-4 py-6 sm:py-8 lg:py-12">
    <div className="bg-gray-900 rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg border border-neon-orange card-glow text-left w-full min-h-[280px] sm:min-h-[320px] lg:min-h-[350px] flex flex-col justify-between">
      <div className="flex-grow">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neon-green mb-4 sm:mb-6 leading-tight">
          {post.title}
        </h3>
        <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed">
          {post.snippet}
        </p>
      </div>
      <a 
        href={post.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-neon-blue hover:underline text-sm sm:text-base lg:text-lg self-start mt-4 inline-block transition-colors hover:text-neon-green"
      >
        Read Full Post →
      </a>
    </div>
  </div>
);

export default function Blog() {
  const blogPosts = [
    { 
      title: 'Predicting NBA Award Winners: From Scraping to Deployment', 
      snippet: 'Breaking down my approach to predicting NBA MVPs using public data...', 
      url: 'https://medium.com/@bartlettkamaal/predicting-nba-award-winners-from-scraping-to-deployment-bdec6e6e585c' 
    },
    { 
      title: 'I found out I had high blood pressure. So I built an app using public data to track it.', 
      snippet: 'Architecture, challenges, and deployment lessons from my full-stack app...', 
      url: 'https://medium.com/@bartlettkamaal/i-found-out-i-had-high-blood-pressure-so-i-built-an-app-using-public-data-to-track-it-72b9b1f4aaf0' 
    },
    { 
      title: 'Using the classic games I grew up on to train AI Agents', 
      snippet: 'If you were born in the 1990s then there is a good chance you know the character Sonic, and if you are reading this then you know about AI.', 
      url: 'https://medium.com/@bartlettkamaal/' 
    },
  ];

  const blogCards = blogPosts.map((post, index) => <BlogCard key={index} post={post} />);

  return (
    <motion.div {...pageMotion} className="flex flex-col items-center px-4 sm:px-6 lg:px-8 w-full">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-neon-orange font-semibold mb-8 sm:mb-10 lg:mb-12 text-center">
        Blog
      </h2>
      
      {/* Responsive container that adapts to screen size */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="w-full px-2 sm:px-4 overflow-hidden">
          <Carousel items={blogCards} />
        </div>
      </div>
    </motion.div>
  );
}