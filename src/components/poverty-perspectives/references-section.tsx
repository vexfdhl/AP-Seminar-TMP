"use client";

import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

export function ReferencesSection() {
  const [ref, inView] = useInView({ once: true });

  return (
    <section ref={ref} className={cn('scroll-section bg-gradient-to-b from-[#F5F3E7] to-[#EAE7DC] text-card-foreground py-16', inView ? 'is-visible' : 'opacity-0')}>
      <div className="relative z-10 w-full max-w-5xl mx-auto p-8 flex flex-col items-center text-center gap-2 animate-item" style={{animationName: 'fade-up', animationDelay: '0.2s'}}>
        
        <h2 className="text-center font-headline text-3xl sm:text-4xl text-emerald-900">
          References &amp; Documentation
        </h2>
        <div className="mx-auto mt-4 mb-8 h-[2px] w-40 bg-emerald-300/60 rounded-full"></div>

        <div className="w-full mt-2 rounded-2xl border border-emerald-200 shadow-md bg-[#FFFFFF] overflow-hidden">
          <iframe
            src="https://drive.google.com/file/d/10MbmrIvPiWV9WgLRQvsGkXl-C8nPgKXl/preview"
            title="Works Cited PDF"
            aria-label="Works Cited PDF"
            className="w-full h-[72vh] border-0"
            allow="autoplay"
          ></iframe>
        </div>

        <div className="mt-4 text-center">
            <a 
                href="https://drive.google.com/file/d/10MbmrIvPiWV9WgLRQvsGkXl-C8nPgKXl/preview" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-emerald-700 hover:underline"
            >
                Open in New Tab
            </a>
        </div>
      </div>
    </section>
  );
}
