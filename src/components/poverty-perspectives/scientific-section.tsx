"use client";

import { useInView } from '@/hooks/use-in-view';
import { Typewriter } from './typewriter';
import { cn } from '@/lib/utils';
import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const NeuralNetworkBackground = ({ inView }: { inView: boolean }) => {
    const bgVideo = PlaceHolderImages.find(img => img.id === 'scientific-video-bg');

    return (
    <div className="absolute inset-0 opacity-20 pointer-events-none">
        {bgVideo && (
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute w-full h-full object-cover"
                poster="https://picsum.photos/seed/dna/1920/1080"
                src={bgVideo.imageUrl}
            />
        )}
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
    )
};

const stats = [
    { 
        title: "DNA Findings", 
        description: "Over 2,500 DNA sites are altered by poverty exposure (McDade et al., 2021)." 
    },
    { 
        title: "Cognitive Impact", 
        description: "Low-income youth show smaller hippocampal volumes, impairing memory (Harvard, 2023)." 
    }
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
                    <Typewriter text="Poverty affects biology itself." speed={30} start={inView} delay={400} /> Research from Northwestern University shows over 2,500 DNA sites altered by chronic poverty stress (McDade et al., 2021). Harvard’s ABCD study found reduced hippocampal size and disrupted white matter in low-income youth, impairing memory and learning (Weissman et al., 2023). Brain plasticity can be rebuilt with stable environments and emotional support, proving education and neuroscience must unite.
                </p>

                <div className={cn("my-4 animate-item transition-all duration-1000 ease-out", inView ? 'opacity-100' : 'opacity-0')} style={{ animationDelay: '0.6s' }}>
                    <p className="font-accent italic text-xl md:text-2xl p-4 pull-quote">
                        “Poverty becomes written into our biology.”
                    </p>
                </div>
                
                <div className="bg-[#F5F3E7E6] text-card-foreground p-6 md:p-8 rounded-2xl border border-emerald-300/20 shadow-md backdrop-blur-md max-w-3xl animate-item w-full" style={{ animationName: 'fade-up', animationDelay: '0.8s' }}>
                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60%] w-[1px] bg-emerald-200 hidden md:block" />
                        {stats.map((stat, index) => (
                            <div key={index} className={cn("flex flex-col text-center md:text-left gap-1 animate-item", inView ? 'is-visible' : 'opacity-0')} style={{ animationName: 'fade-up', animationDelay: `${1 + index * 0.4}s` }}>
                                <h3 className="font-headline text-md font-semibold text-emerald-900">{stat.title}</h3>
                                <p className="text-sm text-teal-950">{stat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
