"use client";

import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import React from 'react';

const solutions = [
    { title: "Community Mentorship & Housing Equity (Laila)", description: "Connects students with community mentors to stabilize educational support." },
    { title: "Art & Emotional Resilience (Vincent)", description: "Uses creative expression to heal and empower through empathy." },
    { title: "Tech-Equity & Future Readiness (Mireya)", description: "Promotes digital access and career readiness programs for underfunded schools." },
    { title: "Environmental Safety in Schools (Xenia)", description: "Advocates for cleaner, safer learning spaces to reduce stress and illness." },
    { title: "Neuroscience-Informed Policy (Pravin)", description: "Aligns policy with brain science to mitigate cognitive effects of poverty." },
];

const SolutionConnections = ({ inView }: { inView: boolean }) => (
  <svg className={cn("absolute inset-0 w-full h-full opacity-25 -z-10 transition-opacity duration-1000", inView ? 'opacity-25' : 'opacity-0')} style={{ animationDelay: '1s' }}>
      <line x1="30%" y1="25%" x2="50%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="1" className={cn(inView ? "animate-draw" : "")} strokeDasharray="1000" strokeDashoffset="1000" />
      <line x1="70%" y1="25%" x2="50%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="1" className={cn(inView ? "animate-draw" : "")} strokeDasharray="1000" strokeDashoffset="1000" />
      <line x1="50%" y1="25%" x2="50%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="1" className={cn(inView ? "animate-draw" : "")} strokeDasharray="1000" strokeDashoffset="1000" />
      <line x1="38%" y1="75%" x2="50%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="1" className={cn(inView ? "animate-draw" : "")} strokeDasharray="1000" strokeDashoffset="1000" />
      <line x1="62%" y1="75%" x2="50%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="1" className={cn(inView ? "animate-draw" : "")} strokeDasharray="1000" strokeDashoffset="1000" />
      <style jsx>{`
        .animate-draw {
            animation: draw-line 1.5s ease-out forwards;
            animation-delay: 1.2s;
        }
      `}</style>
  </svg>
);


export function SolutionsSection() {
    const [ref, inView] = useInView({ once: true });
    return (
        <section ref={ref} className={cn('scroll-section bg-background', inView ? 'is-visible' : 'opacity-0')}>
            <SolutionConnections inView={inView} />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />

            <div className="relative z-10 w-full max-w-5xl mx-auto p-8 flex flex-col items-center text-center gap-8 animate-item" style={{ animationName: 'zoom-in' }}>
                <h2 className="font-headline text-3xl md:text-4xl title-underline pb-4">
                  <span className="relative">
                    Solutions &amp; Synthesis
                    <span className={cn("absolute bottom-[-0.5rem] left-0 h-[3px] w-full bg-yellow-300 transition-all duration-1000 ease-out", inView ? "opacity-70 [clip-path:inset(0_0_0_0)]" : "opacity-0 [clip-path:inset(0_100%_0_0)]")} style={{ animationIterationCount: 1, transitionDelay: '0.5s' }} />
                  </span>
                </h2>

                <p className="font-body text-base md:text-lg max-w-[65ch] animate-item" style={{ animationName: 'fade-up', animationDelay: '0.2s' }}>
                    “Poverty is multidimensional — social, biological, environmental, and structural. To reform education, solutions must be integrated: mentorship programs, sustainable funding, access to arts and mental health care, and safer school environments. True innovation comes when we address the invisible forces shaping how students learn.”
                </p>
                
                <div className="w-full max-w-4xl my-4 relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      {solutions.slice(0, 3).map((solution, index) => (
                          <div key={index} className={cn("bg-[#F5F3E7E8] text-card-foreground p-4 rounded-2xl border border-emerald-300/20 shadow-md backdrop-blur-md animate-item transition-transform duration-300 hover:scale-105", inView ? 'is-visible' : 'opacity-0')} style={{ animationName: 'fade-up', animationDelay: `${0.4 + index * 0.15}s` }}>
                            <p className="text-sm font-semibold text-emerald-900 mb-1">{solution.title}</p>
                            <p className="text-xs text-teal-950">{solution.description}</p>
                          </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
                      {solutions.slice(3).map((solution, index) => (
                          <div key={index} className={cn("bg-[#F5F3E7E8] text-card-foreground p-4 rounded-2xl border border-emerald-300/20 shadow-md backdrop-blur-md animate-item transition-transform duration-300 hover:scale-105 sm:last:col-start-auto", inView ? 'is-visible' : 'opacity-0')} style={{ animationName: 'fade-up', animationDelay: `${0.85 + index * 0.15}s` }}>
                            <p className="text-sm font-semibold text-emerald-900 mb-1">{solution.title}</p>
                            <p className="text-xs text-teal-950">{solution.description}</p>
                          </div>
                      ))}
                    </div>
                </div>

                <div className="bg-[#F5F3E7E0] text-card-foreground p-6 md:p-7 rounded-[20px] border border-emerald-300/20 shadow-md backdrop-blur-md max-w-3xl animate-item w-full" style={{ animationName: 'fade-up', animationDelay: '1.2s' }}>
                    <h3 className="font-accent italic text-lg mb-2 text-emerald-900 relative inline-block">
                        Implementation Note
                        <span className="absolute bottom-[-0.25rem] left-0 w-2/3 h-[2px] bg-yellow-400"></span>
                    </h3>
                    <p className="text-[1rem] md:text-[1.0625rem] leading-relaxed text-left text-teal-950">
                        Integrated solutions require cross-sector collaboration between schools, city planning, and public health departments.
                    </p>
                </div>

                <p className={cn("font-accent italic text-xl md:text-2xl mt-8 animate-item gold-shimmer-text transition-opacity duration-1000", inView ? 'opacity-100' : 'opacity-0')} style={{ animationDelay: '1.5s' }}>
                    “Redefining Education Through Understanding Poverty.”
                </p>
            </div>
        </section>
    );
}
