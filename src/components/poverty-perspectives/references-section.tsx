
"use client";

import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function ReferencesSection() {
  const [ref, inView] = useInView({ once: true, threshold: 0.1 });

  return (
    <div ref={ref} className={cn('w-full bg-background py-16', inView ? 'is-visible' : '')}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
                className={cn("animate-item")}
                style={{ transitionDelay: '200ms' }}
            >
                <h3 className="text-center font-body text-sm uppercase tracking-[2px] text-muted-foreground mb-4">References &amp; Documentation</h3>
                <div className="flex justify-center">
                    <Link 
                        href="https://drive.google.com/file/d/10MbmrIvPiWV9WgLRQvsGkXl-C8nPgKXl/view?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block bg-card text-card-foreground border border-emerald-300/20 shadow-md rounded-md px-6 py-3 font-body text-sm hover:bg-secondary/90 transition-all duration-300 ease-in-out hover:shadow-lg"
                    >
                        View Works Cited (PDF)
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
}
