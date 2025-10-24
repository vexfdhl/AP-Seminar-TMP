"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

export function ArtisticPhilosophicalSection() {
  const [ref, inView] = useInView();
  const bgImage = PlaceHolderImages.find(img => img.id === 'artistic-bg');

  return (
    <section ref={ref} className={cn('scroll-section', inView ? 'is-visible' : 'opacity-0')}>
      {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt={bgImage.description}
          fill
          className="object-cover"
          data-ai-hint={bgImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative z-10 w-full max-w-4xl mx-auto p-8 flex flex-col items-center text-center gap-6">
        <div className="animate-item" style={{ animationName: 'fade-up', animationDelay: '0.2s' }}>
          <h2 className="font-headline text-3xl md:text-4xl">Vincent Arreguin <br /><span className="text-xl font-body">(Artistic &amp; Philosophical Lens)</span></h2>
          <div className="w-24 h-1 bg-[#C7A55D] my-4 mx-auto"></div>
        </div>
        <p className="font-body text-base md:text-lg animate-item" style={{ animationName: 'fade-up', animationDelay: '0.4s' }}>
          “Art gives visibility to struggle, and philosophy interprets it. In education, creativity turns deprivation into empathy. Schools that cut art programs deprive students of moral imagination, limiting how they interpret justice and humanity (Hevia, 2025). Dickens’ *Oliver Twist* and Dorothea Lange’s *Migrant Mother* both show how storytelling transforms poverty into moral awareness.”
        </p>

        <div className="my-4 animate-item" style={{ animationName: 'zoom-in', animationDelay: '0.6s' }}>
            <p className="font-accent italic text-xl md:text-2xl p-4 border-l-4 border-[#C7A55D]">
                “Art makes deprivations vivid enough to provoke reform.” — (Arreguin, 2025)
            </p>
        </div>
        
        <div className="bg-secondary/80 backdrop-blur-sm text-secondary-foreground p-6 rounded-lg animate-item" style={{ animationName: 'fade-up', animationDelay: '0.8s' }}>
          <h3 className="font-headline text-lg mb-2">Statistic</h3>
          <p className="text-sm">
            “Baltimore loses 1.5 million instructional hours yearly due to failing infrastructure; artistic education helps re-engage affected youth (City Journal, 2025).”
          </p>
        </div>
      </div>
    </section>
  );
}
