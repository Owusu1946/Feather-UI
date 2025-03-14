import React from "react"
import { Metadata } from "next"

import { DocsSidebar } from "@/components/docs-sidebar"

export const metadata: Metadata = {
  title: "Documentation - Feather UI",
  description: "Documentation for the Feather UI component library",
}

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return <DocsSidebar>{children}</DocsSidebar>
} 