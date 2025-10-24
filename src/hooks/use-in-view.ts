
"use client";

import { useState, useEffect, useRef } from 'react';

type UseInViewOptions = {
  threshold?: number;
  once?: boolean;
};

export function useInView({ threshold = 0.2, once = false }: UseInViewOptions = {}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (once) {
          observer.unobserve(entry.target);
        }
      } else {
        if (!once) {
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
  }, [ref, threshold, once]);

  return [ref, inView] as const;
}
