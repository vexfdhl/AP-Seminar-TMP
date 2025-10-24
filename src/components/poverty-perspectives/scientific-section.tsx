"use client";

import { useInView } from '@/hooks/use-in-view';
import { Typewriter } from './typewriter';
import { cn } from '@/lib/utils';
import React from 'react';

const NeuralNetworkBackground = ({ inView }: { inView: boolean }) => (
    <div className="absolute inset-0 opacity-20 pointer-events-none">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
            poster="https://picsum.photos/seed/dna/1920/1080"
            src="https://firebasestorage.googleapis.com/v0/b/poverty-perspectives.appspot.com/o/neural-dna.mp4?alt=media&token=8e925b4c-9b1b-4f9e-9d21-4f114c810d7a"
        />
        <div className={cn("absolute inset-0 transition-opacity duration-1000", inView ? 'opacity-100' : 'opacity-0')}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                  <radialGradient id="pulseGradient" cx="50%" cy="50%" r="50%">
                      <stop stopColor="hsl(var(--accent))" stopOpacity="0.5" />
                      <stop stopColor="hsl(var(--accent))" stopOpacity="0" />
                  </radialGradient>
              </defs>
              {inView && (
                  <>
                      <circle cx="20%" cy="30%" r="50" fill="url(#pulseGradient)" className="animate-pulse" style={{animationDelay: '0.5s', animationIterationCount: 1}}/>
                      <circle cx="80%" cy="60%" r="40" fill="url(#pulseGradient)" className="animate-pulse" style={{animationDelay: '1.5s', animationIterationCount: 1}}/>
                  </>
              )}
          </svg>
        </div>
    </div>
);

const stats = [
    "Over 2,500 DNA sites are altered by poverty exposure (McDade et al., 2021).",
    "Low-income youth show smaller hippocampal volumes, impairing memory (Harvard, 2023)."
];

export function ScientificSection() {
    const [ref, inView] = useInView({ threshold: 0.4, once: true });

    return (
        <section ref={ref} className={cn('scroll-section bg-background', inView ? 'is-visible' : 'opacity-0')}>
            <NeuralNetworkBackground inView={inView} />
            <div className="absolute inset-0 bg-[hsl(var(--background))] opacity-80" />

            <div className="relative z-10 w-full max-w-4xl mx-auto p-8 flex flex-col items-center text-center gap-6">
                <div className="animate-item" style={{ animationName: 'fade-up', animationDelay: '0.2s' }}>
                    <h2 className="font-headline text-3xl md:text-4xl title-underline pb-4">Pravin Yadav <br /><span className="text-xl font-body">(Scientific Lens)</span></h2>
                </div>
                <p className="font-body text-base md:text-lg max-w-[65ch] animate-item" style={{ animationName: 'fade-up', animationDelay: '0.4s' }}>
                    “<Typewriter text="Poverty affects biology itself." speed={30} start={inView} delay={400} /> Research from Northwestern University shows over 2,500 DNA sites altered by chronic poverty stress (McDade et al., 2021). Harvard’s ABCD study found reduced hippocampal size and disrupted white matter in low-income youth, impairing memory and learning (Weissman et al., 2023). Brain plasticity can be rebuilt with stable environments and emotional support, proving education and neuroscience must unite.”
                </p>

                <div className={cn("my-4 animate-item transition-all duration-1000 ease-out", inView ? 'opacity-100' : 'opacity-0')} style={{ animationDelay: '0.6s' }}>
                    <p className="font-accent italic text-xl md:text-2xl p-4 pull-quote">
                        “Poverty becomes written into our biology.”
                    </p>
                </div>
                
                <div className="bg-[#F5F3E7E0] text-card-foreground p-6 md:p-7 rounded-[20px] border border-emerald-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-sm max-w-3xl animate-item w-full flex flex-col gap-4" style={{ animationName: 'fade-up', animationDelay: '0.8s' }}>
                    <h3 className="font-headline text-lg mb-2 font-semibold text-emerald-900">Key Stats</h3>
                    <ul className="space-y-3 text-left">
                        {stats.map((stat, index) => (
                           <li key={index} className="text-[1rem] md:text-[1.0625rem] leading-relaxed">
                             {stat}
                           </li> 
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
