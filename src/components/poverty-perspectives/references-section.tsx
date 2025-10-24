"use client";

import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

export function ReferencesSection() {
  const [ref, inView] = useInView({ once: true });

  return (
    <section ref={ref} className={cn('scroll-section bg-gradient-to-b from-[#F5F3E7] to-[#EAE7DC] text-card-foreground', inView ? 'is-visible' : 'opacity-0')}>
      <div className="relative z-10 w-full max-w-5xl mx-auto p-8 flex flex-col items-center text-center gap-8 animate-item" style={{animationName: 'fade-up', animationDelay: '0.2s'}}>
        <h2 className="font-headline text-3xl md:text-4xl text-emerald-900">References &amp; Documentation</h2>
        
        <div className="w-full mt-4">
            <div className="rounded-2xl border border-emerald-200 shadow-md overflow-hidden">
                <iframe
                src="https://drive.google.com/file/d/10MbmrIvPiWV9WgLRQvsGkXl-C8nPgKXl/preview"
                title="Works Cited PDF"
                aria-label="Works Cited PDF"
                style={{width:'100%', aspectRatio:'16/10'}}
                allow="autoplay"
                ></iframe>
            </div>
            <div className="mt-6 text-center">
                <a 
                    className="inline-block rounded-xl px-5 py-3 bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                    href="https://drive.google.com/uc?export=download&amp;id=10MbmrIvPiWV9WgLRQvsGkXl-C8nPgKXl"
                >
                    Download Works Cited (PDF)
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}
