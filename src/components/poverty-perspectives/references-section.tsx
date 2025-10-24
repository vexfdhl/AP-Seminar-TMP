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

        {/* Frame: ivory background + subtle border/shadow (on brand) */}
        <div className="relative w-full mt-2 rounded-2xl border border-emerald-200 shadow-md bg-[#FFFFFF] overflow-hidden">
          {/* Toolbar */}
          <div className="absolute top-3 right-3 z-20">
            <a href="https://drive.google.com/file/d/10MbmrIvPiWV9WgLRQvsGkXl-C8nPgKXl/preview"
               target="_blank" rel="noopener noreferrer"
               className="px-3 py-2 rounded-lg border border-emerald-300 text-emerald-900 bg-white/85 hover:bg-white text-sm">
              Open in New Tab
            </a>
          </div>

          {/* Use native PDF renderer to avoid black gutters */}
          {/* Primary: <embed> shows clean white canvas across browsers */}
          <embed
            src="https://drive.google.com/uc?export=download&id=10MbmrIvPiWV9WgLRQvsGkXl-C8nPgKXl"
            type="application/pdf"
            title="Works Cited PDF"
            aria-label="Works Cited PDF"
            style={{width:'100%',height:'72vh',background:'#FFFFFF',border:0,display:'block'}}
          />

          {/* Fallback message (no download link) */}
          <div className="p-4 text-center text-emerald-900/80 text-sm">
            If the preview doesn’t load, click <a className="underline text-emerald-700"
            href="https://drive.google.com/file/d/10MbmrIvPiWV9WgLRQvsGkXl-C8nPgKXl/preview" target="_blank" rel="noopener">Open in New Tab</a>.
          </div>
        </div>

      </div>
    </section>
  );
}
