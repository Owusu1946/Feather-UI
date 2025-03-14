"use client"

import { FeatureCard } from "@/components/feature-card"
import { motion } from "framer-motion"
import { 
  Code, Layers, Package, Paintbrush, 
  Bot, Sliders, ArrowRight, Sparkles 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FeaturesSection() {
  const features = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Open Code",
      description: "The top layer of your component code is open for modification.",
      delay: 0.1
    },
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "Composition",
      description: "Every component uses a common, composable interface, making them predictable.",
      delay: 0.2
    },
    {
      icon: <Package className="h-10 w-10 text-primary" />,
      title: "Distribution",
      description: "A flat-file schema and command-line tool make it easy to distribute components.",
      delay: 0.3
    },
    {
      icon: <Paintbrush className="h-10 w-10 text-primary" />,
      title: "Beautiful Defaults",
      description: "Carefully chosen default styles, so you get great design out-of-the-box.",
      delay: 0.4
    },
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: "AI-Ready",
      description: "Open code for LLMs to read, understand, and improve.",
      delay: 0.5
    },
    {
      icon: <Sliders className="h-10 w-10 text-primary" />,
      title: "Customizable",
      description: "Tailor components to match your brand and design system.",
      delay: 0.6
    }
  ]

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-small-black/[0.1] dark:bg-grid-small-white/[0.03] -z-10" />
      
      {/* Gradient background elements */}
      <div className="absolute -left-20 -top-20 h-[30rem] w-[30rem] rounded-full bg-purple-500/10 blur-3xl -z-10" />
      <div className="absolute -right-20 bottom-0 h-[40rem] w-[40rem] rounded-full bg-cyan-500/10 blur-3xl -z-10" />
      
      <div className="container relative z-10">
        {/* Heading Section with animated reveal */}
        <motion.div 
          className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-3 border rounded-full text-sm font-medium bg-background/50 backdrop-blur">
            <Sparkles className="mr-2 h-3.5 w-3.5 text-primary" />
            <span className="bg-gradient-to-r from-primary/70 to-primary bg-clip-text text-transparent">
              Why Feather.UI?
            </span>
          </div>
          
          <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Features that <span className="text-primary">elevate</span> your UI
          </h2>
          
          <p className="max-w-[85%] text-lg leading-relaxed text-muted-foreground/90 md:text-xl md:leading-8">
            This isn't just another component library. It's a collection of principles that help you build better
            design systems with less effort and more consistency.
          </p>
        </motion.div>

        {/* Feature Cards Grid with staggered animation */}
        <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-3 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl border bg-background/50 p-6 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                {/* Card shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/10 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Card content */}
                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                    {feature.icon}
                  </div>
                  
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action below features */}
        <motion.div 
          className="mt-16 flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex h-12 overflow-hidden rounded-full border bg-background/50 p-1 backdrop-blur">
            <div className="flex items-center divide-x">
              <div className="px-4 text-sm font-medium">Ready to get started?</div>
              <Button asChild className="rounded-full h-10" variant="default">
                <Link href="/docs" className="flex items-center px-4">
                  Explore components
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}