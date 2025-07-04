import React from 'react';

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="w-16 h-16 border-4 border-neon-blue border-dashed rounded-full animate-spin"></div>
    </div>
  );
}
