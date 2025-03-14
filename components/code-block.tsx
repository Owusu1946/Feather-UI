"use client"

import React from "react"
import { ComponentDisplay } from "@/components/component-display"

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  // Create a minimal component object with the required properties
  const dummyComponent = {
    name: "Code",
    description: "",
    preview: () => null,
    code: code,
    tags: [],
  }

  return <ComponentDisplay component={dummyComponent} />
} 