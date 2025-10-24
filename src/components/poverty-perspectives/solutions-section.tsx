"use client";

import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import React from 'react';

const solutions = [
    "Community Mentorship & Housing Equity (Laila)",
    "Art & Emotional Resilience (Vincent)",
    "Tech-Equity & Future Readiness (Mireya)",
    "Environmental Safety in Schools (Xenia)",
    "Neuroscience-Informed Policy (Pravin)",
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
                          <div key={index} className="bg-[#F5F3E7E0] text-card-foreground p-4 rounded-[20px] border border-emerald-200 shadow-lg backdrop-blur-sm animate-item" style={{ animationName: 'fade-up', animationDelay: `${0.4 + index * 0.15}s` }}>
                            <p className="text-sm font-semibold text-emerald-900">{solution}</p>
                          </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
                      {solutions.slice(3).map((solution, index) => (
                          <div key={index} className="bg-[#F5F3E7E0] text-card-foreground p-4 rounded-[20px] border border-emerald-200 shadow-lg backdrop-blur-sm animate-item sm:last:col-start-auto" style={{ animationName: 'fade-up', animationDelay: `${0.85 + index * 0.15}s` }}>
                            <p className="text-sm font-semibold text-emerald-900">{solution}</p>
                          </div>
                      ))}
                    </div>
                </div>

                <div className="bg-[#F5F3E7E0] text-card-foreground p-6 md:p-7 rounded-[20px] border border-emerald-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-sm max-w-3xl animate-item w-full" style={{ animationName: 'fade-up', animationDelay: '1.2s' }}>
                  <h3 className="font-headline text-lg mb-2 font-semibold text-emerald-900">Implementation Note</h3>
                  <p className="text-[1rem] md:text-[1.0625rem] leading-relaxed">
                    Integrated solutions require cross-sector collaboration between schools, city planning, and public health departments.
                  </p>
                </div>

                <p className={cn("font-accent italic text-xl md:text-2xl mt-8 animate-item")} style={{ animationName: 'fade-up', animationDelay: '1.5s', animationIterationCount: 1 }}>
                    “Redefining Education Through Understanding Poverty.”
                </p>
            </div>
        </section>
    );
}
