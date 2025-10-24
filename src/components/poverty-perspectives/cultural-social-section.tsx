"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

export function CulturalSocialSection() {
  const [ref, inView] = useInView({ once: true });
  const bgImage = PlaceHolderImages.find(img => img.id === 'cultural-bg');

  return (
    <section ref={ref} className={cn('scroll-section', inView ? 'is-visible' : 'opacity-0')}>
      {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt={bgImage.description}
          fill
          className={cn("object-cover parallax-bg transition-transform duration-1000 ease-out", inView ? 'scale-105' : 'scale-100')}
          data-ai-hint={bgImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-[hsl(var(--background))] opacity-80" />
      <div className="absolute inset-0 bg-amber-500/10" style={{ boxShadow: 'inset 0 0 5rem 3rem hsl(var(--background))' }}/>

      <div className="relative z-10 w-full max-w-4xl mx-auto p-8 flex flex-col items-center text-center gap-6">
        <div className="animate-item" style={{ animationName: 'slide-in-left', animationDelay: '0.2s' }}>
          <h2 className="font-headline text-3xl md:text-4xl title-underline pb-4">Laila Gutierrez <br /><span className="text-xl font-body">(Cultural &amp; Social Lens)</span></h2>
        </div>

        <p className="font-body text-base md:text-lg max-w-[65ch] animate-item" style={{ animationName: 'slide-in-left', animationDelay: '0.4s' }}>
          “Students in poverty-stricken communities often face systemic barriers in education — limited access to safe learning environments, mentorship, and cultural identity support. In both Baltimore and San Francisco, inequality shapes how students learn, socialize, and see their future (Bonta, 2021).”
        </p>

        <div className={cn("my-4 animate-item transition-all duration-1000 ease-out", inView ? 'opacity-100' : 'opacity-0')} style={{ animationDelay: '0.6s' }}>
            <p className="font-accent italic text-xl md:text-2xl p-4 pull-quote">
                “Inequality shapes how students learn, socialize, and see their future.”
            </p>
        </div>

        <div className="bg-[#F5F3E7E0] text-card-foreground p-6 md:p-7 rounded-[20px] border border-emerald-300/20 shadow-md backdrop-blur-md max-w-3xl animate-item w-full" style={{ animationName: 'fade-up', animationDelay: '0.8s' }}>
          <h3 className="font-headline text-lg mb-2 font-semibold text-emerald-900">Statistic</h3>
          <p className="text-[1rem] md:text-[1.0625rem] leading-relaxed">
            “5% of Baltimore teens lack a high school diploma and are not enrolled in school; over 10,000 juveniles were arrested in California (2021).”
          </p>
        </div>
      </div>
    </section>
  );
}
