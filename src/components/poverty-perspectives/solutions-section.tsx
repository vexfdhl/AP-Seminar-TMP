"use client";

import { useInView } from '@/hooks/use-in-view';
import { Users, Palette, Cpu, Shield, BrainCircuit } from 'lucide-react';
import { cn } from '@/lib/utils';

const solutions = [
    { icon: Users, text: "Community Mentorship & Housing Equity (Laila)", color: "text-green-400" },
    { icon: Palette, text: "Art & Emotional Resilience (Vincent)", color: "text-yellow-400" },
    { icon: Cpu, text: "Tech-Equity & Future Readiness (Mireya)", color: "text-blue-400" },
    { icon: Shield, text: "Environmental Safety in Schools (Xenia)", color: "text-emerald-400" },
    { icon: BrainCircuit, text: "Neuroscience-Informed Policy (Pravin)", color: "text-purple-400" },
];

const GradientBackground = () => (
    <div className="absolute inset-0 opacity-50 overflow-hidden pointer-events-none">
        <style jsx>{`
            @keyframes rotate {
                0% { transform: translate(-50%, -50%) rotate(0deg); }
                100% { transform: translate(-50%, -50%) rotate(360deg); }
            }
            .gradient-blob {
                position: absolute;
                filter: blur(80px);
                border-radius: 50%;
                animation: rotate 20s linear infinite;
                will-change: transform;
            }
        `}</style>
        <div className="gradient-blob w-96 h-96 bg-accent top-1/4 left-1/4" style={{animationDirection: 'reverse'}}></div>
        <div className="gradient-blob w-72 h-72 bg-secondary/50 top-1/2 right-1/4"></div>
        <div className="gradient-blob w-80 h-80 bg-[#C7A55D] bottom-1/4 left-1/3" style={{animationDelay: '-5s'}}></div>
    </div>
);

export function SolutionsSection() {
    const [ref, inView] = useInView();
    return (
        <section ref={ref} className={cn('scroll-section', inView ? 'is-visible' : 'opacity-0')}>
            <GradientBackground />
            <div className="absolute inset-0 bg-background/70" />

            <div className="relative z-10 w-full max-w-4xl mx-auto p-8 flex flex-col items-center text-center gap-8 animate-item" style={{ animationName: 'zoom-in' }}>
                <h2 className="font-headline text-3xl md:text-4xl">Solutions &amp; Synthesis</h2>
                <p className="font-body text-base md:text-lg">
                    “Poverty is multidimensional — social, biological, environmental, and structural. To reform education, solutions must be integrated: mentorship programs, sustainable funding, access to arts and mental health care, and safer school environments. True innovation comes when we address the invisible forces shaping how students learn.”
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-4 w-full">
                    {solutions.map((solution, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-secondary/10 backdrop-blur-sm rounded-lg border border-foreground/10 animate-item" style={{ animationName: 'fade-up', animationDelay: `${0.2 + index * 0.1}s` }}>
                            <solution.icon className={`${solution.color} h-8 w-8 shrink-0`} />
                            <p className="text-sm text-left">{solution.text}</p>
                        </div>
                    ))}
                </div>

                <p className="font-accent italic text-xl md:text-2xl mt-8 animate-item" style={{ animationName: 'fade-up', animationDelay: '1s' }}>
                    “Redefining Education Through Understanding Poverty.”
                </p>
            </div>
        </section>
    );
}
