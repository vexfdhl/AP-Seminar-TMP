"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"
import { ChartTooltipContent, ChartContainer } from "@/components/ui/chart"

const chartData = [
  { name: "Education Risk", value: 85, fill: "var(--color-risk)" },
  { name: "Funding", value: 30, fill: "var(--color-funding)" },
];

const chartConfig = {
    value: {
        label: "Value",
    },
    risk: {
        label: "Risk",
        color: "hsl(var(--destructive))",
    },
    funding: {
        label: "Funding",
        color: "hsl(var(--primary))",
    }
}

export function EducationChart({ startAnimation }: { startAnimation: boolean }) {
  return (
    <ChartContainer config={chartConfig} className="w-full h-64 bg-secondary/20 p-4 rounded-lg">
      <BarChart 
        data={chartData} 
        layout="vertical" 
        margin={{ left: 10, right: 30 }}
        accessibilityLayer
      >
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--foreground) / 0.2)" />
        <XAxis type="number" stroke="hsl(var(--foreground))" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
        <YAxis type="category" dataKey="name" stroke="hsl(var(--foreground))" width={100} tickLine={false} axisLine={false} />
        <Tooltip 
          cursor={{ fill: 'hsl(var(--accent) / 0.1)' }}
          content={<ChartTooltipContent indicator="dot" />}
        />
        <Bar dataKey="value" radius={[0, 4, 4, 0]} isAnimationActive={startAnimation} animationDuration={1500} />
      </BarChart>
    </ChartContainer>
  )
}
