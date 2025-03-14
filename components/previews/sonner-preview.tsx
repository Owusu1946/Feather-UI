"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

interface SonnerPreviewProps {
  variant?: string;
}

export function SonnerPreview({ variant = "default" }: SonnerPreviewProps) {
  if (variant === "with-action") {
    return (
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 21st at 4:30PM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast with Action
      </Button>
    )
  }
  
  if (variant === "destructive") {
    return (
      <Button
        variant="outline"
        onClick={() =>
          toast.error("Event has been deleted", {
            description: "The event has been permanently deleted.",
          })
        }
      >
        Show Error Toast
      </Button>
    )
  }
  
  if (variant === "success") {
    return (
      <Button
        variant="outline"
        onClick={() =>
          toast.success("Event has been created", {
            description: "The event has been successfully created.",
          })
        }
      >
        Show Success Toast
      </Button>
    )
  }
  
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 21st at 4:30PM",
        })
      }
    >
      Show Toast
    </Button>
  )
} 