
"use client";

import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const solutions = [
    { title: "Community Mentorship & Housing Equity", description: "Connects students with community mentors to stabilize educational support." },
    { title: "Art & Emotional Resilience", description: "Uses creative expression to heal and empower through empathy." },
    { title: "Tech-Equity & Future Readiness", description: "Promotes digital access and career readiness programs for underfunded schools." },
    { title: "Environmental Safety in Schools", description: "Advocates for cleaner, safer learning spaces to reduce stress and illness." },
    { title: "Neuroscience-Informed Policy", description: "Aligns policy with brain science to mitigate cognitive effects of poverty." },
];

export function SolutionsSection() {
    const [ref, inView] = useInView({ threshold: 0.25, once: true });
    const bgImage = PlaceHolderImages.find(img => img.id === 'solutions-bg');
    
    return (
        <section ref={ref} className={cn('scroll-section min-h-screen bg-background', inView ? 'is-visible' : '')}>
            {bgImage && (
                <Image
                    src={bgImage.imageUrl}
                    alt={bgImage.description}
                    fill
                    className={cn("object-cover parallax-bg transition-transform duration-1000 ease-out", inView ? 'scale-105' : 'scale-100')}
                    data-ai-hint={bgImage.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-background/65" />

            <div className="relative z-10 w-full max-w-5xl mx-auto p-8 flex flex-col items-center text-center gap-8">
                <h2 className="font-headline text-4xl md:text-5xl title-underline pb-4 animate-item" style={{transitionDelay: '200ms'}}>
                    Solutions & Synthesis
                </h2>

                <p className="font-body text-base md:text-lg max-w-[65ch] animate-item" style={{ transitionDelay: '400ms' }}>
                    Poverty is multidimensional social, biological, environmental, and structural. To reform education, solutions must be integrated: mentorship programs, sustainable funding, access to arts and mental health care, and safer school environments. True innovation comes when we address the invisible forces shaping how students learn.
                </p>
                
                <div className="w-full max-w-4xl my-4 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {solutions.map((solution, index) => (
                      <div 
                        key={index} 
                        className={cn("glassmorphism-card p-5 text-left transition-all duration-300 animate-item flex flex-col")} 
                        style={{ 
                          transitionDelay: `${550 + index * 150}ms`,
                        } as React.CSSProperties}
                      >
                        <div className="solution-card-accent-bar" />
                        <h3 className="text-sm font-semibold mb-1">{solution.title}</h3>
                        <p className="text-xs flex-grow">{solution.description}</p>
                      </div>
                  ))}
                </div>

                <div className="glassmorphism-card max-w-3xl animate-item w-full glowing-border" style={{ transitionDelay: '1200ms' }}>
                    <h3 className="font-accent italic text-lg mb-2 relative inline-block">
                        Implementation Note
                    </h3>
                    <p className="text-[1rem] md:text-[1.0625rem] leading-relaxed text-left">
                        Integrated solutions require cross-sector collaboration between schools, city planning, and public health departments.
                    </p>
                </div>

                <p className={cn("font-accent italic text-xl md:text-2xl mt-8 animate-item slow-fade")} style={{ transitionDelay: '1350ms' }}>
                    Redefining Education Through Understanding Poverty.
                </p>
            </div>
        </section>
    );
}
