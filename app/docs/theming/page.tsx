import React from "react"
import { PaintBucket, Moon, Sun, Palette, Brush, Code, Eye, Sparkles, Lightbulb, Layers, FileJson, ArrowRight, FileCode } from "lucide-react"
import Link from "next/link"

import { CodeDisplay } from "@/components/code-display"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function ThemingPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-lg border bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950 p-8">
          <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-blue-100 opacity-20 blur-3xl dark:bg-blue-900"></div>
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline" className="px-3 py-1 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-800 dark:text-blue-300">
                <Palette className="h-3.5 w-3.5 mr-1" />
                Customization
              </Badge>
            </div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-3">
              Theming
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Customize Feather UI to match your brand and design system with powerful theming capabilities.
            </p>
          </div>
        </div>
        
        {/* Theme Structure Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b pb-4">
            <div className="p-1.5 rounded-md bg-primary/10 text-primary">
              <Brush className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Theme Structure</h2>
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <p>
              Feather UI uses CSS variables for theming, making it easy to customize colors,
              spacing, and more. These variables are defined in your global CSS file and can
              be modified to match your design system.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="overflow-hidden border-blue-100 dark:border-blue-800">
              <CardHeader className="bg-blue-50 dark:bg-blue-900/30 border-b border-blue-100 dark:border-blue-800">
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Color System
                </CardTitle>
                <CardDescription>
                  Base colors that power the entire UI
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { name: "Primary", color: "bg-primary", desc: "Main brand color" },
                    { name: "Secondary", color: "bg-secondary", desc: "Supplementary color" },
                    { name: "Accent", color: "bg-accent", desc: "Highlight color" },
                    { name: "Muted", color: "bg-muted", desc: "Subtle background" },
                    { name: "Destructive", color: "bg-destructive", desc: "For errors and warnings" }
                  ].map((item) => (
                    <div key={item.name} className="flex items-center gap-4">
                      <div className={`h-10 w-10 rounded-md flex-shrink-0 ${item.color} ring-1 ring-inset ring-black/5 dark:ring-white/5`} />
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-xs text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-slate-100 dark:border-slate-800">
              <CardHeader className="bg-slate-50 dark:bg-slate-900/30 border-b border-slate-100 dark:border-slate-800">
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                  User Interface Elements
                </CardTitle>
                <CardDescription>
                  Variables for UI surfaces and interactions
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { name: "Background", element: <div className="h-10 w-full rounded-md bg-background border"></div>, desc: "Page background" },
                    { name: "Card", element: <div className="h-10 w-full rounded-md bg-card border border-border"></div>, desc: "Card surfaces" },
                    { name: "Border", element: <div className="h-10 w-full rounded-md bg-background border-2 border-border"></div>, desc: "UI boundaries" },
                    { name: "Input", element: <div className="h-10 w-full rounded-md border bg-background"></div>, desc: "Form controls" },
                    { name: "Ring", element: <div className="h-10 w-full rounded-md bg-background ring-2 ring-ring"></div>, desc: "Focus indicators" }
                  ].map((item) => (
                    <div key={item.name} className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{item.name}</span>
                        <span className="text-xs text-muted-foreground">{item.desc}</span>
                      </div>
                      {item.element}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileJson className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                CSS Variables Structure
              </CardTitle>
              <CardDescription>
                How our CSS variables are organized
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeDisplay 
                code={`/* Base colors */
--primary: 217.2 91.2% 59.8%;
--primary-foreground: 0 0% 98%;

/* Semantic colors */
--background: 0 0% 100%;
--foreground: 222.2 47.4% 11.2%;

/* Component-specific colors */
--card: 0 0% 100%;
--card-foreground: 240 10% 3.9%;
--popover: 0 0% 100%;
--popover-foreground: 240 10% 3.9%;
--secondary: 240 4.8% 95.9%;
--secondary-foreground: 240 5.9% 10%;
--muted: 240 4.8% 95.9%;
--muted-foreground: 240 3.8% 46.1%;
--accent: 240 4.8% 95.9%;
--accent-foreground: 240 5.9% 10%;
--destructive: 0 84.2% 60.2%;
--destructive-foreground: 0 0% 98%;

/* UI element styles */
--border: 240 5.9% 90%;
--input: 240 5.9% 90%;
--ring: 240 10% 3.9%;

/* Other */
--radius: 0.5rem;`} 
                language="css"
                fileName="CSS Variable Structure"
                expandable={true}
                maxHeight={200}
              />
            </CardContent>
            <CardFooter className="bg-muted/30 p-4">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <Lightbulb className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <p>
                  All color values use the HSL format for easy manipulation. Values like <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">217.2 91.2% 59.8%</code> represent hue, saturation, and lightness.
                </p>
              </div>
            </CardFooter>
          </Card>
        </div>
        
        {/* Dark Mode Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b pb-4">
            <div className="p-1.5 rounded-md bg-primary/10 text-primary">
              <Moon className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Dark Mode Support</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-5">
            <div className="md:col-span-2 space-y-4">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Automatic Dark Mode</CardTitle>
                  <CardDescription>
                    Use the theme provider for easy switching
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Feather UI supports dark mode out of the box using the <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">useTheme</code> hook from <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">next-themes</code>.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background border">
                      <Sun className="h-6 w-6 text-amber-500" />
                      <span className="text-xs font-medium">Light Mode</span>
                      <div className="grid grid-cols-3 gap-1.5">
                        <div className="h-3 w-3 rounded-full bg-primary"></div>
                        <div className="h-3 w-3 rounded-full bg-secondary"></div>
                        <div className="h-3 w-3 rounded-full bg-accent"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-950 border border-gray-800 text-white">
                      <Moon className="h-6 w-6 text-blue-400" />
                      <span className="text-xs font-medium">Dark Mode</span>
                      <div className="grid grid-cols-3 gap-1.5">
                        <div className="h-3 w-3 rounded-full bg-primary"></div>
                        <div className="h-3 w-3 rounded-full bg-secondary"></div>
                        <div className="h-3 w-3 rounded-full bg-accent"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-3">
              <Card>
                <CardHeader className="border-b">
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    Theme Toggle Component
                  </CardTitle>
                  <CardDescription>
                    Add this component to your app for theme switching
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <CodeDisplay 
                    code={`"use client"
 
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
 
export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
 
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}`} 
                    language="tsx"
                    fileName="components/theme-toggle.tsx"
                  />
                </CardContent>
                <CardFooter className="bg-muted/30 p-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Sparkles className="h-4 w-4 text-yellow-500" />
                    <span>The theme toggle uses smooth transitions for a polished user experience.</span>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Customizing Colors Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b pb-4">
            <div className="p-1.5 rounded-md bg-primary/10 text-primary">
              <Palette className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Customizing Colors</h2>
          </div>
          
          <div className="prose dark:prose-invert max-w-none mb-6">
            <p>
              To customize the colors, modify the CSS variables in your global CSS file. Here are some example themes you can use as starting points:
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20 rounded-lg border p-6">
            <Tabs defaultValue="blue" className="w-full">
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-1/3">
                  <h3 className="text-lg font-medium mb-3">Choose a theme</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Select a preset or customize your own colors.
                  </p>
                  
                  <TabsList className="h-auto flex flex-col space-y-1 bg-transparent p-0">
                    {[
                      { id: "blue", color: "bg-blue-500", name: "Blue Theme" },
                      { id: "green", color: "bg-green-500", name: "Green Theme" },
                      { id: "purple", color: "bg-purple-500", name: "Purple Theme" },
                      { id: "rose", color: "bg-rose-500", name: "Rose Theme" },
                      { id: "amber", color: "bg-amber-500", name: "Amber Theme" },
                    ].map((theme) => (
                      <TabsTrigger 
                        key={theme.id}
                        value={theme.id}
                        className="justify-start px-3 py-2 h-auto"
                      >
                        <div className={`h-4 w-4 rounded-full mr-2 ${theme.color}`} />
                        {theme.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
                
                <div className="flex-1">
                  <div className="bg-card rounded-lg border shadow-sm">
                    <div className="p-4 border-b">
                      <h4 className="font-medium">CSS Variables</h4>
                    </div>
                    
                    <TabsContent value="blue" className="p-0 m-0">
                      <CodeDisplay 
                        code={`:root {
  --background: 0 0% 100%;
  --foreground: 222.2 47.4% 11.2%;
 
  --primary: 217.2 91.2% 59.8%;
  --primary-foreground: 0 0% 98%;
  
  --secondary: 214.3 31.8% 91.4%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
  
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
}`} 
                        language="css"
                        fileName="globals.css (Blue Theme)"
                      />
                    </TabsContent>
                    
                    <TabsContent value="green" className="p-0 m-0">
                      <CodeDisplay 
                        code={`:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
 
  --primary: 142.1 76.2% 36.3%;
  --primary-foreground: 0 0% 98%;
  
  --secondary: 143 30% 96%;
  --secondary-foreground: 140 30% 10%;
  
  --accent: 140 40% 94%;
  --accent-foreground: 140 40% 10%;
  
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
}`} 
                        language="css"
                        fileName="globals.css (Green Theme)"
                      />
                    </TabsContent>
                    
                    <TabsContent value="purple" className="p-0 m-0">
                      <CodeDisplay 
                        code={`:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
 
  --primary: 272.1 91.7% 65.1%;
  --primary-foreground: 0 0% 98%;
  
  --secondary: 270 30% 96%;
  --secondary-foreground: 272 30% 10%;
  
  --accent: 269 40% 94%;
  --accent-foreground: 269 40% 10%;
  
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
}`} 
                        language="css"
                        fileName="globals.css (Purple Theme)"
                      />
                    </TabsContent>
                    
                    <TabsContent value="rose" className="p-0 m-0">
                      <CodeDisplay 
                        code={`:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
 
  --primary: 346.8 77.2% 49.8%;
  --primary-foreground: 0 0% 98%;
  
  --secondary: 346 30% 96%;
  --secondary-foreground: 346 30% 10%;
  
  --accent: 345 40% 94%;
  --accent-foreground: 345 40% 10%;
  
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
}`} 
                        language="css"
                        fileName="globals.css (Rose Theme)"
                      />
                    </TabsContent>
                    
                    <TabsContent value="amber" className="p-0 m-0">
                      <CodeDisplay 
                        code={`:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
 
  --primary: 43 96% 56%;
  --primary-foreground: 0 0% 98%;
  
  --secondary: 43 30% 96%;
  --secondary-foreground: 43 30% 10%;
  
  --accent: 40 40% 94%;
  --accent-foreground: 40 40% 10%;
  
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
}`} 
                        language="css"
                        fileName="globals.css (Amber Theme)"
                      />
                    </TabsContent>
                  </div>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
        
        {/* Theme Generator */}
        <Card className="overflow-hidden border-blue-100 dark:border-blue-900">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-b border-blue-100 dark:border-blue-800">
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-blue-500" />
              Theme Generator
            </CardTitle>
            <CardDescription>
              Generate a custom theme based on your brand color
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 space-y-4">
                <div className="p-4 rounded-lg border bg-muted/30">
                  <h4 className="font-medium mb-2">How it works</h4>
                  <p className="text-sm text-muted-foreground">
                    Our theme generator creates a complete theme based on a single color. Visit our theme generator tool to create a custom theme for your project.
                  </p>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/docs/theme-generator">
                    <FileCode className="mr-2 h-4 w-4" />
                    Open Theme Generator
                  </Link>
                </Button>
                <p className="text-xs text-muted-foreground">
                  The generated code can be pasted directly into your globals.css file.
                </p>
              </div>
              <div className="flex-1">
                <CodeDisplay 
                  code={`"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { generateThemeFromColor } from "@/lib/theme-generator"

export function ThemeGenerator() {
  const [primaryColor, setPrimaryColor] = useState("#3b82f6")
  const [generated, setGenerated] = useState(false)
  const { setTheme } = useTheme()
  
  const handleGenerate = () => {
    // This would generate CSS variables based on the primary color
    const theme = generateThemeFromColor(primaryColor)
    document.documentElement.style.setProperty('--primary', theme.primary)
    // Apply other theme variables...
    
    setGenerated(true)
    // Optionally save theme to localStorage
  }
  
  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="primary-color">Primary Color</Label>
        <div className="flex gap-2">
          <Input 
            id="primary-color"
            type="color"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
            className="w-12 p-1 h-10"
          />
          <Input 
            type="text"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
            className="flex-1"
          />
        </div>
      </div>
      <Button onClick={handleGenerate} className="w-full">
        Generate Theme
      </Button>
    </div>
  )
}`} 
                  language="tsx"
                  fileName="components/theme-generator.tsx"
                  expandable={true}
                  maxHeight={250}
                />
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Best Practices */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b pb-4">
            <div className="p-1.5 rounded-md bg-primary/10 text-primary">
              <Lightbulb className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Theming Best Practices</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Palette className="h-8 w-8 text-blue-500" />,
                title: "Color Contrast",
                description: "Ensure sufficient contrast between text and background colors for accessibility. Test your color combinations with WCAG guidelines.",
              },
              {
                icon: <PaintBucket className="h-8 w-8 text-purple-500" />,
                title: "Semantic Colors",
                description: "Use colors consistently across your UI. Primary for main actions, destructive for dangerous operations, etc.",
              },
              {
                icon: <Eye className="h-8 w-8 text-green-500" />,
                title: "Test Both Modes",
                description: "Always test your theme in both light and dark modes to ensure good readability and visual hierarchy.",
              }
            ].map((item, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="mb-2">{item.icon}</div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <Alert className="my-8 border border-blue-100 dark:border-blue-800">
          <div className="flex">
            <PaintBucket className="h-5 w-5 text-blue-500 mr-2" />
            <div>
              <AlertTitle className="text-base">Ready to build your theme?</AlertTitle>
              <AlertDescription className="mt-2">
                You can create multiple themes and switch between them dynamically using the theme provider.
                Check out our advanced theming guide for more options.
              </AlertDescription>
              <div className="mt-4">
                <Link href="/docs/advanced-theming">
                <Button variant="outline" className="gap-1">
                  Advanced Theming
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </Alert>
      </div>
    </div>
  )
} 