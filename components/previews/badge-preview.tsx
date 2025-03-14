import React from "react";
import { Badge } from "@/components/ui/badge";

interface BadgePreviewProps {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

export function BadgePreview({ variant = "default" }: BadgePreviewProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant={variant}>
        {variant === "default" && "Badge"}
        {variant === "secondary" && "Secondary"}
        {variant === "destructive" && "Destructive"}
        {variant === "outline" && "Outline"}
      </Badge>
    </div>
  );
} 