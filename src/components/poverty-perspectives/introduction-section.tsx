"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

export function IntroductionSection() {
  const [ref, inView] = useInView({ once: true });
  const bgImage = PlaceHolderImages.find(img => img.id === 'intro-bg');
  const bgVideo = PlaceHolderImages.find(img => img.id === 'introduction-video-bg');

  return (
    <section ref={ref} className={cn('scroll-section text-center px-4 pt-16 sm:pt-20', inView ? 'is-visible' : 'opacity-0')}>
      {bgVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={bgImage?.imageUrl}
          src={bgVideo.imageUrl}
        />
      )}
      <div className="absolute inset-0 bg-[hsl(var(--background))] opacity-80" />
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="animate-item" style={{ animationName: 'fade-up', animationDelay: '0.5s' }}>
          <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase">
            Poverty: The Invisible Force
          </h1>
          <div className="relative isolate z-10 mt-6 sm:mt-8 mb-4 sm:mb-5">
            <p className="font-body text-base sm:text-lg tracking-wide opacity-90">
              AP Seminar Team Multimedia Presentation
            </p>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-0.5rem] h-[1.5px] w-[92%] md:w-[88%] lg:w-[72%] bg-primary/60" />
          </div>
        </div>
        
        <div
          className="bg-[#F5F3E7E0] text-card-foreground p-8 md:p-10 rounded-[20px] border border-emerald-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-sm max-w-3xl animate-item w-full"
          style={{ animationName: 'fade-up', animationDelay: '1.0s' }}
        >
          <p className="text-base md:text-lg">
            “Poverty is a condition marked by the lack of basic needs and resources, shaping not only one’s social and economic status but also affecting mental, biological, and emotional development.”
          </p>
        </div>

        <div className={cn("animate-item transition-all duration-1000 ease-out", inView ? 'opacity-100' : 'opacity-0')} style={{ animationDelay: '1.2s' }}>
            <p className="font-accent italic text-xl md:text-2xl lg:text-3xl max-w-4xl p-4 pull-quote">
              “How do poverty-related challenges shape the cultural experiences of students in Baltimore and San Francisco educationally?”
            </p>
        </div>
      </div>
    </section>
  );
}
