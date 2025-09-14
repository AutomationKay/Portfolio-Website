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
                    <video 
                        src={project.video} 
                        controls 
                        className="w-full h-full object-cover"
                        preload="metadata"
                        onError={(e) => console.error('Video failed to load:', project.video)}
                    >
                        <source src={project.video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                        onError={(e) => console.error('Image failed to load:', project.image)}
                    />
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
        { title: 'NBA Award Prediction', description: 'Machine Learning and Deep Learning models to predict NBA season results.', github: 'https://github.com/AutomationKay/General-Projects/tree/main/NBA_Pred', liveapp: 'https://nba-predictions-fastapi.onrender.com/docs', image: 'public/images/nba-mvp.png', tools: ['Python', '|', 'Pandas', '|', 'Scikit-learn'] },
        { title: 'Autonomous Robot Navigation', description: 'Raspberry Pi enabled robot that is able to detect and follow humans', github: 'https://github.com/AutomationKay/General-Projects/tree/main/Autonomous_Robot_Navigation', video: 'public/video/following_robot.mp4', tools: ['CNN', '|', 'OpenCV', '|', 'YOLO'] },
        { title: 'Reinforcement Learning using Sonic', description: 'RL Project intended to train an AI agent to play Sonic the Hedgehog', github: 'https://github.com/AutomationKay/General-Projects/tree/main/Sonic_RL_Project', image: 'public/images/sonic_log.gif', tools: ['Python', '|', 'Tensorflow', '|', 'Deep Learning'] },
        { title: 'Automated File Sorter', description: 'This script monitors a specified directory and automatically sorts files into subfolders by type.', github: 'https://github.com/AutomationKay/General-Projects/tree/main/File%20Automation', image: 'public/images/financial.png', tools: ['Python','|', 'Time Series','|', 'Pandas'] },
        { title: 'Blood Pressure Tracker', description: 'Full-stack web app to track and visualize blood pressure with machine learning functionality.', github: 'https://github.com/AutomationKay/General-Projects/tree/main/bp_tracker', liveapp: 'https://bp-tracker-app.onrender.com/',  image: 'public/images/blood-pressure.png', tools: ['Django', '|', 'Postgre', '|', 'SKlearn'] },
        { title: 'SLAM Analysis', description: 'Building a map of an unknown location while simulataneously localizing within that environment', github: 'https://github.com/AutomationKay/General-Projects/tree/main/SLAM%20Analysis', image: 'public/images/financial.png', tools: ['CNN', '|', 'Docker', '|', 'ROS2'] }
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
