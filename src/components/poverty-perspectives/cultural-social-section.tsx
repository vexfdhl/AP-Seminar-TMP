"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

export function CulturalSocialSection() {
  const [ref, inView] = useInView();
  const bgImage = PlaceHolderImages.find(img => img.id === 'cultural-bg');

  return (
    <section ref={ref} className={cn('scroll-section', inView ? 'is-visible' : 'opacity-0')}>
      {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt={bgImage.description}
          fill
          className={cn("object-cover parallax-bg", inView ? 'scale-110' : 'scale-100')}
          data-ai-hint={bgImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-background/60" />
      <div className="relative z-10 w-full max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-start-2 flex flex-col justify-center gap-6 animate-item" style={{ animationName: 'slide-in-right', animationDelay: '0.2s' }}>
          <h2 className="font-headline text-3xl md:text-4xl text-right title-underline pb-4">Laila Gutierrez <br /><span className="text-xl font-body">(Cultural &amp; Social Lens)</span></h2>
          <p className="font-body text-base md:text-lg text-right animate-item" style={{ animationName: 'fade-up', animationDelay: '0.4s' }}>
            “Students in poverty-stricken communities often face systemic barriers in education — limited access to safe learning environments, mentorship, and cultural identity support. In both Baltimore and San Francisco, inequality shapes how students learn, socialize, and see their future (Bonta, 2021).”
          </p>
          <div className="relative bg-secondary/20 backdrop-blur-md text-card-foreground p-6 rounded-lg text-right border border-primary/50 shadow-lg animate-item" style={{ animationName: 'fade-up', animationDelay: '0.6s' }}>
            <h3 className="font-headline text-lg mb-2 text-primary">Statistic</h3>
            <p className="text-sm">
              “5% of Baltimore teens lack a high school diploma and are not enrolled in school; over 10,000 juveniles were arrested in California (2021).”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
