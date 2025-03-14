import React from "react";
import { Calendar } from "@/components/ui/calendar";

interface CalendarPreviewProps {
  variant?: string;
}

export function CalendarPreview({ variant = "default" }: CalendarPreviewProps) {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  return (
    <div className="flex justify-center p-2">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
} 