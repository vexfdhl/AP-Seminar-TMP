
"use client";

import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamMembers = [
  {
    name: "Mr. Efrem Zealey",
    role: "AP Seminar Instructor",
    focus: "Project guidance, research mentorship, and evaluation.",
    imageId: "advisor-bg",
  },
  {
    name: "Pravin Yadav",
    role: "Scientific Lens",
    focus: "How chronic poverty alters DNA and neural development.",
    imageId: "scientific-member-bg",
  },
  {
    name: "Vincent Arreguin",
    role: "Artistic & Philosophical Lens",
    focus: "Art transforms deprivation into moral awareness.",
    imageId: "artistic-member-bg",
  },
  {
    name: "Laila Gutierrez",
    role: "Cultural & Social Lens",
    focus: "How inequities in housing and mentorship affect learning.",
    imageId: "cultural-member-bg",
  },
  {
    name: "Mireya Gonzalez",
    role: "Futuristic Lens",
    focus: "Technology as a bridge toward equitable education.",
    imageId: "futuristic-member-bg",
  },
  {
    name: "Xenia Benitez",
    role: "Environmental Lens",
    focus: "Safe environments reduce stress and improve focus.",
    imageId: "environmental-member-bg",
  },
];

export function TeamSection() {
  const [ref, inView] = useInView({ once: true, threshold: 0.1 });

  return (
    <section ref={ref} className={cn('bg-background py-16 px-4 sm:py-24', inView ? 'is-visible' : '')}>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center gap-12 lg:gap-16">
        <div className="animate-item" style={{ transitionDelay: '200ms' }}>
          <h2 className="font-headline text-3xl md:text-4xl title-underline pb-4">Team &amp; Advisor</h2>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-x-12 lg:gap-y-12">
          {teamMembers.map((member, index) => {
            const image = PlaceHolderImages.find(img => img.id === member.imageId);
            return (
              <div 
                key={member.name}
                className={cn("animate-item")}
                style={{ 
                  transitionDelay: `${300 + index * 120}ms`,
                  transform: index % 2 === 0 ? 'translateX(-18px)' : 'translateX(18px)',
                  opacity: 0,
                 }}
              >
                <div className="group flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full text-left bg-muted/10 p-4 rounded-lg border border-border transition-shadow hover:shadow-lg">
                  <div className="relative w-full md:w-2/5 aspect-video md:aspect-[4/3] rounded-lg overflow-hidden shadow-md flex-shrink-0">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={`Portrait/scene for ${member.name} — ${member.role}`}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-background/60" />
                  </div>
                  <div className="w-full md:w-3/5 flex flex-col justify-center">
                    <h3 className="font-headline text-2xl md:text-3xl font-semibold text-foreground">{member.name}</h3>
                    <p className="font-body text-xs uppercase tracking-[2px] text-primary mt-1 mb-3">{member.role}</p>
                    <p className="font-body text-base text-muted-foreground max-w-[65ch]">{member.focus}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
