import React from "react"
import { CheckCircle, FileCode, Terminal, Palette, Braces, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CodeDisplay } from "@/components/code-display"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InstallationPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-10">
        <div className="border-b pb-6">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Installation
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Get up and running with Feather UI in your project.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="px-3 py-1">Step 1</Badge>
            <h2 className="text-2xl font-bold tracking-tight">Check prerequisites</h2>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="h-5 w-5 text-primary" />
                <span>System Requirements</span>
              </CardTitle>
              <CardDescription>
                Before installing, ensure your project meets these requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { name: "React 18+", description: "Required for component functionality" },
                  { name: "Next.js 13+", description: "For Next.js applications only" },
                  { name: "Tailwind CSS 3+", description: "Required for styling components" }
                ].map((req) => (
                  <li key={req.name} className="flex flex-col p-4 rounded-lg border">
                    <span className="font-medium flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {req.name}
                    </span>
                    <span className="text-sm text-muted-foreground mt-1">{req.description}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="px-3 py-1">Step 2</Badge>
            <h2 className="text-2xl font-bold tracking-tight">Install packages</h2>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="h-5 w-5 text-primary" />
                <span>Dependencies</span>
              </CardTitle>
              <CardDescription>
                Install Feather UI and its peer dependencies using your preferred package manager
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="npm" className="w-full">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="npm">npm</TabsTrigger>
                  <TabsTrigger value="yarn">yarn</TabsTrigger>
                  <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                </TabsList>
                <TabsContent value="npm">
                  <CodeDisplay 
                    code={`npm install @feather-ui/react tailwindcss-animate class-variance-authority clsx tailwind-merge`} 
                    language="bash"
                    fileName="Terminal"
                  />
                </TabsContent>
                <TabsContent value="yarn">
                  <CodeDisplay 
                    code={`yarn add @feather-ui/react tailwindcss-animate class-variance-authority clsx tailwind-merge`} 
                    language="bash"
                    fileName="Terminal"
                  />
                </TabsContent>
                <TabsContent value="pnpm">
                  <CodeDisplay 
                    code={`pnpm add @feather-ui/react tailwindcss-animate class-variance-authority clsx tailwind-merge`} 
                    language="bash"
                    fileName="Terminal"
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="px-3 py-1">Step 3</Badge>
            <h2 className="text-2xl font-bold tracking-tight">Configure Tailwind CSS</h2>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCode className="h-5 w-5 text-primary" />
                <span>Update your Tailwind configuration</span>
              </CardTitle>
              <CardDescription>
                Add Feather UI components to your content paths and configure theme settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeDisplay 
                code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    // Add this line to include Feather UI components
    './node_modules/@feather-ui/react/dist/**/*.{js,ts,jsx,tsx}',	
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}`} 
                language="javascript"
                fileName="tailwind.config.js"
                expandable={true}
                maxHeight={300}
              />
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium flex items-center gap-2 mb-2">
                  <ChevronRight className="h-4 w-4" />
                  Important Note
                </h4>
                <p className="text-sm text-muted-foreground">
                  Make sure to include the Feather UI components path in your content array to ensure 
                  all component styles are properly included in your build.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="px-3 py-1">Step 4</Badge>
            <h2 className="text-2xl font-bold tracking-tight">Add CSS Variables</h2>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-primary" />
                <span>Configure your color scheme</span>
              </CardTitle>
              <CardDescription>
                Add these CSS variables to your global stylesheet for proper component styling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeDisplay 
                code={`@tailwind base;
@tailwind components;
@tailwind utilities;
 
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
 
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
 
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
 
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
 
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
 
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
 
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
 
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
 
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 10% 3.9%;
 
    --radius: 0.5rem;
  }
 
  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
 
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
 
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
 
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
 
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
 
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
 
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
 
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
 
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
  }
}`} 
                language="css"
                fileName="globals.css"
                expandable={true}
                maxHeight={300}
              />
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium flex items-center gap-2 mb-2">
                  <ChevronRight className="h-4 w-4" />
                  Customization
                </h4>
                <p className="text-sm text-muted-foreground">
                  You can customize these color values to match your brand by changing the HSL values. 
                  Both light and dark mode themes are included.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 border-green-200 dark:border-green-900">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">You're all set!</h3>
                <p className="text-muted-foreground mb-4">
                  You can now start using Feather UI components in your project. Here's a sample component:
                </p>
                <CodeDisplay 
                  code={`import { Button } from "@/components/ui/button"

export function MyComponent() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My First Feather UI Component</h2>
      <Button variant="default">Click Me</Button>
    </div>
  )
}`}
                  language="tsx"
                  fileName="MyComponent.tsx"
                />
                <div className="mt-6 flex gap-4">
                  <Button variant="default">
                    <Braces className="mr-2 h-4 w-4" />
                    Explore Components
                  </Button>
                  <Button variant="outline">View Examples</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 