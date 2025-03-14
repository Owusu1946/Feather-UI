"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  ChevronRight, ExternalLink, Home, Download, 
  Palette, FeatherIcon, Sparkles, Settings, 
  FileCode, LayoutGrid, Box, FileText, Zap
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider
} from "@/components/ui/sidebar"

export function DocsSidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Helper function to check if a link is active
  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(`${path}/`)
  }
  
  // Helper to conditionally add active styles
  const navLinkClasses = (path: string) => {
    return cn(
      "flex items-center gap-2 py-2 px-3 rounded-md transition-colors w-full",
      isActive(path) 
        ? "bg-primary/10 text-primary font-medium" 
        : "hover:bg-muted text-muted-foreground"
    )
  }
  
  // Helper for component links
  const componentLinkClasses = (path: string) => {
    return cn(
      "flex items-center gap-2 py-1.5 px-3 text-sm rounded-md transition-colors",
      isActive(path) 
        ? "bg-primary/10 text-primary font-medium" 
        : "hover:bg-muted text-muted-foreground"
    )
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar className="border-r">
        <SidebarHeader className="border-b">
          <div className="flex items-center gap-2 px-4 py-3">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-md bg-primary flex items-center justify-center">
                <FeatherIcon className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Feather.UI</span>
            </Link>
          </div>
        </SidebarHeader>
        
        <SidebarContent className="px-3 py-2 overflow-y-auto custom-scrollbar">
          {/* Introduction Group */}
          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Home"
                >
                  <Link href="/docs" className={navLinkClasses("/docs")}>
                    <Home className="h-4 w-4 flex-shrink-0" />
                    <span>Introduction</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
          
          {/* Getting Started Group */}
          <SidebarGroup className="mt-6">
            <SidebarGroupLabel className="px-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Getting Started
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    tooltip="Installation"
                  >
                    <Link href="/docs/installation" className={navLinkClasses("/docs/installation")}>
                      <Download className="h-4 w-4 flex-shrink-0" />
                      <span>Installation</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    tooltip="Theming"
                  >
                    <Link href="/docs/theming" className={navLinkClasses("/docs/theming")}>
                      <Palette className="h-4 w-4 flex-shrink-0" />
                      <span>Theming</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    tooltip="Theme Generator"
                  >
                    <Link href="/docs/theme-generator" className={cn(navLinkClasses("/docs/theme-generator"), "pr-1")}>
                      <Sparkles className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">Theme Generator</span>
                      <Badge variant="outline" className="text-[0.65rem] px-1 py-0 ml-1 flex-shrink-0">New</Badge>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    tooltip="Advanced Theming"
                  >
                    <Link href="/docs/advanced-theming" className={cn(navLinkClasses("/docs/advanced-theming"), "pr-1")}>
                      <Settings className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">Advanced Theming</span>
                      <Badge variant="outline" className="text-[0.65rem] px-1 py-0 ml-1 flex-shrink-0">New</Badge>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          {/* Components Group */}
          <SidebarGroup className="mt-6">
            <SidebarGroupLabel className="px-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Components
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    tooltip="Overview"
                  >
                    <Link href="/docs/components" className={navLinkClasses("/docs/components")}>
                      <LayoutGrid className="h-4 w-4 flex-shrink-0" />
                      <span>Overview</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          {/* UI Components Subgroups */}
          <SidebarGroup className="mt-2 pl-6">
            <SidebarGroupLabel className="px-3 text-xs font-medium text-muted-foreground">
              Layout
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {[
                  { name: "Container", path: "/docs/components/container" },
                  { name: "Box", path: "/docs/components/box" },
                  { name: "Grid", path: "/docs/components/grid" },
                  { name: "Card", path: "/docs/components/card" }
                ].map((component) => (
                  <SidebarMenuItem key={component.name}>
                    <SidebarMenuButton
                      asChild
                      tooltip={component.name}
                    >
                      <Link href={component.path} className={componentLinkClasses(component.path)}>
                        <span>{component.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          <SidebarGroup className="mt-2 pl-6">
            <SidebarGroupLabel className="px-3 text-xs font-medium text-muted-foreground">
              Forms
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {[
                  { name: "Button", path: "/docs/components/button" },
                  { name: "Input", path: "/docs/components/input" },
                  { name: "Checkbox", path: "/docs/components/checkbox" },
                  { name: "Radio", path: "/docs/components/radio" },
                  { name: "Select", path: "/docs/components/select" },
                  { name: "Textarea", path: "/docs/components/textarea" }
                ].map((component) => (
                  <SidebarMenuItem key={component.name}>
                    <SidebarMenuButton
                      asChild
                      tooltip={component.name}
                    >
                      <Link href={component.path} className={componentLinkClasses(component.path)}>
                        <span>{component.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          <SidebarGroup className="mt-2 pl-6">
            <SidebarGroupLabel className="px-3 text-xs font-medium text-muted-foreground">
              Navigation
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {[
                  { name: "Menu", path: "/docs/components/menu" },
                  { name: "Tabs", path: "/docs/components/tabs" },
                  { name: "Sidebar", path: "/docs/components/sidebar" },
                  { name: "Breadcrumb", path: "/docs/components/breadcrumb" }
                ].map((component) => (
                  <SidebarMenuItem key={component.name}>
                    <SidebarMenuButton
                      asChild
                      tooltip={component.name}
                    >
                      <Link href={component.path} className={componentLinkClasses(component.path)}>
                        <span>{component.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          {/* Utilities Group */}
          <SidebarGroup className="mt-6">
            <SidebarGroupLabel className="px-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Utilities
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    tooltip="Hooks"
                  >
                    <Link href="/docs/utilities/hooks" className={navLinkClasses("/docs/utilities/hooks")}>
                      <Zap className="h-4 w-4 flex-shrink-0" />
                      <span>Hooks</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    tooltip="Utilities"
                  >
                    <Link href="/docs/utilities/functions" className={navLinkClasses("/docs/utilities/functions")}>
                      <FileCode className="h-4 w-4 flex-shrink-0" />
                      <span>Utility Functions</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        
        <SidebarFooter className="border-t p-4">
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm" asChild className="w-full">
              <a 
                href="https://github.com/yourusername/feather-ui" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                <span>GitHub</span>
              </a>
            </Button>
            
            <Button variant="outline" size="sm" asChild className="w-full">
              <a 
                href="/docs/changelog" 
                className="flex items-center justify-center"
              >
                <FileText className="h-4 w-4 mr-2" />
                <span>Changelog</span>
              </a>
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto py-10">
          {children}
        </div>
      </div>

      {/* Add custom scrollbar styles */}
      <style jsx global>{`
        .custom-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
        
        /* Ensure truncated text has tooltip on hover */
        .truncate {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      `}</style>
    </SidebarProvider>
  )
} 