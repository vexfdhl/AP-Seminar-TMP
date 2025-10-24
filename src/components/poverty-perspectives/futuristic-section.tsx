
"use client";

import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'Education Risk', value: 85 },
  { name: 'Funding', value: 30 },
];

const FutureEducationChart = ({ startAnimation }: { startAnimation: boolean }) => (
  <div className="w-full">
    <ResponsiveContainer width="100%" height={200}>
      <BarChart 
        data={chartData} 
        layout="vertical" 
        margin={{ left: 10, right: 30 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--foreground) / 0.2)" />
        <XAxis type="number" stroke="hsl(var(--foreground))" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
        <YAxis type="category" dataKey="name" stroke="hsl(var(--foreground))" width={100} tickLine={false} axisLine={false} />
        <Tooltip 
          cursor={{ fill: 'hsl(var(--accent) / 0.1)' }}
          contentStyle={{ 
            background: 'hsl(var(--card) / 0.1)', 
            backdropFilter: 'blur(10px)',
            border: '1px solid hsl(var(--primary) / 0.2)',
            borderRadius: '1rem',
            color: 'hsl(var(--foreground))'
          }}
        />
        <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} isAnimationActive={startAnimation} animationDuration={650} animationEasing="ease-out" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const DataFlowBackground = () => {
    const bgVideo = PlaceHolderImages.find(img => img.id === 'futuristic-video-bg');

    return (
    <div className="absolute inset-0 overflow-hidden">
        {bgVideo && (
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute w-full h-full object-cover"
                poster="https://picsum.photos/seed/techbg/1920/1080"
                src={bgVideo.imageUrl}
            />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(177,49%,36%)]/40 to-[hsl(180,100%,40%)]/40" />
    </div>
    )
};

export function FuturisticSection() {
    const [ref, inView] = useInView({ threshold: 0.25, once: true });

  return (
    <section ref={ref} className={cn('scroll-section', inView ? 'is-visible' : '')}>
      <DataFlowBackground />
      <div className="relative z-10 w-full max-w-5xl mx-auto p-8 flex flex-col items-center text-center gap-6">
        <div className="animate-item" style={{ transitionDelay: '200ms' }}>
          <h2 className="font-headline text-3xl md:text-4xl title-underline pb-4">Mireya Gonzalez <br /><span className="text-xl font-body">(Futuristic Lens)</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
          <div className="flex flex-col gap-6 text-center md:text-left animate-item" style={{ transitionDelay: '400ms' }}>
            <p className="font-body text-base md:text-lg">
              In a future of automation and climate instability, poverty risks deepening as technology divides classrooms. Education funding in Baltimore has declined, while AI and digital skills become basic requirements. Without intervention, access to future employment and upward mobility will remain stratified by income (U.S. Census Bureau, 2023).
            </p>
            <div className={cn("my-4 animate-item transition-all duration-1000 ease-out self-center md:self-start")} style={{ transitionDelay: '550ms' }}>
              <p className="font-accent italic text-xl md:text-2xl p-4 pull-quote">
                “Technology divides classrooms.”
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 animate-item" style={{transitionDelay: '450ms'}}>
            <h3 className="font-headline text-xl text-center">Education Risk ↑ / Funding ↓</h3>
            <FutureEducationChart startAnimation={inView} />
          </div>
        </div>

        <div className="glassmorphism-card max-w-3xl animate-item w-full" style={{ transitionDelay: '700ms' }}>
          <h3 className="font-headline text-lg mb-2 font-semibold">Statistic</h3>
          <p className="text-[1rem] md:text-[1.0625rem] leading-relaxed">
            “Baltimore’s poverty rate: 20.1% (2023). Education funding projected to decrease by 6% over 5 years.”
          </p>
        </div>
      </div>
    </section>
  );
}
