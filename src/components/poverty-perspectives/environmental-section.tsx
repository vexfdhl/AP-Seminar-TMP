"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

const HousingIcon = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 10 L10 40 L10 90 L40 90 L40 60 L60 60 L60 90 L90 90 L90 40 Z" stroke="hsl(var(--foreground))" strokeWidth="2" fill="none" />
    </svg>
);

const WaveAnimation = () => (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
         <style jsx>{`
            @keyframes wave {
                0% { transform: scale(0); opacity: 0.7; }
                100% { transform: scale(1.5); opacity: 0; }
            }
            .wave-circle {
                position: absolute;
                border: 2px solid hsl(var(--accent));
                border-radius: 50%;
                animation: wave 4s ease-out infinite;
            }
        `}</style>
        <div className="wave-circle" style={{ width: '20rem', height: '20rem' }}></div>
        <div className="wave-circle" style={{ width: '20rem', height: '20rem', animationDelay: '1s' }}></div>
        <div className="wave-circle" style={{ width: '20rem', height: '20rem', animationDelay: '2s' }}></div>
    </div>
);


export function EnvironmentalSection() {
  const [ref, inView] = useInView();
  const bgImage = PlaceHolderImages.find(img => img.id === 'environmental-bg');

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
      <div className="absolute inset-0 bg-green-900/50" />
      <WaveAnimation />
      <div className="relative z-10 w-full max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-item" style={{ animationName: 'fade-up' }}>
        <div className="flex flex-col gap-6 md:pr-10">
          <h2 className="font-headline text-3xl md:text-4xl">Xenia Benitez <br /><span className="text-xl font-body">(Environmental Lens)</span></h2>
          <p className="font-body text-base md:text-lg">
            “The physical environment is a silent teacher. Poor housing, polluted streets, and unsafe neighborhoods impair student focus and attendance. Environmental neglect intensifies trauma — proving that education cannot thrive where safety is absent (CDC, 2022).”
          </p>
          <div className="bg-secondary/80 backdrop-blur-sm text-secondary-foreground p-6 rounded-lg">
            <h3 className="font-headline text-lg mb-2">Statistic</h3>
            <p className="text-sm">
              “School conditions account for nearly 20% of learning loss in low-income districts (CDC, 2022).”
            </p>
          </div>
        </div>
        <div className="relative h-64 w-64 opacity-20 hidden md:block">
            <HousingIcon />
        </div>
      </div>
    </section>
  );
}
