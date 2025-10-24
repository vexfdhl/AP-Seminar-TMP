
"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { Typewriter } from './typewriter';

export function ArtisticPhilosophicalSection() {
  const [ref, inView] = useInView({ threshold: 0.25, once: true });
  const bgImage = PlaceHolderImages.find(img => img.id === 'artistic-bg');

  return (
    <section ref={ref} className={cn('scroll-section', inView ? 'is-visible' : '')}>
      {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt={bgImage.description}
          fill
          className={cn("object-cover parallax-bg transition-transform duration-1000 ease-out", inView ? 'scale-105' : 'scale-100')}
          data-ai-hint={bgImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-[hsl(var(--background))] opacity-75" />
      <div className="absolute inset-0 vignette-gold" />

      <div className="relative z-10 w-full max-w-4xl mx-auto p-8 flex flex-col items-center text-center gap-6">
        <div className="animate-item" style={{ transitionDelay: '200ms' }}>
          <h2 className="font-headline text-3xl md:text-4xl title-underline pb-4">Vincent Arreguin <br /><span className="text-xl font-body">(Artistic &amp; Philosophical Lens)</span></h2>
        </div>
        
        <p className="font-body text-base md:text-lg max-w-[65ch] animate-item" style={{ transitionDelay: '400ms' }}>
          “Art gives visibility to struggle, and philosophy interprets it. In education, creativity turns deprivation into empathy. Schools that cut art programs deprive students of moral imagination, limiting how they interpret justice and humanity (Hevia, 2025). Dickens’ *Oliver Twist* and Dorothea Lange’s *Migrant Mother* both show how storytelling transforms poverty into moral awareness.”
        </p>

        <div className={cn("my-4 animate-item transition-all duration-1000 ease-out")} style={{ transitionDelay: '550ms' }}>
            <p className="font-accent italic text-xl md:text-2xl p-4 pull-quote">
                <Typewriter text="“Art makes deprivations vivid enough to provoke reform.”" start={inView} speed={25} delay={700} />
                 — (Arreguin, 2025)
            </p>
        </div>
        
        <div className="glassmorphism-card max-w-3xl animate-item w-full" style={{ transitionDelay: '700ms' }}>
          <h3 className="font-headline text-lg mb-2 font-semibold">Statistic</h3>
          <p className="text-[1rem] md:text-[1.0625rem] leading-relaxed">
            “Baltimore loses 1.5 million instructional hours yearly due to failing infrastructure; artistic education helps re-engage affected youth (City Journal, 2025).”
          </p>
        </div>
      </div>
      <style jsx>{`
        .vignette-gold {
          box-shadow: inset 0 0 10rem 5rem rgba(253, 224, 71, 0.1);
          transition: box-shadow 0.65s ease-out;
        }
        .is-visible .vignette-gold {
          box-shadow: inset 0 0 12rem 6rem rgba(253, 224, 71, 0.15);
        }
      `}</style>
    </section>
  );
}
