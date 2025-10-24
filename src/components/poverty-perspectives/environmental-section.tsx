"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { EducationChart } from './education-chart';


export function EnvironmentalSection() {
  const [ref, inView] = useInView({ once: true });
  const bgImage = PlaceHolderImages.find(img => img.id === 'environmental-bg');

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
      <div className="relative z-10 w-full max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 md:pr-10 animate-item" style={{ animationName: 'slide-in-left', animationDelay: '0.2s' }}>
          <h2 className="font-headline text-3xl md:text-4xl title-underline pb-4">Xenia Benitez <br /><span className="text-xl font-body">(Environmental Lens)</span></h2>
          <p className="font-body text-base md:text-lg animate-item" style={{ animationName: 'fade-up', animationDelay: '0.4s' }}>
            “The physical environment is a silent teacher. Poor housing, polluted streets, and unsafe neighborhoods impair student focus and attendance. Environmental neglect intensifies trauma — proving that education cannot thrive where safety is absent (CDC, 2022).”
          </p>
          <div className="bg-[#F5F3E7E0] text-card-foreground p-6 md:p-7 rounded-[20px] border border-emerald-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-sm max-w-3xl animate-item" style={{ animationName: 'fade-up', animationDelay: '0.6s' }}>
            <h3 className="font-headline text-lg mb-2 font-semibold text-emerald-900">Statistic</h3>
            <p className="text-[1rem] md:text-[1.0625rem] leading-relaxed">
              “School conditions account for nearly 20% of learning loss in low-income districts (CDC, 2022).”
            </p>
          </div>
        </div>
        <div className="relative animate-item" style={{ animationName: 'zoom-in', animationDelay: '0.5s' }}>
            <EducationChart startAnimation={inView} />
        </div>
      </div>
    </section>
  );
}
