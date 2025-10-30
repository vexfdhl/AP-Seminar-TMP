
"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { EducationChart } from './education-chart';


export function EnvironmentalSection() {
  const [ref, inView] = useInView({ threshold: 0.25, once: true });
  const bgImage = PlaceHolderImages.find(img => img.id === 'environmental-bg');

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
      <div className="absolute inset-0 bg-[hsl(var(--background))] opacity-55" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[hsl(var(--card))]/10" />

      <div className="relative z-10 w-full max-w-5xl mx-auto p-8 flex flex-col items-center text-center gap-6">
        <div className="animate-item" style={{ transitionDelay: '200ms' }}>
          <h2 className="font-headline text-3xl md:text-4xl title-underline pb-4">Environmental Lens</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
            <div className="flex flex-col gap-6 text-center md:text-left animate-item" style={{ transitionDelay: '400ms' }}>
              <p className="font-body text-base md:text-lg">
                The physical environment is a silent teacher. Poor housing, polluted streets, and unsafe neighborhoods impair student focus and attendance. Environmental neglect intensifies trauma proving that education cannot thrive where safety is absent (CDC, 2022).
              </p>
              <div className={cn("my-4 animate-item transition-all duration-1000 ease-out self-center md:self-start")} style={{ transitionDelay: '550ms' }}>
                  <p className="font-accent italic text-xl md:text-2xl p-4 pull-quote">
                      Education cannot thrive where safety is absent.
                  </p>
              </div>
            </div>
            <div className="relative animate-item" style={{ transitionDelay: '450ms' }}>
                <EducationChart startAnimation={inView} />
            </div>
        </div>
        
        <div className="glassmorphism-card max-w-3xl animate-item w-full" style={{ transitionDelay: '700ms' }}>
          <h3 className="font-headline text-lg mb-2 font-semibold text-primary">Statistic</h3>
          <p className="text-[1rem] md:text-[1.0625rem] leading-relaxed">
            School conditions account for nearly 20% of learning loss in low-income districts (CDC, 2022).
          </p>
        </div>
      </div>
    </section>
  );
}
