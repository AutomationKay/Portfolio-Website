import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { pageMotion } from '../utils/pageMotion';
import Carousel from '../components/Carousel';

const ProjectCard = ({ project }) => (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
       
        <div className="bg-gray-900 rounded-lg p-6 shadow-lg border border-neon-orange card-glow w-full max-w-4xl flex flex-col gap-4">
            {/* Image/Video Container */}
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-black">
                {project.video ? (
                    <video src={project.video} controls className="w-full h-full object-cover" />
                ) : (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                )}
            </div>

            {/* Text Content Container - This section will grow to fill the remaining space. */}
            <div className="flex flex-col flex-grow justify-between">
                <div>
                    <h3 className="text-xl font-bold text-neon-green mb-2">{project.title}</h3>
                    <p className="text-white mb-3 text-base">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, i) => (
                            <span key={i} className="bg-neon-green text-black px-3 py-1 rounded-full text-xs font-semibold">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

            <div className="flex justify-between items-center mt-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-neon-blue hover:underline">
                    <Github className="w-5 h-5 mr-1" /> GitHub
                </a>

                {/* This conditionally renders the button only if a `liveapp` URL exists. */}
                {project.liveapp && (
                    <a href={project.liveapp} target="_blank" rel="noopener noreferrer" className="flex items-center text-neon-green hover:underline">
                        <ExternalLink className="w-5 h-5 mr-1" /> Live App
                    </a>
                )}
            </div>
        </div>
      </div>
    </div>
);

export default function Projects() {
    const allProjects = [
        { title: 'NBA Award Prediction', description: 'Machine Learning and Deep Learning models to predict NBA season results.', github: 'https://github.com/AutomationKay/General-Projects/tree/main/NBA_Pred', liveapp: 'https://nba-predictions-fastapi.onrender.com', image: '/images/nba-mvp.png', tools: ['Python', 'Pandas', 'Scikit-learn'] },
        { title: 'Automated File Sorter', description: 'This script monitors a specified directory and automatically sorts files into subfolders by type.', github: 'https://github.com/AutomationKay/General-Projects/tree/main/File%20Automation', image: '/images/financial.png', tools: ['Python', 'Time Series', 'Pandas'] },
        { title: 'Blood Pressure Tracker', description: 'Full-stack web app to track and visualize blood pressure with machine learning functionality.', github: 'https://github.com/AutomationKay/General-Projects/tree/main/bp_tracker', liveapp: 'https://bp-tracker-app.onrender.com/',  image: '/images/blood-pressure.png', tools: ['Django', 'Postgre', 'SKlearn'] },
        { title: 'Autonomous Robot Demo', description: 'My robot driving around fully autonomously.', github: 'https://github.com/kamaal/robot-autonomy', video: '/videos/robot-demo.mp4', tools: ['ROS', 'OpenCV', 'Deep Learning'] },
        { title: 'Lung Cancer Neural Net', description: 'Neural network to classify lung cancer risk.', github: 'https://github.com/AutomationKay/General-Projects/tree/main/Lung%20Cancer%20Detection%20using%20Neural%20Network', image: '/images/lung-cancer.png', tools: ['Python', 'Tensorflow', 'Deep Learning'] },
        { title: 'SLAM Analysis', description: 'Building a map of an unknown location while simulataneously localizing within that environment', github: 'https://github.com/AutomationKay/General-Projects/tree/main/SLAM%20Analysis', image: '/images/financial.png', tools: ['CNN', 'Docker', 'ROS2'] }
    ];

    const projectCards = allProjects.map((project, index) => <ProjectCard key={index} project={project} />);

    return (
        <motion.div {...pageMotion} className="flex flex-col items-center w-full px-4">
            <h2 className="text-5xl text-neon-orange font-semibold mb-12">Projects</h2>
            <div className="flex justify-center w-full">
                <div className="ml-[256px] w-full max-w-[calc(100vw-256px)] px-4 overflow-hidden">        
                    <Carousel items={projectCards} />
                </div>
            </div>
        </motion.div>
    );
}
