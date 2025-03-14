"use client"

import React from "react"
import { Slider } from "@/components/ui/slider"

interface SliderPreviewProps {
  variant?: string;
}

export function SliderPreview({ variant = "default" }: SliderPreviewProps) {
  const [value, setValue] = React.useState([33])
  
  if (variant === "range") {
    return (
      <Slider
        defaultValue={[20, 80]}
        max={100}
        step={1}
        className="w-[60%]"
      />
    )
  }
  
  return (
    <Slider
      value={value}
      onValueChange={setValue}
      max={100}
      step={1}
      className="w-[60%]"
    />
  )
} 