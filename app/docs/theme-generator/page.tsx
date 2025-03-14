"use client"

import React, { useState, useEffect } from "react"
import { Palette, Copy, Check, ArrowLeft, RefreshCw, Download } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { CodeDisplay } from "@/components/code-display"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Helper function to convert hex to HSL
function hexToHSL(hex: string): { h: number; s: number; l: number } {
  // Remove the # if present
  hex = hex.replace(/^#/, '')
  
  // Parse the hex values
  let r = parseInt(hex.substring(0, 2), 16) / 255
  let g = parseInt(hex.substring(2, 4), 16) / 255
  let b = parseInt(hex.substring(4, 6), 16) / 255
  
  // Find min and max values
  let max = Math.max(r, g, b)
  let min = Math.min(r, g, b)
  let delta = max - min
  
  // Calculate HSL values
  let h = 0
  let s = 0
  let l = (max + min) / 2
  
  if (delta !== 0) {
    s = l < 0.5 ? delta / (max + min) : delta / (2 - max - min)
    
    if (max === r) {
      h = ((g - b) / delta) % 6
    } else if (max === g) {
      h = (b - r) / delta + 2
    } else {
      h = (r - g) / delta + 4
    }
    
    h = Math.round(h * 60)
    if (h < 0) h += 360
  }
  
  s = Math.round(s * 100)
  l = Math.round(l * 100)
  
  return { h, s, l }
}

// Helper function to format HSL for CSS variables
function formatHSL(h: number, s: number, l: number): string {
  return `${h} ${s}% ${l}%`
}

// Generate theme from primary color
function generateThemeFromColor(primaryColor: string, contrastLevel = 0): Record<string, string> {
  const { h, s, l } = hexToHSL(primaryColor)
  
  // Calculate complementary and analogous colors
  const hueShift = 30
  const secondaryHue = (h + 210) % 360 // Complementary-ish
  const accentHue = (h + hueShift) % 360 // Slightly offset
  const destructiveHue = 0 // Red for destructive
  
  // Calculate saturation and lightness variations
  const foregroundSaturation = Math.max(0, s - 50)
  const backgroundSaturation = Math.max(0, s - 60)
  
  // Contrast level adjustments (-10 to +10)
  const contrastAdjustment = contrastLevel * 2
  
  // Create the theme
  return {
    primary: formatHSL(h, s, l),
    "primary-foreground": formatHSL(h, 10, 98),
    
    secondary: formatHSL(secondaryHue, Math.max(0, s - 60), 95 + contrastAdjustment),
    "secondary-foreground": formatHSL(secondaryHue, Math.max(0, s - 20), 10 - contrastAdjustment),
    
    accent: formatHSL(accentHue, Math.max(0, s - 60), 94 + contrastAdjustment),
    "accent-foreground": formatHSL(accentHue, Math.max(0, s - 20), 10 - contrastAdjustment),
    
    destructive: formatHSL(destructiveHue, 84, 60),
    "destructive-foreground": formatHSL(0, 0, 98),
    
    background: formatHSL(h, backgroundSaturation, 100),
    foreground: formatHSL(h, foregroundSaturation, 3.9),
    
    muted: formatHSL(h, Math.max(0, s - 65), 95 + contrastAdjustment),
    "muted-foreground": formatHSL(h, Math.max(0, s - 60), 46 - contrastAdjustment),
    
    card: formatHSL(h, backgroundSaturation, 100),
    "card-foreground": formatHSL(h, foregroundSaturation, 3.9),
    
    popover: formatHSL(h, backgroundSaturation, 100),
    "popover-foreground": formatHSL(h, foregroundSaturation, 3.9),
    
    border: formatHSL(h, Math.max(0, s - 80), 90 + contrastAdjustment),
    input: formatHSL(h, Math.max(0, s - 80), 90 + contrastAdjustment),
    ring: formatHSL(h, Math.max(0, s - 70), 3.9 - contrastAdjustment),
  }
}

// Generate dark theme from primary color
function generateDarkThemeFromColor(primaryColor: string, contrastLevel = 0): Record<string, string> {
  const { h, s, l } = hexToHSL(primaryColor)
  
  // Calculate complementary and analogous colors
  const hueShift = 30
  const secondaryHue = (h + 210) % 360
  const accentHue = (h + hueShift) % 360
  const destructiveHue = 0 // Red for destructive
  
  // Contrast level adjustments (-10 to +10)
  const contrastAdjustment = contrastLevel * 2
  
  // Create the dark theme
  return {
    primary: formatHSL(h, Math.max(0, s - 20), 80),
    "primary-foreground": formatHSL(h, 5, 10),
    
    secondary: formatHSL(secondaryHue, Math.max(0, s - 65), 15.9 - contrastAdjustment),
    "secondary-foreground": formatHSL(secondaryHue, Math.max(0, s - 30), 98 + contrastAdjustment),
    
    accent: formatHSL(accentHue, Math.max(0, s - 65), 15.9 - contrastAdjustment),
    "accent-foreground": formatHSL(accentHue, Math.max(0, s - 30), 98 + contrastAdjustment),
    
    destructive: formatHSL(destructiveHue, 62.8, 30.6),
    "destructive-foreground": formatHSL(0, 0, 98),
    
    background: formatHSL(h, Math.max(0, s - 70), 3.9),
    foreground: formatHSL(h, Math.max(0, s - 80), 98),
    
    muted: formatHSL(h, Math.max(0, s - 70), 15.9 - contrastAdjustment),
    "muted-foreground": formatHSL(h, Math.max(0, s - 60), 64.9 + contrastAdjustment),
    
    card: formatHSL(h, Math.max(0, s - 70), 3.9),
    "card-foreground": formatHSL(h, Math.max(0, s - 80), 98),
    
    popover: formatHSL(h, Math.max(0, s - 70), 3.9),
    "popover-foreground": formatHSL(h, Math.max(0, s - 80), 98),
    
    border: formatHSL(h, Math.max(0, s - 65), 15.9 - contrastAdjustment),
    input: formatHSL(h, Math.max(0, s - 65), 15.9 - contrastAdjustment),
    ring: formatHSL(h, Math.max(0, s - 60), 83.9 + contrastAdjustment),
  }
}

// Generate CSS code from theme object
function generateCSS(lightTheme: Record<string, string>, darkTheme: Record<string, string>): string {
  let css = `@tailwind base;
@tailwind components;
@tailwind utilities;
 
@layer base {
  :root {
`

  // Add light theme variables
  Object.entries(lightTheme).forEach(([key, value]) => {
    css += `    --${key}: ${value};\n`
  })

  css += `
    --radius: 0.5rem;
  }
 
  .dark {
`

  // Add dark theme variables
  Object.entries(darkTheme).forEach(([key, value]) => {
    css += `    --${key}: ${value};\n`
  })

  css += `  }
}`

  return css
}

export default function ThemeGeneratorPage() {
  const [primaryColor, setPrimaryColor] = useState("#3b82f6")
  const [contrastLevel, setContrastLevel] = useState(0)
  const [copied, setCopied] = useState(false)
  const { setTheme, theme } = useTheme()
  
  const [lightTheme, setLightTheme] = useState<Record<string, string>>({})
  const [darkTheme, setDarkTheme] = useState<Record<string, string>>({})
  const [cssCode, setCssCode] = useState("")
  
  // Generate themes when primary color or contrast level changes
  useEffect(() => {
    const light = generateThemeFromColor(primaryColor, contrastLevel)
    const dark = generateDarkThemeFromColor(primaryColor, contrastLevel)
    
    setLightTheme(light)
    setDarkTheme(dark)
    setCssCode(generateCSS(light, dark))
    
    // Apply the generated theme to the document for immediate preview
    const currentTheme = theme === 'dark' ? dark : light
    
    // Apply all theme variables directly to the root element
    Object.entries(currentTheme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value)
    })
    
    // Store original theme values to restore when component unmounts
    return () => {
      // Optional: restore original theme when unmounting
      // This would require storing the original values when the component mounts
    }
  }, [primaryColor, contrastLevel, theme]) // Add theme as a dependency
  
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(cssCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  const downloadCSS = () => {
    const blob = new Blob([cssCode], { type: 'text/css' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'globals.css'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" asChild className="gap-1">
            <Link href="/docs/theming">
              <ArrowLeft className="h-4 w-4" />
              Back to Theming
            </Link>
          </Button>
          <Badge variant="outline" className="px-3 py-1">Beta</Badge>
        </div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Theme Generator
        </h1>
        <p className="text-xl text-muted-foreground">
          Create a custom theme for your Feather UI project.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Controls */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-primary" />
                Color Settings
              </CardTitle>
              <CardDescription>
                Choose your primary color and adjust settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
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
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="contrast">Contrast Level</Label>
                  <span className="text-sm text-muted-foreground">{contrastLevel}</span>
                </div>
                <Slider
                  id="contrast"
                  min={-10}
                  max={10}
                  step={1}
                  value={[contrastLevel]}
                  onValueChange={(value) => setContrastLevel(value[0])}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Lower</span>
                  <span>Default</span>
                  <span>Higher</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button 
                variant="outline" 
                className="w-full gap-2"
                onClick={() => {
                  setPrimaryColor("#3b82f6")
                  setContrastLevel(0)
                }}
              >
                <RefreshCw className="h-4 w-4" />
                Reset to Default
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Preview Theme Mode</CardTitle>
              <CardDescription>
                Switch between light and dark to preview
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-2">
                <Button 
                  variant={theme === "light" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => {
                    setTheme("light")
                    // Apply light theme immediately
                    Object.entries(lightTheme).forEach(([key, value]) => {
                      document.documentElement.style.setProperty(`--${key}`, value)
                    })
                  }}
                >
                  Light
                </Button>
                <Button 
                  variant={theme === "dark" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => {
                    setTheme("dark")
                    // Apply dark theme immediately
                    Object.entries(darkTheme).forEach(([key, value]) => {
                      document.documentElement.style.setProperty(`--${key}`, value)
                    })
                  }}
                >
                  Dark
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Preview */}
        <div className="md:col-span-2 space-y-6">
          <Tabs defaultValue="preview">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="preview">Theme Preview</TabsTrigger>
              <TabsTrigger value="code">Generated CSS</TabsTrigger>
            </TabsList>
            
            <TabsContent value="preview" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>UI Components</CardTitle>
                  <CardDescription>Preview your theme on UI elements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Buttons</h4>
                      <div className="flex flex-wrap gap-2">
                        <Button>Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="destructive">Destructive</Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Cards & Surfaces</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-16 bg-card border border-border rounded-md flex items-center justify-center text-xs text-muted-foreground">Card</div>
                        <div className="h-16 bg-muted rounded-md flex items-center justify-center text-xs text-muted-foreground">Muted</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Colors</h4>
                    <div className="grid grid-cols-5 gap-2">
                      <div className="space-y-1">
                        <div className="h-8 bg-primary rounded-md"></div>
                        <p className="text-xs text-center">Primary</p>
                      </div>
                      <div className="space-y-1">
                        <div className="h-8 bg-secondary rounded-md"></div>
                        <p className="text-xs text-center">Secondary</p>
                      </div>
                      <div className="space-y-1">
                        <div className="h-8 bg-accent rounded-md"></div>
                        <p className="text-xs text-center">Accent</p>
                      </div>
                      <div className="space-y-1">
                        <div className="h-8 bg-muted rounded-md"></div>
                        <p className="text-xs text-center">Muted</p>
                      </div>
                      <div className="space-y-1">
                        <div className="h-8 bg-destructive rounded-md"></div>
                        <p className="text-xs text-center">Destructive</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="code" className="space-y-4 mt-4">
              <div className="flex gap-2 justify-end">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-1"
                  onClick={downloadCSS}
                >
                  <Download className="h-4 w-4" />
                  Download CSS
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-1"
                  onClick={copyToClipboard}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy Code
                    </>
                  )}
                </Button>
              </div>
              
              <CodeDisplay 
                code={cssCode}
                language="css"
                fileName="globals.css"
                expandable={true}
                maxHeight={400}
              />
              
              <div className="bg-muted p-4 rounded-lg text-sm">
                <p>Add this code to your <code className="text-xs font-mono bg-background px-1 py-0.5 rounded">globals.css</code> file to apply your custom theme.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
} 