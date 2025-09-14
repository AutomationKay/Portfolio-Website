import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { pageMotion } from '../utils/pageMotion';
import Carousel from '../components/Carousel';

const MultiProjectCard = ({ projectGroup }) => {
    const [activeProject, setActiveProject] = useState(0);
    const currentProject = projectGroup.projects[activeProject];

    const nextProject = () => {
        setActiveProject((prev) => (prev + 1) % projectGroup.projects.length);
    };

    const prevProject = () => {
        setActiveProject((prev) => (prev - 1 + projectGroup.projects.length) % projectGroup.projects.length);
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-6 sm:py-8 lg:py-12">
            <div className="bg-gray-900 rounded-lg p-4 sm:p-6 shadow-lg border border-neon-orange card-glow w-full flex flex-col gap-4">
                {/* Project Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-neon-orange">
                        {projectGroup.category}
                    </h2>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                        <span>{activeProject + 1} / {projectGroup.projects.length}</span>
                    </div>
                </div>

                {/* Project Tabs */}
                <div className="flex flex-wrap gap-2 mb-4 border-b border-gray-700 pb-3">
                    {projectGroup.projects.map((project, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveProject(index)}
                            className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                                index === activeProject 
                                    ? 'bg-neon-green text-black' 
                                    : 'bg-gray-700 text-white hover:bg-gray-600'
                            }`}
                        >
                            {project.shortTitle}
                        </button>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-between items-center mb-4">
                    <button
                        onClick={prevProject}
                        className="p-2 text-neon-blue hover:text-neon-green transition-colors flex-shrink-0"
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-neon-green text-center flex-1 px-2">
                        {currentProject.title}
                    </h3>
                    <button
                        onClick={nextProject}
                        className="p-2 text-neon-blue hover:text-neon-green transition-colors flex-shrink-0"
                    >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                </div>

                {/* Image/Video Container */}
                <div className="aspect-video w-full rounded-lg overflow-hidden bg-black">
                    {currentProject.video ? (
                        <video 
                            key={currentProject.title}
                            src={currentProject.video} 
                            controls 
                            className="w-full h-full object-cover"
                            preload="metadata"
                            onError={(e) => console.error('Video failed to load:', currentProject.video)}
                        >
                            <source src={currentProject.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img 
                            src={currentProject.image} 
                            alt={currentProject.title} 
                            className="w-full h-full object-cover"
                            onError={(e) => console.error('Image failed to load:', currentProject.image)}
                        />
                    )}
                </div>

                {/* Project Content */}
                <div className="flex flex-col flex-grow justify-between">
                    <div>
                        <p className="text-white mb-3 text-sm sm:text-base leading-relaxed">
                            {currentProject.description}
                        </p>
                        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                            {currentProject.tools.map((tool, i) => (
                                <span key={i} className="bg-neon-green text-black px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mt-4">
                        <a href={currentProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-neon-blue hover:underline text-sm sm:text-base">
                            <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-1" /> GitHub
                        </a>

                        {currentProject.liveapp && (
                            <a href={currentProject.liveapp} target="_blank" rel="noopener noreferrer" className="flex items-center text-neon-green hover:underline text-sm sm:text-base">
                                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-1" /> Live App
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectCard = ({ project }) => (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 sm:py-8 lg:py-12">
        <div className="bg-gray-900 rounded-lg p-4 sm:p-6 shadow-lg border border-neon-orange card-glow w-full flex flex-col gap-4">
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

            <div className="flex flex-col flex-grow justify-between">
                <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neon-green mb-2">{project.title}</h3>
                    <p className="text-white mb-3 text-sm sm:text-base leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.tools.map((tool, i) => (
                            <span key={i} className="bg-neon-green text-black px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mt-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-neon-blue hover:underline text-sm sm:text-base">
                        <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-1" /> GitHub
                    </a>

                    {project.liveapp && (
                        <a href={project.liveapp} target="_blank" rel="noopener noreferrer" className="flex items-center text-neon-green hover:underline text-sm sm:text-base">
                            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-1" /> Live App
                        </a>
                    )}
                </div>
            </div>
        </div>
    </div>
);

export default function Projects() {
    const reinforcementLearningGroup = {
        category: "Reinforcement Learning Projects",
        projects: [
            {
                title: 'Sonic the Hedgehog 3 RL Agent',
                shortTitle: 'Sonic3',
                description: 'RL Project intended to train an AI agent to play Sonic the Hedgehog using Deep Q-Networks.',
                github: 'https://github.com/AutomationKay/RL_Sonic_3',
                image: 'https://github.com/AutomationKay/RL_Sonic_3/blob/master/images/sonic_running.gif',
                tools: ['Python', 'Tensorflow', 'DQN', 'OpenAI Gym']
            },
            {
                title: 'Hollow Knight RL Agent',
                shortTitle: 'HK',
                description: 'Deep Q-Learning implementation along with Computer Vision for defeating bosses.',
                github: 'https://github.com/AutomationKay/RL_HK',
                image: '/images/breakout.png',
                tools: ['Python', 'PyTorch', 'CNN', 'Experience Replay']
            },
            {
                title: 'Sonic Adventure DX RL Agent',
                shortTitle: 'SonicDX',
                description: 'RL Project for training an AI Agent to complete levels as fast as possible.',
                github: 'https://github.com/AutomationKay/RL_Sonic_DX',
                image: '/images/cartpole.png',
                tools: ['Python', 'TensorFlow', 'Policy Gradient', 'Actor-Critic']
            },
            {
                title: 'Kingdom Hearts 2 RL',
                shortTitle: 'KH2',
                description: 'Training an agent using PPO, SAC and TD3 algorithms to complete boss fights.',
                github: 'https://github.com/AutomationKay/RL_KH2',
                video: '/video/lunar_lander.mp4',
                tools: ['Python', 'Stable-Baselines3', 'DDPG', 'Continuous Control']
            }
        ]
    };

    const individualProjects = [
        { 
            title: 'NBA Award Prediction', 
            description: 'Machine Learning and Deep Learning models to predict NBA season results.', 
            github: 'https://github.com/AutomationKay/General-Projects/tree/main/NBA_Pred', 
            liveapp: 'https://nba-predictions-fastapi.onrender.com/docs', 
            image: '/images/nba-mvp.png', 
            tools: ['Python', 'Pandas', 'Scikit-learn', 'FastAPI'] 
        },
        { 
            title: 'Autonomous Robot Navigation', 
            description: 'Raspberry Pi enabled robot that is able to detect and follow humans using computer vision.', 
            github: 'https://github.com/AutomationKay/General-Projects/tree/main/Autonomous_Robot_Navigation', 
            video: 'https://github.com/AutomationKay/General-Projects/raw/main/Autonomous_Robot_Navigation/video/following_robot.mp4', 
            tools: ['CNN', 'OpenCV', 'YOLO', 'Raspberry Pi'] 
        },
        { 
            title: 'Blood Pressure Tracker', 
            description: 'Full-stack web app to track and visualize blood pressure with machine learning functionality.', 
            github: 'https://github.com/AutomationKay/General-Projects/tree/main/bp_tracker', 
            liveapp: 'https://bp-tracker-app.onrender.com/',  
            image: '/images/blood-pressure.png', 
            tools: ['Django', 'PostgreSQL', 'Scikit-learn', 'Chart.js'] 
        },
        { 
            title: 'SLAM Analysis', 
            description: 'Building a map of an unknown location while simultaneously localizing within that environment.', 
            github: 'https://github.com/AutomationKay/General-Projects/tree/main/SLAM%20Analysis', 
            image: '/images/slam.png', 
            tools: ['CNN', 'Docker', 'ROS2', 'Point Clouds'] 
        }
    ];

    const projectCards = [
        <MultiProjectCard key="rl-group" projectGroup={reinforcementLearningGroup} />,
        ...individualProjects.map((project, index) => <ProjectCard key={`individual-${index}`} project={project} />)
    ];

    return (
        <motion.div {...pageMotion} className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-neon-orange font-semibold mb-8 sm:mb-10 lg:mb-12 text-center">
                Projects
            </h2>
            
            {/* Responsive container */}
            <div className="w-full max-w-7xl mx-auto">
                <div className="w-full px-2 sm:px-4 overflow-hidden">
                    <Carousel items={projectCards} />
                </div>
            </div>
        </motion.div>
    );
}