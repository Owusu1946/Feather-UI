import React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface InputPreviewProps {
  variant?: string;
}

export function InputPreview({ variant = "default" }: InputPreviewProps) {
  if (variant === "with-label") {
    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
    )
  }

  if (variant === "disabled") {
    return (
      <Input disabled type="email" placeholder="Email" />
    )
  }

  if (variant === "with-button") {
    return (
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
          Subscribe
        </button>
      </div>
    )
  }

  if (variant === "file") {
    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="file" />
      </div>
    )
  }

  return (
    <Input placeholder="Email" />
  )
} 