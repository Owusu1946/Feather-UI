"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface ToastPreviewProps {
  variant?: string;
}

export function ToastPreview({ variant = "default" }: ToastPreviewProps) {
  const { toast } = useToast()
  
  if (variant === "destructive") {
    return (
      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          })
        }}
      >
        Show Destructive Toast
      </Button>
    )
  }
  
  if (variant === "with-action") {
    return (
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
              <Button variant="outline" size="sm">
                Undo
              </Button>
            ),
          })
        }}
      >
        Show Toast with Action
      </Button>
    )
  }
  
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Success!",
          description: "Your action has been completed.",
        })
      }}
    >
      Show Toast
    </Button>
  )
} 