"use client";

import { useState, useEffect } from 'react';

type TypewriterProps = {
  text: string;
  start: boolean;
  speed?: number;
  className?: string;
};

export function Typewriter({ text, start, speed = 30, className }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); // Always reset when `start` changes
    if (start) {
      let i = 0;
      const intervalId = setInterval(() => {
        setDisplayedText(text.substring(0, i + 1));
        i++;
        if (i > text.length) {
          clearInterval(intervalId);
        }
      }, speed);
      return () => clearInterval(intervalId);
    }
  }, [start, text, speed]);

  return <span className={className}>{displayedText}</span>;
}
