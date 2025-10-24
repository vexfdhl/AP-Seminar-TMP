"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

export function IntroductionSection() {
  const [ref, inView] = useInView({ once: true });
  const bgImage = PlaceHolderImages.find(img => img.id === 'intro-bg');

  return (
    <section ref={ref} className={cn('scroll-section text-center px-4', inView ? 'is-visible' : 'opacity-0')}>
      {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt={bgImage.description}
          fill
          className={cn("object-cover parallax-bg transition-transform duration-[2000ms] ease-out", inView ? 'scale-100' : 'scale-105')}
          data-ai-hint={bgImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-[hsl(var(--background))] opacity-80" />
      <div className="relative z-10 flex flex-col items-center gap-8">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-[1.5px] uppercase animate-item title-underline pb-4" style={{ animationName: 'fade-up', animationDelay: '0.5s' }}>
          Poverty: The Invisible Force
        </h1>
        <p className="font-body text-lg md:text-xl lg:text-2xl tracking-[2px] animate-item" style={{ animationName: 'fade-up', animationDelay: '0.8s' }}>
          An AP Seminar Interdisciplinary Presentation
        </p>
        <div
          className="bg-secondary/20 backdrop-blur-md text-card-foreground p-8 md:p-10 rounded-2xl max-w-3xl border border-primary/30 animate-item"
          style={{ animationName: 'fade-up', animationDelay: '1.0s' }}
        >
          <p className="text-base md:text-lg">
            “Poverty is a condition marked by the lack of basic needs and resources, shaping not only one’s social and economic status but also affecting mental, biological, and emotional development.”
          </p>
        </div>
        <p className="font-accent italic text-xl md:text-2xl lg:text-3xl max-w-4xl animate-item" style={{ animationName: 'fade-up', animationDelay: '1.2s' }}>
          “How do poverty-related challenges shape the cultural experiences of students in Baltimore and San Francisco educationally?”
        </p>
      </div>
    </section>
  );
}
