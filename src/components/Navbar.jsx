import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Icons for the menu button

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navRef = useRef(null); // Ref to detect clicks outside the dropdown

    const tabs = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Projects', path: '/projects' },
        { label: 'Blog', path: '/blog' },
        { label: 'Resume', path: '/resume' },
        { label: 'Contact', path: '/contact' },
    ];

    // This effect adds an event listener to close the dropdown when clicking outside of it.
    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navRef]);

    const currentPageLabel = tabs.find(tab => tab.path === location.pathname)?.label || 'Navigation';

    return (
        // The main header container. 
        <header ref={navRef} className="fixed top-0 w-full z-50 bg-black bg-opacity-90 border-b border-gray-700">
            <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center py-3">
                <div className="relative">
                    {/* This is the main button that toggles the dropdown */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-2 px-4 py-2 border-2 border-neon-blue text-neon-blue rounded-md hover:bg-neon-blue hover:text-black transition-colors duration-300 glitch"
                    >
                        <span className="font-semibold">{currentPageLabel}</span>
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>

                    {/* This uses AnimatePresence to smoothly fade the dropdown in and out */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.ul
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute right-0 mt-2 w-64 bg-gray-900 border border-neon-blue rounded-md shadow-lg overflow-hidden scan-line-container"
                            >
                                {tabs.map((tab) => (
                                    <li key={tab.path}>
                                        <Link
                                            to={tab.path}
                                            onClick={() => setIsOpen(false)} // Close dropdown on link click
                                            className={`block w-full text-left px-5 py-4 text-xl font-semibold transition-colors duration-300 hover:bg-neon-blue hover:text-black ${location.pathname === tab.path ? 'text-neon-orange' : 'text-white'}`}
                                        >
                                            {tab.label}
                                        </Link>
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </header>
    );
}
