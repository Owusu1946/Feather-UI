import React from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

interface ChartPreviewProps {
  variant?: string;
}

export function ChartPreview({ variant = "default" }: ChartPreviewProps) {
  const data = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 500 },
    { name: "Apr", value: 280 },
    { name: "May", value: 590 },
    { name: "Jun", value: 320 },
  ];

  const config = {
    value: {
      label: "Revenue",
      color: "#0ea5e9",
    },
  };

  return (
    <div className="w-full aspect-[16/9] max-w-md mx-auto p-2">
      <ChartContainer config={config}>
        <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="var(--color-value, #0ea5e9)" 
            strokeWidth={2} 
            dot={{ r: 4 }}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
} 