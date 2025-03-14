"use client"

import React, { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"

interface ProgressPreviewProps {
  variant?: string;
}

export function ProgressPreview({ variant = "default" }: ProgressPreviewProps) {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(66)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[60%]" />
} 