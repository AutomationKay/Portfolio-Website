import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center py-6 border-t border-gray-700 text-white text-sm mt-10">
      <p>© {new Date().getFullYear()} Kamaal Bartlett. All rights reserved.</p>
      <p className="mt-2 text-gray-400">Built with React | Vite | TailwindCSS | Deployed on Vercel </p>
    </footer>
  );
}
