import React, { useState, useEffect } from 'react';

// The list of messages to display during the boot sequence.
const bootMessages = [
  'Initializing core systems...',
  'Powering up locomotion actuators... [OK]',
  'Calibrating optical sensors... [OK]',
  'Loading neural network v2.7.1...',
  'Establishing cognitive matrix link... [OK]',
  'All systems nominal. Welcome, Operator.',
];

export default function BootSequence({ onComplete }) {
  const [visibleMessages, setVisibleMessages] = useState([]);

  useEffect(() => {
    // A function to add messages one by one with a delay.
    const addMessage = (index) => {
      if (index < bootMessages.length) {
        setTimeout(() => {
          setVisibleMessages(prev => [...prev, bootMessages[index]]);
          addMessage(index + 1);
        }, 400 + Math.random() * 300); // Add a slight random delay
      } else {
        // Once all messages are shown, wait a moment then call the onComplete callback.
        setTimeout(onComplete, 1200);
      }
    };

    addMessage(0);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
      <div className="w-full max-w-3xl p-4 font-mono text-neon-green">
        {visibleMessages.map((msg, index) => (
          <p key={index} className="text-lg md:text-xl whitespace-pre-wrap">
            &gt; {msg}
          </p>
        ))}
        {visibleMessages.length < bootMessages.length && (
          <div className="w-4 h-6 bg-neon-green animate-ping mt-2"></div>
        )}
      </div>
    </div>
  );
}
