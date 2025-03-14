import React from "react"
import { CodeDisplay } from "@/components/code-display"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { 
  PaintBucket, Moon, Sun, Palette, Brush, Code, 
  Eye, Sparkles, Lightbulb, Layers, FileJson, 
  ArrowRight, FileCode, Settings, Sliders, 
  PanelLeft, RefreshCw, Database, Shuffle
} from "lucide-react"

export default function AdvancedThemingPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-lg border bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 p-8">
          <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-purple-100 opacity-20 blur-3xl dark:bg-purple-900"></div>
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline" className="px-3 py-1 border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900 text-purple-800 dark:text-purple-300">
                <Settings className="h-3.5 w-3.5 mr-1" />
                Advanced
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-3">
                  Advanced Theming
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Take your Feather UI themes to the next level with advanced customization techniques.
                </p>
              </div>
              <Button variant="outline" size="sm" asChild className="gap-1 hidden md:flex">
                <Link href="/docs/theming">
                  <ArrowRight className="h-3.5 w-3.5 rotate-180" />
                  Back to Theming
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <Card className="border-purple-100 dark:border-purple-900">
          <CardHeader className="border-b">
            <CardTitle>In This Guide</CardTitle>
            <CardDescription>
              Advanced techniques for customizing Feather UI
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid gap-2">
              {[
                { icon: <Sliders className="h-4 w-4" />, title: "Component-Level Theming", href: "#component-level-theming" },
                { icon: <Palette className="h-4 w-4" />, title: "Multi-Theme Support", href: "#multi-theme-support" },
                { icon: <PanelLeft className="h-4 w-4" />, title: "Custom Theme Contexts", href: "#custom-theme-contexts" },
                { icon: <Database className="h-4 w-4" />, title: "Theme Persistence", href: "#theme-persistence" },
                { icon: <Shuffle className="h-4 w-4" />, title: "Theme Transitions", href: "#theme-transitions" }
              ].map((item, index) => (
                <Link href={item.href} key={index}>
                  <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-md transition-colors">
                    <div className="text-primary">{item.icon}</div>
                    <span>{item.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Component-Level Theming */}
        <div id="component-level-theming" className="space-y-6 scroll-mt-16">
          <div className="flex items-center gap-3 border-b pb-4">
            <div className="p-1.5 rounded-md bg-primary/10 text-primary">
              <Sliders className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Component-Level Theming</h2>
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <p>
              While global theming with CSS variables provides a consistent look, sometimes you need to customize specific components differently.
              Feather UI supports component-level customization through variant props and CSS composition.
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Custom Button Variants
              </CardTitle>
              <CardDescription>
                Extend the button component with custom variants
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeDisplay 
                code={`// components/ui/custom-button.tsx
import { cva } from "class-variance-authority"
import { Button, buttonVariants } from "@/components/ui/button"

// Extend the existing button variants
const customButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Inherit all existing variants
        ...buttonVariants.variants.variant,
        // Add new variants
        gradient: 
          "bg-gradient-to-r from-blue-600 to-indigo-600 text-primary-foreground hover:from-blue-700 hover:to-indigo-700",
        success: 
          "bg-green-600 text-primary-foreground hover:bg-green-700",
        warning: 
          "bg-amber-500 text-primary-foreground hover:bg-amber-600",
        glass: 
          "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// Export an enhanced button with the new variants
export function CustomButton({ variant, ...props }) {
  // Pass all props to the original Button but override the className
  return <Button {...props} className={customButtonVariants({ variant })} />
}

// Usage:
// <CustomButton variant="gradient">Gradient Button</CustomButton>
// <CustomButton variant="success">Success Button</CustomButton>
`} 
                language="tsx"
                fileName="components/ui/custom-button.tsx"
                expandable={true}
                maxHeight={300}
              />
            </CardContent>
          </Card>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Component States</CardTitle>
                <CardDescription>
                  Customize interactive states of components
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeDisplay 
                  code={`// styles/custom-card.css
.custom-card {
  transition: all 0.2s ease;
  border-left: 4px solid transparent;
}

.custom-card:hover {
  transform: translateY(-2px);
  border-left: 4px solid var(--primary);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}

// In your React component
import "styles/custom-card.css";

function CustomCard({ children }) {
  return (
    <Card className="custom-card">
      {children}
    </Card>
  );
}`} 
                  language="css"
                  fileName="Custom Component States"
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Scoped Themes</CardTitle>
                <CardDescription>
                  Apply different theme values to specific sections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeDisplay 
                  code={`// Create a scoped theme section with different values
<div className="themed-section" style={{
  "--primary": "340 82% 52%",
  "--primary-foreground": "0 0% 98%",
  "--secondary": "340 4.8% 95.9%",
  "--secondary-foreground": "340 5.9% 10%",
}}>
  {/* Components in here will use the scoped theme values */}
  <Card>
    <CardHeader>
      <CardTitle>Scoped Theme Section</CardTitle>
    </CardHeader>
    <CardContent>
      <Button>Themed Button</Button>
    </CardContent>
  </Card>
</div>`} 
                  language="tsx"
                  fileName="Scoped Theming Example"
                />
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Multi-Theme Support */}
        <div id="multi-theme-support" className="space-y-6 scroll-mt-16">
          <div className="flex items-center gap-3 border-b pb-4">
            <div className="p-1.5 rounded-md bg-primary/10 text-primary">
              <Palette className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Multi-Theme Support</h2>
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <p>
              Support multiple themes beyond just light and dark mode. This allows users to switch between different color schemes
              like "blue", "purple", "green", etc., all while maintaining dark/light mode compatibility.
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Theme Provider Setup</CardTitle>
              <CardDescription>
                Extended theme provider with multiple theme support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeDisplay 
                code={`// lib/theme-provider.tsx
"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "blue" | "green" | "purple" | "rose" | "amber"
type Mode = "light" | "dark" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  defaultMode?: Mode
}

type ThemeContextType = {
  theme: Theme
  mode: Mode
  setTheme: (theme: Theme) => void
  setMode: (mode: Mode) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = "blue",
  defaultMode = "system",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [mode, setMode] = useState<Mode>(defaultMode)
  
  useEffect(() => {
    const root = document.documentElement
    
    // Remove previous theme classes
    root.classList.remove("theme-blue", "theme-green", "theme-purple", "theme-rose", "theme-amber")
    
    // Add new theme class
    root.classList.add(\`theme-\${theme}\`)
    
    // Handle mode
    if (mode === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.toggle("dark", systemTheme === "dark")
    } else {
      root.classList.toggle("dark", mode === "dark")
    }
  }, [theme, mode])
  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    
    const handleChange = () => {
      if (mode === "system") {
        document.documentElement.classList.toggle("dark", mediaQuery.matches)
      }
    }
    
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [mode])
  
  const value = {
    theme,
    mode,
    setTheme,
    setMode,
  }
  
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}`} 
                language="tsx"
                fileName="lib/theme-provider.tsx"
                expandable={true}
                maxHeight={300}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>CSS Configuration</CardTitle>
              <CardDescription>
                Multi-theme CSS variables setup
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeDisplay 
                code={`/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* Base variables applicable to all themes */
  :root {
    --radius: 0.5rem;
  }
  
  /* Blue theme (default) */
  .theme-blue {
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 0 0% 98%;
    --secondary: 214.3 31.8% 91.4%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
  }
  
  /* Green theme */
  .theme-green {
    --primary: 142.1 76.2% 36.3%;
    --primary-foreground: 0 0% 98%;
    --secondary: 143 30% 96%;
    --secondary-foreground: 140 30% 10%;
    --accent: 140 40% 94%;
    --accent-foreground: 140 40% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
  }
  
  /* Purple theme */
  .theme-purple {
    --primary: 272.1 91.7% 65.1%;
    --primary-foreground: 0 0% 98%;
    --secondary: 270 30% 96%;
    --secondary-foreground: 272 30% 10%;
    --accent: 269 40% 94%;
    --accent-foreground: 269 40% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
  }
  
  /* More themes... */
  
  /* Light mode for all themes */
  :root,
  .theme-blue,
  .theme-green,
  .theme-purple {
    --background: 0 0% 100%;
    --foreground: 222.2 47.4% 11.2%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 47.4% 11.2%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 47.4% 11.2%;
  }
  
  /* Dark mode for all themes */
  .dark,
  .dark .theme-blue,
  .dark .theme-green,
  .dark .theme-purple {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}`} 
                language="css"
                fileName="globals.css"
                expandable={true}
                maxHeight={300}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Theme Selector</CardTitle>
              <CardDescription>
                UI component for selecting between multiple themes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeDisplay 
                code={`"use client"

import { useState } from "react"
import { Check, Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "@/lib/theme-provider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"

export function ThemeSelector() {
  const { theme, mode, setTheme, setMode } = useTheme()
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {mode === "light" && <Sun className="h-4 w-4" />}
          {mode === "dark" && <Moon className="h-4 w-4" />}
          {mode === "system" && <Laptop className="h-4 w-4" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Mode</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setMode("light")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
          {mode === "light" && <Check className="ml-auto h-4 w-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setMode("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
          {mode === "dark" && <Check className="ml-auto h-4 w-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setMode("system")}>
          <Laptop className="mr-2 h-4 w-4" />
          <span>System</span>
          {mode === "system" && <Check className="ml-auto h-4 w-4" />}
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        
        <DropdownMenuItem onClick={() => setTheme("blue")}>
          <div className="mr-2 h-4 w-4 rounded-full bg-blue-500" />
          <span>Blue</span>
          {theme === "blue" && <Check className="ml-auto h-4 w-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("green")}>
          <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
          <span>Green</span>
          {theme === "green" && <Check className="ml-auto h-4 w-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("purple")}>
          <div className="mr-2 h-4 w-4 rounded-full bg-purple-500" />
          <span>Purple</span>
          {theme === "purple" && <Check className="ml-auto h-4 w-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`} 
                language="tsx"
                fileName="components/theme-selector.tsx"
                expandable={true}
                maxHeight={300}
              />
            </CardContent>
            <CardFooter className="bg-muted/30 p-4">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <Lightbulb className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <p>
                  This approach allows users to select both a color theme (blue, green, etc.) and a mode (light/dark), 
                  making your UI highly customizable.
                </p>
              </div>
            </CardFooter>
          </Card>
        </div>
        
        {/* Custom Theme Contexts */}
        <div id="custom-theme-contexts" className="space-y-6 scroll-mt-16">
          <div className="flex items-center gap-3 border-b pb-4">
            <div className="p-1.5 rounded-md bg-primary/10 text-primary">
              <PanelLeft className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Custom Theme Contexts</h2>
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <p>
              For more complex applications, you might need different themes for different sections or pages.
              Custom theme contexts allow you to implement section-specific theming.
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Section-Specific Theme Provider</CardTitle>
              <CardDescription>
                Create isolated theming for specific sections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeDisplay 
                code={`// lib/section-theme-provider.tsx
"use client"

import { createContext, useContext, useEffect, useState } from "react"

type SectionTheme = {
  bgColor: string
  textColor: string
  accentColor: string
}

type SectionThemeProviderProps = {
  children: React.ReactNode
  defaultTheme: SectionTheme
}

type SectionThemeContextType = {
  theme: SectionTheme
  setTheme: (theme: SectionTheme) => void
}

const SectionThemeContext = createContext<SectionThemeContextType | undefined>(undefined)

export function SectionThemeProvider({
  children,
  defaultTheme,
}: SectionThemeProviderProps) {
  const [theme, setTheme] = useState<SectionTheme>(defaultTheme)
  
  return (
    <SectionThemeContext.Provider value={{ theme, setTheme }}>
      <div style={{ 
        backgroundColor: theme.bgColor,
        color: theme.textColor,
        "--section-accent": theme.accentColor
      } as React.CSSProperties}>
        {children}
      </div>
    </SectionThemeContext.Provider>
  )
}

export const useSectionTheme = () => {
  const context = useContext(SectionThemeContext)
  if (context === undefined) {
    throw new Error("useSectionTheme must be used within a SectionThemeProvider")
  }
  return context
}

// Usage:
//
// <SectionThemeProvider defaultTheme={{
//   bgColor: "#f0f9ff",
//   textColor: "#0f172a",
//   accentColor: "#3b82f6"
// }}>
//   <SectionContent />
// </SectionThemeProvider>
`} 
                language="tsx"
                fileName="lib/section-theme-provider.tsx"
                expandable={true}
                maxHeight={300}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Practical Example: Dashboard Sections</CardTitle>
              <CardDescription>
                Different themes for different dashboard sections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeDisplay 
                code={`"use client"

import { SectionThemeProvider } from "@/lib/section-theme-provider"
import { DashboardWidget } from "@/components/dashboard-widget"

export function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Analytics Section with blue theme */}
      <SectionThemeProvider defaultTheme={{
        bgColor: "#f0f9ff", // light blue bg
        textColor: "#0f172a",
        accentColor: "#3b82f6" // blue accent
      }}>
        <DashboardWidget
          title="Analytics"
          icon={<ChartBar />}
          data={analyticsData}
        />
      </SectionThemeProvider>
      
      {/* Revenue Section with green theme */}
      <SectionThemeProvider defaultTheme={{
        bgColor: "#f0fdf4", // light green bg
        textColor: "#0f172a",
        accentColor: "#22c55e" // green accent
      }}>
        <DashboardWidget
          title="Revenue"
          icon={<DollarSign />}
          data={revenueData}
        />
      </SectionThemeProvider>
      
      {/* User Section with purple theme */}
      <SectionThemeProvider defaultTheme={{
        bgColor: "#faf5ff", // light purple bg
        textColor: "#0f172a",
        accentColor: "#a855f7" // purple accent
      }}>
        <DashboardWidget
          title="Users"
          icon={<Users />}
          data={userData}
        />
      </SectionThemeProvider>
      
      {/* Alerts Section with amber theme */}
      <SectionThemeProvider defaultTheme={{
        bgColor: "#fffbeb", // light amber bg
        textColor: "#0f172a",
        accentColor: "#f59e0b" // amber accent
      }}>
        <DashboardWidget
          title="Alerts"
          icon={<BellRing />}
          data={alertsData}
        />
      </SectionThemeProvider>
    </div>
  )
}`} 
                language="tsx"
                fileName="app/dashboard/page.tsx"
                expandable={true}
                maxHeight={300}
              />
            </CardContent>
            <CardFooter className="bg-muted/30 p-4">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <Sparkles className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <p>
                  This approach creates visual separation between different functional areas while maintaining a cohesive overall design.
                  Each section can have its own theme that matches its purpose.
                </p>
              </div>
            </CardFooter>
          </Card>
        </div>
        
        {/* Theme Persistence */}
        <div id="theme-persistence" className="space-y-6 scroll-mt-16">
          <div className="flex items-center gap-3 border-b pb-4">
            <div className="p-1.5 rounded-md bg-primary/10 text-primary">
              <Database className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Theme Persistence</h2>
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <p>
              Save user theme preferences to provide a consistent experience across sessions.
              Combine localStorage with server-side persistence for authenticated users.
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Local Storage Theme Persistence</CardTitle>
              <CardDescription>
                Save theme preferences to local storage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeDisplay 
                code={`// lib/theme-storage.ts
type ThemePreferences = {
  theme: string
  mode: string
}

// Save theme preferences to localStorage
export function saveThemePreferences(preferences: ThemePreferences): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme-preferences', JSON.stringify(preferences))
  }
}

// Load theme preferences from localStorage
export function loadThemePreferences(): ThemePreferences | null {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('theme-preferences')
    if (saved) {
      try {
        return JSON.parse(saved) as ThemePreferences
      } catch (e) {
        console.error('Failed to parse theme preferences', e)
      }
    }
  }
  return null
}

// Clear theme preferences from localStorage
export function clearThemePreferences(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('theme-preferences')
  }
}

// Update the theme provider to use these functions
// Inside ThemeProvider:

useEffect(() => {
  // On mount, load saved preferences
  const savedPreferences = loadThemePreferences()
  if (savedPreferences) {
    setTheme(savedPreferences.theme as Theme)
    setMode(savedPreferences.mode as Mode)
  }
}, [])

// When theme or mode changes, save to localStorage
useEffect(() => {
  saveThemePreferences({ theme, mode })
}, [theme, mode])
`} 
                language="typescript"
                fileName="lib/theme-storage.ts"
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Server-Side Persistence</CardTitle>
              <CardDescription>
                Save theme preferences for authenticated users
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeDisplay 
                code={`// API route for saving theme preferences
// app/api/user/preferences/route.ts
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)
  
  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  
  try {
    const data = await request.json()
    const { theme, mode } = data
    
    // Update or create user preferences in database
    await prisma.userPreferences.upsert({
      where: {
        userId: session.user.id,
      },
      update: {
        theme,
        mode,
      },
      create: {
        userId: session.user.id,
        theme,
        mode,
      },
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save preferences' }, { status: 500 })
  }
}

// Client-side usage in theme provider
useEffect(() => {
  // Save to localStorage for all users
  saveThemePreferences({ theme, mode })
  
  // Also save to server for authenticated users
  if (session?.user) {
    fetch('/api/user/preferences', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ theme, mode }),
    }).catch(error => console.error('Failed to save preferences to server:', error))
  }
}, [theme, mode, session?.user])

// Load preferences on initial mount
useEffect(() => {
  async function loadUserPreferences() {
    if (session?.user) {
      try {
        const response = await fetch('/api/user/preferences')
        if (response.ok) {
          const data = await response.json()
          setTheme(data.theme as Theme)
          setMode(data.mode as Mode)
        }
      } catch (error) {
        // Fall back to localStorage if server request fails
        const savedPreferences = loadThemePreferences()
        if (savedPreferences) {
          setTheme(savedPreferences.theme as Theme)
          setMode(savedPreferences.mode as Mode)
        }
      }
    } else {
      // Use localStorage for non-authenticated users
      const savedPreferences = loadThemePreferences()
      if (savedPreferences) {
        setTheme(savedPreferences.theme as Theme)
        setMode(savedPreferences.mode as Mode)
      }
    }
  }
  
  loadUserPreferences()
}, [session?.user])
`} 
                language="typescript"
                fileName="Server-Side Theme Persistence"
                expandable={true}
                maxHeight={300}
              />
            </CardContent>
            <CardFooter className="bg-muted/30 p-4">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <Lightbulb className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <p>
                  By saving preferences on the server, users will have a consistent theme experience across devices.
                  This is particularly useful for SaaS products or applications with user accounts.
                </p>
              </div>
            </CardFooter>
          </Card>
        </div>
        
        {/* Theme Transitions */}
        <div id="theme-transitions" className="space-y-6 scroll-mt-16">
          <div className="flex items-center gap-3 border-b pb-4">
            <div className="p-1.5 rounded-md bg-primary/10 text-primary">
              <Shuffle className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Theme Transitions</h2>
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <p>
              Add smooth transitions between themes for a polished user experience.
              Proper transitions can make theme switching feel seamless and professional.
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>CSS Transitions</CardTitle>
              <CardDescription>
                Apply transitions to theme changes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeDisplay 
                code={`/* Add this to your globals.css */
:root {
  /* Other CSS variables... */
  
  /* Define transition for theme changes */
  --theme-transition-duration: 400ms;
  --theme-transition-ease: cubic-bezier(0.16, 1, 0.3, 1);
}

/* Apply transitions to color properties */
*, *::before, *::after {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: var(--theme-transition-ease);
  transition-duration: var(--theme-transition-duration);
}

/* Don't transition certain elements (can cause issues) */
button, a, input, select, textarea, [role="button"] {
  transition-property: transform, opacity, filter, box-shadow;
}

/* Transition modifiers for specific elements */
.theme-transition-fast {
  transition-duration: 200ms;
}

.theme-transition-slow {
  transition-duration: 600ms;
}

.theme-transition-none {
  transition: none !important;
}

/* Disable transitions during page load */
.preload * {
  transition: none !important;
}

/* In your layout.js/.tsx, add a script to remove the preload class */
// <script dangerouslySetInnerHTML={{
//   __html: \`
//     document.documentElement.classList.add('preload');
//     window.addEventListener('load', function() {
//       document.documentElement.classList.remove('preload');
//     });
//   \`
// }} />
`} 
                language="css"
                fileName="Theme Transitions CSS"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 