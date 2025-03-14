"use client"

import React from "react"
import { Toggle } from "@/components/ui/toggle"
import { Bold, Italic, Underline } from "lucide-react"

interface TogglePreviewProps {
  variant?: string;
}

export function TogglePreview({ variant = "default" }: TogglePreviewProps) {
  if (variant === "outline") {
    return (
      <Toggle variant="outline" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
        Italic
      </Toggle>
    )
  }
  
  if (variant === "with-text") {
    return (
      <Toggle aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
        Bold
      </Toggle>
    )
  }
  
  if (variant === "sizes") {
    return (
      <div className="flex flex-col gap-4 items-start">
        <Toggle size="sm" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle size="lg" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </Toggle>
      </div>
    )
  }
  
  return <Toggle aria-label="Toggle italic"><Italic className="h-4 w-4" /></Toggle>
} 