"use client";

import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const teamMembers = [
  {
    name: "Pravin Yadav",
    role: "Scientific Lens",
    focus: "How chronic poverty alters DNA and neural development.",
    initials: "PY"
  },
  {
    name: "Vincent Arreguin",
    role: "Artistic & Philosophical Lens",
    focus: "Art transforms deprivation into moral awareness.",
    initials: "VA"
  },
  {
    name: "Laila Gutierrez",
    role: "Cultural & Social Lens",
    focus: "How inequities in housing and mentorship affect learning.",
    initials: "LG"
  },
  {
    name: "Mireya Gonzalez",
    role: "Futuristic Lens",
    focus: "Technology as a bridge toward equitable education.",
    initials: "MG"
  },
  {
    name: "Xenia Benitez",
    role: "Environmental Lens",
    focus: "Safe environments reduce stress and improve focus.",
    initials: "XB"
  },
  {
    name: "Mr. Efrem Zealey",
    role: "AP Seminar Instructor",
    focus: "Project guidance, research mentorship, and evaluation.",
    initials: "EZ"
  }
];

export function TeamSection() {
  const [ref, inView] = useInView({ once: true });

  return (
    <section ref={ref} className={cn('scroll-section bg-background py-16 px-4', inView ? 'is-visible' : 'opacity-0')}>
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center gap-8">
        <div className="animate-item" style={{ animationName: 'fade-up', animationDelay: '0.2s' }}>
          <h2 className="font-headline text-3xl md:text-4xl title-underline pb-4">Team &amp; Advisor</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-4">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className={cn("bg-[#F5F3E7]/5 text-foreground p-6 rounded-2xl border border-emerald-300/20 shadow-md backdrop-blur-md flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-105 animate-item", inView ? 'is-visible' : 'opacity-0')}
              style={{ animationName: 'fade-up', animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center text-4xl font-headline text-background">
                {member.initials}
              </div>
              <h3 className="font-headline text-xl font-semibold">{member.name}</h3>
              <p className="font-body text-sm uppercase tracking-wider text-primary">{member.role}</p>
              <p className="font-body text-sm text-muted-foreground">{member.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
