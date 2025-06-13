import React from 'react';
import './Background.css';

export default function Background() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="gear gear1"></div>
      <div className="gear gear2"></div>
      <div className="gear gear3"></div>
    </div>
  );
}
