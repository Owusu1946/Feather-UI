"use client"

import React, { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface MarqueeProps {
  className?: string
  children: React.ReactNode
  direction?: "left" | "right" | "up" | "down"
  pauseOnHover?: boolean
  speed?: number
  gap?: number
}

export function Marquee({
  children,
  className,
  direction = "left",
  pauseOnHover = false,
  speed = 40,
  gap = 16,
}: MarqueeProps) {
  const [containerWidth, setContainerWidth] = useState(0)
  const [contentWidth, setContentWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      setContainerWidth(containerRef.current.offsetWidth)
      setContentWidth(contentRef.current.offsetWidth)
    }
  }, [children])

  const isHorizontal = direction === "left" || direction === "right"
  const duration = isHorizontal
    ? (contentWidth / speed) * (contentWidth / containerWidth)
    : (contentWidth / speed) * 2

  const distance = isHorizontal
    ? contentWidth
    : contentRef.current?.offsetHeight || 100

  const directionMultiplier = direction === "left" || direction === "up" ? -1 : 1
  
  const getAnimationProps = () => {
    if (isHorizontal) {
      return {
        x: [0, directionMultiplier * distance],
      }
    }
    return {
      y: [0, directionMultiplier * distance],
    }
  }
  
  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex overflow-hidden",
        isHorizontal ? "w-full" : "h-full",
        className
      )}
    >
      <motion.div
        ref={contentRef}
        className="flex items-center flex-row flex-nowrap gap-[--gap] whitespace-nowrap"
        style={{ "--gap": `${gap}px` } as React.CSSProperties}
        animate={getAnimationProps()}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration,
          ease: "linear",
          repeatDelay: 0,
        }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : undefined}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
} 