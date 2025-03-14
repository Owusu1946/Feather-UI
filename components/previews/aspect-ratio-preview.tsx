import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

interface AspectRatioPreviewProps {
  variant?: string;
}

export function AspectRatioPreview({ variant = "default" }: AspectRatioPreviewProps) {
  return (
    <div className="w-full max-w-[400px] mx-auto">
      <AspectRatio ratio={16 / 9}>
        <div className="w-full h-full bg-muted flex items-center justify-center rounded-md overflow-hidden">
          {/* Placeholder image - replace with actual image in real usage */}
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-violet-200 flex items-center justify-center">
            <p className="text-sm text-muted-foreground">16:9 Aspect Ratio</p>
          </div>
        </div>
      </AspectRatio>
    </div>
  );
} 