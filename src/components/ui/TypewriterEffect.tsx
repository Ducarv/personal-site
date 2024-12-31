import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  className?: string;
}

export function TypewriterEffect({ text, className = '' }: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <div className={className}>
      {displayText}
      <span className="animate-blink">|</span>
    </div>
  );
}