"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, Line, ComposedChart } from "recharts"
import { ChartTooltipContent, ChartContainer } from "@/components/ui/chart"

const chartData = [
    { category: "Unsafe", "Learning Loss": 20, "Anxiety Levels": 25 },
    { category: "Safe", "Learning Loss": 8, "Anxiety Levels": 10 },
];

const chartConfig = {
    "Learning Loss": {
        label: "Learning Loss",
        color: "hsl(var(--primary))",
    },
    "Anxiety Levels": {
        label: "Anxiety",
        color: "hsl(180, 80%, 70%)",
    },
}

export function EducationChart({ startAnimation }: { startAnimation: boolean }) {
  return (
    <div className="w-full">
        <ChartContainer config={chartConfig} className="w-full h-64 bg-secondary/5 backdrop-blur-md p-4 rounded-2xl border border-primary/20">
        <ComposedChart 
            data={chartData} 
            layout="vertical"
            margin={{ left: 10, right: 30 }}
            accessibilityLayer
        >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--foreground) / 0.2)" />
            <XAxis type="number" stroke="hsl(var(--foreground))" domain={[0, 30]} tickFormatter={(value) => `${value}%`} />
            <YAxis type="category" dataKey="category" stroke="hsl(var(--foreground))" width={80} tickLine={false} axisLine={false} />
            <Tooltip 
            cursor={{ fill: 'hsl(var(--accent) / 0.1)' }}
            content={<ChartTooltipContent indicator="dot" />}
            />
            <Legend />
            <Bar dataKey="Learning Loss" fill="var(--color-Learning Loss)" radius={[0, 4, 4, 0]} isAnimationActive={startAnimation} animationDuration={800} animationEasing="ease-out" />
            <Line dataKey="Anxiety Levels" type="monotone" stroke="var(--color-Anxiety Levels)" strokeWidth={2} dot={{r: 4}} activeDot={{r: 6}} isAnimationActive={startAnimation} animationDuration={800} animationEasing="ease-out" />
        </ComposedChart>
        </ChartContainer>
        <p className="text-xs text-muted-foreground text-center mt-2">Illustrative comparison based on CDC (2022).</p>
    </div>
  )
}
