import React from "react"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface TextareaPreviewProps {
  variant?: string;
}

export function TextareaPreview({ variant = "default" }: TextareaPreviewProps) {
  if (variant === "with-label") {
    return (
      <div className="grid w-full max-w-sm gap-1.5">
        <Label htmlFor="message">Your message</Label>
        <Textarea 
          id="message" 
          placeholder="Type your message here..." 
          className="min-h-[120px]"
        />
      </div>
    )
  }
  
  if (variant === "disabled") {
    return (
      <Textarea 
        disabled 
        placeholder="This textarea is disabled" 
        className="w-full max-w-sm"
      />
    )
  }
  
  return (
    <Textarea 
      placeholder="Type your message here..." 
      className="w-full max-w-sm"
    />
  )
} 