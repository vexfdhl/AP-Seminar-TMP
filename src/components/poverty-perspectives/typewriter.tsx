"use client";

import { useState, useEffect } from 'react';

type TypewriterProps = {
  text: string;
  start: boolean;
  speed?: number;
  className?: string;
  delay?: number;
};

export function Typewriter({ text, start, speed = 30, className, delay = 0 }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); // Reset on each trigger
    if (start) {
      const startTimeout = setTimeout(() => {
        let i = 0;
        const intervalId = setInterval(() => {
          setDisplayedText(text.substring(0, i + 1));
          i++;
          if (i > text.length) {
            clearInterval(intervalId);
          }
        }, speed);
        return () => clearInterval(intervalId);
      }, delay);
      
      return () => clearTimeout(startTimeout);
    }
  }, [start, text, speed, delay]);

  return <span className={className}>{displayedText}</span>;
}
