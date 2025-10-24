"use client";

import { useInView } from '@/hooks/use-in-view';
import { Typewriter } from './typewriter';
import { cn } from '@/lib/utils';

const NeuralNetworkBackground = () => (
    <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="neuralPattern" patternUnits="userSpaceOnUse" width="100" height="100">
                    <circle cx="10" cy="10" r="2" fill="hsl(var(--accent))" />
                    <circle cx="50" cy="70" r="3" fill="hsl(var(--accent))" />
                    <circle cx="90" cy="30" r="2" fill="hsl(var(--accent))" />
                    <line x1="10" y1="10" x2="50" y2="70" stroke="hsl(var(--accent) / 0.5)" strokeWidth="0.5" />
                    <line x1="50" y1="70" x2="90" y2="30" stroke="hsl(var(--accent) / 0.5)" strokeWidth="0.5" />
                    <line x1="10" y1="10" x2="90" y2="30" stroke="hsl(var(--accent) / 0.3)" strokeWidth="0.5" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neuralPattern)" />
        </svg>
    </div>
);

const stats = [
    "2,500 DNA sites linked to poverty exposure (McDade et al., 2021).",
    "Low-income youth show smaller hippocampal volumes (Harvard ABCD Study, 2023).",
    "Chronic stress disrupts learning patterns in 8,842 children (Li et al., 2023)."
];

export function ScientificSection() {
    const [ref, inView] = useInView({ threshold: 0.4 });

    return (
        <section ref={ref} className={cn('scroll-section bg-background', inView ? 'is-visible' : 'opacity-0')}>
            <NeuralNetworkBackground />
            <div className="absolute inset-0 bg-background/60" />

            <div className="relative z-10 w-full max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col gap-6 animate-item" style={{ animationName: 'fade-up', animationDelay: '0.2s' }}>
                    <h2 className="font-headline text-3xl md:text-4xl">Pravin Yadav <br /><span className="text-xl font-body">(Scientific Lens)</span></h2>
                    <p className="font-body text-base md:text-lg">
                        “Poverty affects biology itself. Research from Northwestern University shows over 2,500 DNA sites altered by chronic poverty stress (McDade et al., 2021). Harvard’s ABCD study found reduced hippocampal size and disrupted white matter in low-income youth, impairing memory and learning (Weissman et al., 2023). Brain plasticity can be rebuilt with stable environments and emotional support, proving education and neuroscience must unite.”
                    </p>
                </div>
                <div className="flex flex-col gap-4 font-code text-sm md:text-base bg-black/30 p-6 rounded-lg border border-accent animate-item" style={{ animationName: 'fade-up', animationDelay: '0.4s' }}>
                    <h3 className="font-headline text-lg mb-2 text-accent">Key Stats</h3>
                    <ul className="space-y-3">
                        {stats.map((stat, index) => (
                           <li key={index} className="flex items-start">
                             <span className="text-accent mr-2 mt-1 shrink-0">&gt;</span>
                             <Typewriter text={stat} speed={20} start={inView} />
                           </li> 
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
