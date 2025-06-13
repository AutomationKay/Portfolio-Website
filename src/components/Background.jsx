import React, { useEffect, useState } from 'react';
import './Background.css';

export default function Background() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxStyle = (multiplier) => ({
    transform: `translateY(${offsetY * multiplier}px)`
  });

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="gear gear1" style={parallaxStyle(0.02)}></div>
      <div className="gear gear2" style={parallaxStyle(-0.015)}></div>
      <div className="gear gear3" style={parallaxStyle(0.03)}></div>
      <div className="gear gear4" style={parallaxStyle(-0.025)}></div>
      <div className="gear gear5" style={parallaxStyle(0.04)}></div>
      <div className="gear gear6" style={parallaxStyle(-0.03)}></div>
    </div>
  );
}
