import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { pageMotion } from '../utils/pageMotion';
import Carousel from '../components/Carousel';

const ProjectCard = ({ project }) => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <div className="bg-gray-900 rounded-lg p-6 shadow-lg border border-neon-orange card-glow text-left w-full max-w-xl">
      <div className="mb-4 rounded overflow-hidden">
        {project.video ? (
          <video src={project.video} controls className="w-full rounded-md" />
        ) : (
          <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-md" />
        )}
      </div>
      <h3 className="text-2xl font-bold text-neon-green mb-4">{project.title}</h3>
      <p className="text-white mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tools.map((tool, i) => (
          <span key={i} className="bg-neon-green text-black px-2 py-1 rounded-full text-sm">{tool}</span>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-neon-blue hover:underline">
          <Github className="w-5 h-5 mr-1" /> GitHub
        </a>
      </div>
    </div>
  </div>
);

export default function Projects() {
  const allProjects = [
    { title: 'NBA MVP Prediction', description: 'Logistic regression model predicting MVP likelihood.', github: 'https://github.com/kamaal/nba-mvp', image: '/images/nba-mvp.png', tools: ['Python', 'Pandas', 'Scikit-learn'] },
    { title: 'Blood Pressure Tracker', description: 'Full-stack web app to track and visualize blood pressure.', github: 'https://github.com/kamaal/blood-pressure-tracker', image: '/images/blood-pressure.png', tools: ['React', 'Node.js', 'MongoDB'] },
    { title: 'Autonomous Robot Demo', description: 'My robot driving around fully autonomously.', github: 'https://github.com/kamaal/robot-autonomy', video: '/videos/robot-demo.mp4', tools: ['ROS', 'OpenCV', 'Deep Learning'] },
    { title: 'Lung Cancer Neural Net', description: 'Neural network to classify lung cancer risk.', github: 'https://github.com/kamaal/lung-cancer-nn', image: '/images/lung-cancer.png', tools: ['Python', 'Tensorflow', 'Deep Learning'] },
    { title: 'Financial Forecasting Tool', description: 'Revenue forecasting model using historical data.', github: 'https://github.com/kamaal/financial-forecasting', image: '/images/financial.png', tools: ['Python', 'Time Series', 'Pandas'] }
  ];

  const projectCards = allProjects.map((project, index) => <ProjectCard key={index} project={project} />);

  return (
    <motion.div {...pageMotion} className="flex flex-col items-center px-4 w-full">
      <h2 className="text-5xl text-neon-orange font-semibold mb-8">Projects</h2>
      <Carousel items={projectCards} />
    </motion.div>
  );
}
