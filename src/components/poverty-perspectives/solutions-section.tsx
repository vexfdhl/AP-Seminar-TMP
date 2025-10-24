"use client";

import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import React from 'react';

const solutions = [
    { title: "Community Mentorship & Housing Equity (Laila)", description: "Strengthening local ties and safe housing access." },
    { title: "Art & Emotional Resilience (Vincent)", description: "Using creative programs to foster empathy and reform." },
    { title: "Tech-Equity & Future Readiness (Mireya)", description: "Bridging digital divides for sustainable education." },
    { title: "Environmental Safety in Schools (Xenia)", description: "Building safe, green learning environments." },
    { title: "Neuroscience-Informed Policy (Pravin)", description: "Applying cognitive research to educational reform." },
];

export function SolutionsSection() {
    const [ref, inView] = useInView({ once: true });
    return (
        <section ref={ref} className={cn('scroll-section bg-background', inView ? 'is-visible' : 'opacity-0')}>
            <div className="absolute inset-0 bg-background/80" />
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
                
                <div className="w-full max-w-4xl my-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      {solutions.slice(0, 3).map((solution, index) => (
                          <div key={index} className={cn("bg-[#F5F3E7E8] text-card-foreground p-4 rounded-2xl border border-emerald-200 shadow-lg backdrop-blur-sm animate-item transition-transform duration-300 hover:scale-105", inView ? 'is-visible' : 'opacity-0')} style={{ animationName: 'fade-up', animationDelay: `${0.4 + index * 0.15}s` }}>
                            <p className="text-sm font-semibold text-emerald-900 mb-1">{solution.title}</p>
                            <p className="text-xs text-teal-950">{solution.description}</p>
                          </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
                      {solutions.slice(3).map((solution, index) => (
                          <div key={index} className={cn("bg-[#F5F3E7E8] text-card-foreground p-4 rounded-2xl border border-emerald-200 shadow-lg backdrop-blur-sm animate-item transition-transform duration-300 hover:scale-105 sm:last:col-start-auto", inView ? 'is-visible' : 'opacity-0')} style={{ animationName: 'fade-up', animationDelay: `${0.85 + index * 0.15}s` }}>
                            <p className="text-sm font-semibold text-emerald-900 mb-1">{solution.title}</p>
                            <p className="text-xs text-teal-950">{solution.description}</p>
                          </div>
                      ))}
                    </div>
                </div>

                <div className="bg-[#F5F3E7E0] text-card-foreground p-6 md:p-7 rounded-[20px] border border-emerald-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-sm max-w-3xl animate-item w-full" style={{ animationName: 'fade-up', animationDelay: '1.2s' }}>
                    <h3 className="font-accent italic text-lg mb-2 text-emerald-900 relative inline-block">
                        Implementation Note
                        <span className="absolute bottom-[-0.25rem] left-0 w-2/3 h-[2px] bg-yellow-400"></span>
                    </h3>
                    <p className="text-[1rem] md:text-[1.0625rem] leading-relaxed text-left text-teal-950">
                        Integrated solutions require cross-sector collaboration between schools, city planning, and public health departments.
                    </p>
                </div>

                <p className={cn("font-accent italic text-xl md:text-2xl mt-8 animate-item transition-opacity duration-1000", inView ? 'opacity-100' : 'opacity-0')} style={{ animationDelay: '1.5s' }}>
                    “Redefining Education Through Understanding Poverty.”
                </p>
            </div>
        </section>
    );
}
