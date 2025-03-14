"use client"

import Link from "next/link"
import { ArrowRight, Code, Copy, Star, Sparkles, FeatherIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden border-b">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.05] bg-[size:20px_20px] -z-10" />
      
      {/* Colored gradient orbs */}
      <div className="absolute top-1/4 -left-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl -z-10" />
      
      <div className="container relative px-4 py-20 md:py-32 lg:py-40">
        {/* GitHub stars badge */}
        <motion.div 
          className="absolute top-6 right-8 md:right-24 lg:top-12 lg:right-32"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Badge variant="outline" className="gap-1 border border-orange-200/20 bg-orange-50/5 text-orange-400 dark:border-orange-500/20 px-3 py-1.5 backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-orange-400 text-orange-400" />
            <span className="text-xs font-medium">1.2k stars on GitHub</span>
          </Badge>
        </motion.div>
        
        <div className="mx-auto flex max-w-[68rem] flex-col items-center space-y-8 text-center">
          {/* Small badge intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-4 backdrop-blur bg-background/30">
              <FeatherIcon className="mr-1 h-3 w-3" /> Design. Build. Ship.
            </Badge>
          </motion.div>
          
          {/* Main heading with gradient text */}
          <motion.h1 
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="block">Build your next UI with</span>
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 text-transparent bg-clip-text">
              Feather.UI
            </span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="max-w-[44rem] leading-normal text-muted-foreground/90 sm:text-xl sm:leading-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Beautifully designed components that you can copy and paste into your apps. 
            <span className="text-primary font-medium"> Accessible. Customizable. Open Source.</span>
          </motion.p>
          
          {/* Call to action buttons */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button size="lg" className="h-12 px-6 gap-2 rounded-full" asChild>
              <Link href="/docs">
                Get Started <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" className="h-12 px-6 rounded-full" asChild>
              <Link href="/components">
                <Code className="mr-1.5 h-4 w-4" /> Components
              </Link>
            </Button>
          </motion.div>
          
          {/* Code preview card */}
          <motion.div 
            className="relative mt-8 w-full max-w-3xl overflow-hidden rounded-xl border bg-background/30 backdrop-blur-md shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="flex items-center border-b px-4 py-2">
              <div className="flex space-x-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-xs text-muted-foreground">Install the dependencies</div>
              <Button variant="ghost" size="icon" className="ml-auto h-7 w-7">
                <Copy className="h-3.5 w-3.5" />
              </Button>
            </div>
            <pre className="overflow-x-auto p-4 text-sm text-left">
              <code className="language-bash">
                <span className="text-muted-foreground">$</span> npm install feather-ui
              </code>
            </pre>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm text-muted-foreground">Components</div>
            </div>
            <div>
              <div className="text-3xl font-bold">15k+</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </div>
            <div>
              <div className="text-3xl font-bold">99%</div>
              <div className="text-sm text-muted-foreground">Accessibility</div>
            </div>
            <div>
              <div className="text-3xl font-bold">MIT</div>
              <div className="text-sm text-muted-foreground">License</div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Animated wave divider */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-[url('/wave.svg')] bg-repeat-x bg-center opacity-10"></div>
    </section>
  )
} 