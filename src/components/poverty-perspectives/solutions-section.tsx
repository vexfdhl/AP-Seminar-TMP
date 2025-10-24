"use client";

import { useInView } from '@/hooks/use-in-view';
import { Users, Palette, Cpu, Shield, BrainCircuit } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';

const solutions = [
    { id: 'sol-1', icon: Users, text: "Community Mentorship & Housing Equity (Laila)", color: "text-green-400" },
    { id: 'sol-2', icon: Palette, text: "Art & Emotional Resilience (Vincent)", color: "text-yellow-400" },
    { id: 'sol-3', icon: Cpu, text: "Tech-Equity & Future Readiness (Mireya)", color: "text-blue-400" },
    { id: 'sol-4', icon: Shield, text: "Environmental Safety in Schools (Xenia)", color: "text-emerald-400" },
    { id: 'sol-5', icon: BrainCircuit, text: "Neuroscience-Informed Policy (Pravin)", color: "text-purple-400" },
];

const SolutionConnections = ({ inView }: { inView: boolean }) => {
    if (!inView) return null;

    const lineStyle: React.CSSProperties = {
        strokeDasharray: 500,
        strokeDashoffset: 500,
        animation: 'draw-line 2s ease-out forwards 1',
        animationDelay: '0.8s',
    };

    return (
        <svg className="absolute inset-0 w-full h-full opacity-25" style={{ zIndex: -1 }}>
            <line x1="25%" y1="35%" x2="50%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="1" style={lineStyle} />
            <line x1="75%" y1="35%" x2="50%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="1" style={{...lineStyle, animationDelay: '1s'}} />
            <line x1="20%" y1="65%" x2="50%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="1" style={{...lineStyle, animationDelay: '1.2s'}} />
            <line x1="80%" y1="65%" x2="50%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="1" style={{...lineStyle, animationDelay: '1.4s'}} />
             <line x1="50%" y1="80%" x2="50%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="1" style={{...lineStyle, animationDelay: '1.6s'}} />
        </svg>
    )
};

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

                <p className="font-body text-base md:text-lg animate-item" style={{ animationName: 'fade-up', animationDelay: '0.2s' }}>
                    “Poverty is multidimensional — social, biological, environmental, and structural. To reform education, solutions must be integrated: mentorship programs, sustainable funding, access to arts and mental health care, and safer school environments. True innovation comes when we address the invisible forces shaping how students learn.”
                </p>
                <div className="relative w-full">
                  <SolutionConnections inView={inView} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-4 w-full">
                      {solutions.map((solution, index) => (
                          <div key={index} className={cn(
                              "flex items-center gap-4 p-4 bg-secondary/5 backdrop-blur-md rounded-2xl border border-primary/20 shadow-lg animate-item transition-all duration-300 hover:scale-105 hover:shadow-primary/20",
                               "lg:first:col-start-1 lg:first:col-end-2 lg:first:justify-self-end",
                               "lg:last:col-start-2 lg:last:col-end-3 lg:last:justify-self-center",
                               "lg:[&:nth-child(2)]:col-start-3 lg:[&:nth-child(2)]:col-end-4 lg:[&:nth-child(2)]:justify-self-start",
                          )} style={{ animationName: 'fade-up', animationDelay: `${0.4 + index * 0.15}s` }}>
                              <solution.icon className={`${solution.color} h-8 w-8 shrink-0`} />
                              <p className="text-sm text-left">{solution.text}</p>
                          </div>
                      ))}
                  </div>
                </div>

                <p className={cn("font-accent italic text-xl md:text-2xl mt-8 animate-item", inView && "gold-shimmer-text")} style={{ animationName: 'fade-up', animationDelay: '1.5s', animationIterationCount: 1 }}>
                    “Redefining Education Through Understanding Poverty.”
                </p>
            </div>
        </section>
    );
}
