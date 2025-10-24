"use client";

import { useInView } from '@/hooks/use-in-view';
import { EducationChart } from './education-chart';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

type LineStyle = {
  left: string;
  animationDelay: string;
  animationDuration: string;
  opacity: number;
};

const DataFlowBackground = () => {
    const [lineStyles, setLineStyles] = useState<LineStyle[]>([]);

    useEffect(() => {
        // Generate styles only on the client
        const styles = Array.from({ length: 50 }).map(() => ({
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * -10}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
            opacity: Math.random() * 0.5 + 0.2,
        }));
        setLineStyles(styles);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden">
            <style jsx>{`
                @keyframes data-flow {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100%); }
                }
                .data-line {
                    position: absolute;
                    height: 150%;
                    width: 1px;
                    background: linear-gradient(to bottom, transparent, hsl(var(--accent)), transparent);
                    animation: data-flow 10s linear infinite;
                }
            `}</style>
            {lineStyles.map((style, i) => (
                <div
                    key={i}
                    className="data-line"
                    style={style}
                />
            ))}
        </div>
    );
};


export function FuturisticSection() {
    const [ref, inView] = useInView();

  return (
    <section ref={ref} className={cn('scroll-section bg-gradient-to-b from-background to-accent/80', inView ? 'is-visible' : 'opacity-0')}>
      <DataFlowBackground />
      <div className="relative z-10 w-full max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 animate-item" style={{animationName: 'slide-in-left', animationDelay: '0.2s'}}>
          <h2 className="font-headline text-3xl md:text-4xl title-underline pb-4">Mireya Gonzalez <br /><span className="text-xl font-body">(Futuristic Lens)</span></h2>
          <p className="font-body text-base md:text-lg animate-item" style={{ animationName: 'fade-up', animationDelay: '0.4s' }}>
            “In a future of automation and climate instability, poverty risks deepening as technology divides classrooms. Education funding in Baltimore has declined, while AI and digital skills become basic requirements. Without intervention, access to future employment and upward mobility will remain stratified by income (U.S. Census Bureau, 2023).”
          </p>
          <div className="bg-secondary/20 backdrop-blur-md text-card-foreground p-6 rounded-lg border border-primary/50 shadow-lg animate-item" style={{ animationName: 'fade-up', animationDelay: '0.6s' }}>
            <h3 className="font-headline text-lg mb-2 text-primary">Statistic</h3>
            <p className="text-sm">
              “Baltimore’s poverty rate: 20.1% (2023). Education funding projected to decrease by 6% over 5 years.”
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 animate-item" style={{animationName: 'zoom-in', animationDelay: '0.5s'}}>
          <h3 className="font-headline text-xl text-center">Education Risk ↑ / Funding ↓</h3>
          <EducationChart startAnimation={inView} />
        </div>
      </div>
    </section>
  );
}
