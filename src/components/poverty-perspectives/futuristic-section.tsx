"use client";

import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
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
            background: 'hsl(var(--secondary) / 0.1)', 
            backdropFilter: 'blur(10px)',
            border: '1px solid hsl(var(--primary) / 0.2)',
            borderRadius: '1rem',
          }}
        />
        <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} isAnimationActive={startAnimation} animationDuration={800} animationEasing="ease-out" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);


const DataFlowBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
            poster="https://picsum.photos/seed/techbg/1920/1080"
            src="https://firebasestorage.googleapis.com/v0/b/poverty-perspectives.appspot.com/o/tech-classroom.mp4?alt=media&token=e93547f3-8c4d-4e9a-9e3e-4f6c449a0378"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(177,49%,36%)]/50 to-[hsl(180,100%,40%)]/50" />
    </div>
);


export function FuturisticSection() {
    const [ref, inView] = useInView({ once: true });

  return (
    <section ref={ref} className={cn('scroll-section', inView ? 'is-visible' : 'opacity-0')}>
      <DataFlowBackground />
      <div className="relative z-10 w-full max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 animate-item" style={{animationName: 'slide-in-left', animationDelay: '0.2s'}}>
          <h2 className="font-headline text-3xl md:text-4xl title-underline pb-4">Mireya Gonzalez <br /><span className="text-xl font-body">(Futuristic Lens)</span></h2>
          <p className="font-body text-base md:text-lg animate-item" style={{ animationName: 'fade-up', animationDelay: '0.4s' }}>
            “In a future of automation and climate instability, poverty risks deepening as technology divides classrooms. Education funding in Baltimore has declined, while AI and digital skills become basic requirements. Without intervention, access to future employment and upward mobility will remain stratified by income (U.S. Census Bureau, 2023).”
          </p>
          <div className="bg-secondary/5 backdrop-blur-md text-card-foreground p-6 rounded-2xl border border-primary/20 shadow-lg animate-item" style={{ animationName: 'fade-up', animationDelay: '0.6s' }}>
            <h3 className="font-headline text-lg mb-2 text-primary">Statistic</h3>
            <p className="text-sm">
              “Baltimore’s poverty rate: 20.1% (2023). Education funding projected to decrease by 6% over 5 years.”
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 animate-item" style={{animationName: 'zoom-in', animationDelay: '0.5s'}}>
          <h3 className="font-headline text-xl text-center">Education Risk ↑ / Funding ↓</h3>
          <FutureEducationChart startAnimation={inView} />
        </div>
      </div>
    </section>
  );
}
