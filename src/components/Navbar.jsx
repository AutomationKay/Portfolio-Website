import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const activeTab = location.pathname;

  const tabs = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Blog', path: '/blog' },
    { label: 'Resume', path: '/resume' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-black bg-opacity-90 border-b border-gray-700">
      <nav className="max-w-7xl mx-auto px-4 flex justify-center items-center py-4">
        <ul className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 md:gap-x-10 text-lg font-semibold">
          {tabs.map((tab) => (
            <li key={tab.path}>
              <Link
                to={tab.path}
                className={`block py-1 px-2 hover:text-neon-green ${activeTab === tab.path ? 'text-neon-orange' : ''}`}
              >
                {tab.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
