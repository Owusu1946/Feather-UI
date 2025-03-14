"use client"

import React from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface SwitchPreviewProps {
  variant?: string;
}

export function SwitchPreview({ variant = "default" }: SwitchPreviewProps) {
  if (variant === "with-label") {
    return (
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    )
  }
  
  return <Switch />
} 