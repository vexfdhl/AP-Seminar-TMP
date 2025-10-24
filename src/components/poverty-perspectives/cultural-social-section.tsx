"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

const CommunityCircleIcon = () => (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-4 -left-4 opacity-20">
      <defs>
        <radialGradient id="amberGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{stopColor: 'rgba(255, 191, 0, 0.8)', stopOpacity:1}} />
          <stop offset="100%" style={{stopColor: 'rgba(255, 191, 0, 0)', stopOpacity:1}} />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="40" fill="url(#amberGlow)" />
    </svg>
);

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
          className="object-cover"
          data-ai-hint={bgImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-amber-600/30" />
      <div className="relative z-10 w-full max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8 animate-item" style={{ animationName: 'slide-in-left' }}>
        <div className="md:col-start-2 flex flex-col justify-center gap-6">
          <h2 className="font-headline text-3xl md:text-4xl text-right">Laila Gutierrez <br /><span className="text-xl font-body">(Cultural &amp; Social Lens)</span></h2>
          <p className="font-body text-base md:text-lg text-right">
            “Students in poverty-stricken communities often face systemic barriers in education — limited access to safe learning environments, mentorship, and cultural identity support. In both Baltimore and San Francisco, inequality shapes how students learn, socialize, and see their future (Bonta, 2021).”
          </p>
          <div className="relative bg-secondary/80 backdrop-blur-sm text-secondary-foreground p-6 rounded-lg text-right">
            <CommunityCircleIcon />
            <h3 className="font-headline text-lg mb-2">Statistic</h3>
            <p className="text-sm">
              “5% of Baltimore teens lack a high school diploma and are not enrolled in school; over 10,000 juveniles were arrested in California (2021).”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
