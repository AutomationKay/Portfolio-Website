import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, FolderGit2, Rss, FileText, Send } from 'lucide-react';

export default function Sidebar() {
    const location = useLocation();
    const activeTab = location.pathname;

    const tabs = [
        { label: 'Home', path: '/', icon: <Home size={20} /> },
        { label: 'About', path: '/about', icon: <User size={20} /> },
        { label: 'Projects', path: '/projects', icon: <FolderGit2 size={20} /> },
        { label: 'Blog', path: '/blog', icon: <Rss size={20} /> },
        { label: 'Resume', path: '/resume', icon: <FileText size={20} /> },
        { label: 'Contact', path: '/contact', icon: <Send size={20} /> },
    ];

    return (
        <aside className="fixed top-0 left-0 z-20 h-screen w-64 bg-gray-900 text-slate-300 flex flex-col p-6 border-r border-gray-700 scan-line-container sidebar-desktop">
            {/* Profile Section */}
            <div className="flex flex-col items-center mb-12">
                <h1 className="text-2xl font-bold text-white glitch break-words text-center leading-tight" data-text="SYSNAV-01">
                    SYSNAV-01
                </h1>
                <p className="text-sm text-neon-blue tracking-widest uppercase font-mono flex items-center text-center break-words mt-2">
                    &gt; NAV SYSTEM ACTIVE<span className="ml-1 blink">_</span>
                </p>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1">
                <ul className="flex flex-col gap-y-3">
                    {tabs.map((tab) => (
                        <li key={tab.path}>
                            <Link
                                to={tab.path}
                                className={`flex items-center gap-x-4 px-4 py-3 rounded-md text-lg font-semibold transition-all duration-300 hover:bg-neon-blue hover:text-black transform hover:scale-105 break-words
                                ${activeTab === tab.path 
                                    ? 'bg-neon-blue text-black shadow-lg scale-105' 
                                    : 'text-slate-300 hover:shadow-md'
                                }`}
                            >
                                <span className="flex-shrink-0">{tab.icon}</span>
                                <span className="truncate">{tab.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Footer info */}
            <div className="mt-auto pt-6 border-t border-gray-700">
                <p className="text-xs text-gray-400 text-center break-words">
                    Desktop Navigation
                </p>
            </div>
        </aside>
    );
}