"use client";

import { useState, useEffect, useRef } from 'react';

type UseInViewOptions = {
  threshold?: number;
  triggerOnce?: boolean;
};

export function useInView({ threshold = 0.2, triggerOnce = true }: UseInViewOptions = {}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (triggerOnce) {
          observer.unobserve(entry.target);
        }
      } else {
        if (!triggerOnce) {
            setInView(false);
        }
      }
    }, { threshold });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, threshold, triggerOnce]);

  return [ref, inView] as const;
}
