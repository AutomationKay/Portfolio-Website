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
        <aside className="fixed top-0 left-0 z-20 h-screen w-64 bg-gray-900 text-slate-300 flex flex-col p-4 lg:p-6 border-r border-gray-700 scan-line-container">
            {/* Profile Section */}
            <div className="flex flex-col items-center mb-8 lg:mb-12">
                <h1 className="text-xl lg:text-2xl font-bold text-white glitch break-words text-center" data-text="SYSNAV-01">
                    SYSNAV-01
                </h1>
                <p className="text-xs lg:text-sm text-neon-blue tracking-widest uppercase font-mono flex items-center text-center break-words">
                    &gt; NAV SYSTEM ACTIVE<span className="ml-1 blink">_</span>
                </p>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1">
                <ul className="flex flex-col gap-y-2">
                    {tabs.map((tab) => (
                        <li key={tab.path}>
                            <Link
                                to={tab.path}
                                className={`flex items-center gap-x-3 px-3 lg:px-4 py-2 lg:py-3 rounded-md text-base lg:text-lg font-semibold transition-colors duration-200 hover:bg-neon-blue hover:text-black break-words
                                ${activeTab === tab.path ? 'bg-neon-blue text-black' : 'text-slate-300'}`}
                            >
                                <span className="flex-shrink-0">{tab.icon}</span>
                                <span className="truncate">{tab.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}