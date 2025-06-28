import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, FolderGit2, Rss, FileText, Send } from 'lucide-react'; // Thematic icons

export default function Sidebar() {
    const location = useLocation();
    const activeTab = location.pathname;

    const tabs = [
        { label: 'Home', path: '/', icon: <Home size={24} /> },
        { label: 'About', path: '/about', icon: <User size={24} /> },
        { label: 'Projects', path: '/projects', icon: <FolderGit2 size={24} /> },
        { label: 'Blog', path: '/blog', icon: <Rss size={24} /> },
        { label: 'Resume', path: '/resume', icon: <FileText size={24} /> },
        { label: 'Contact', path: '/contact', icon: <Send size={24} /> },
    ];

    return (
        // The sidebar is fixed to the left, full height, and has the scan-line effect.
        <aside className="fixed top-0 left-0 z-10 h-screen w-64 bg-gray-900 text-slate-300 flex flex-col p-6 border-r border-gray-700 scan-line-container">
            {/* Profile Section */}
            <div className="flex flex-col items-center mb-12">
                <img
                    src="/images/portrait.jpg" // Make sure you have a portrait image here
                    alt="Kamaal Bartlett"
                    className="w-24 h-24 rounded-full object-cover border-4 border-neon-blue mb-4"
                />
                <h1 className="text-2xl font-bold text-white glitch" data-text="SYSNAV-01">SYSNAV-01</h1>
                <p className="text-sm text-neon-blue tracking-widest uppercase font-mono flex items-center">
                    &gt; NAV SYSTEM ACTIVE<span className="ml-1 blink">_</span>
                </p>
            </div>

            {/* Navigation Links */}
            <nav>
                <ul className="flex flex-col gap-y-2">
                    {tabs.map((tab) => (
                        <li key={tab.path}>
                            <Link
                                to={tab.path}
                                className={`flex items-center gap-x-4 px-4 py-3 rounded-md text-lg font-semibold transition-colors duration-200 hover:bg-neon-blue hover:text-black
                  ${activeTab === tab.path ? 'bg-neon-blue text-black' : 'text-slate-300'}`}
                            >
                                {tab.icon}
                                <span>{tab.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
