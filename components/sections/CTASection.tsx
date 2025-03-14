"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  Github, 
  Code, 
  Star, 
  MousePointerClick, 
  Sparkles,
  Rocket,
  MailOpenIcon
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
      setEmail("")
    }
  }
  
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-small-black/[0.06] dark:bg-grid-small-white/[0.03] -z-10" />
      
      {/* Gradient background elements */}
      <div className="absolute left-0 top-1/4 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl -z-10" />
      <div className="absolute right-0 bottom-1/4 h-[30rem] w-[30rem] rounded-full bg-purple-500/10 blur-3xl -z-10" />
      
      {/* Decorative elements */}
      <div className="hidden lg:block absolute -right-16 top-24 w-44 h-44 border border-primary/20 rounded-full" />
      <div className="hidden lg:block absolute -left-20 bottom-32 w-32 h-32 border border-primary/20 rounded-full" />
      <div className="hidden lg:block absolute right-[20%] bottom-[20%] w-16 h-16 border border-primary/20 rounded-full" />
      
      <motion.div 
        className="absolute top-16 right-[30%] text-primary opacity-30"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Code className="h-14 w-14" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-32 left-[20%] text-primary opacity-20"
        animate={{ 
          y: [0, 10, 0],
          rotate: [0, -5, 0] 
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Star className="h-16 w-16" />
      </motion.div>
      
      <div className="container relative z-10">
        <motion.div 
          className="mx-auto max-w-[68rem] rounded-3xl bg-gradient-to-br from-background via-background/95 to-background/90 border shadow-xl p-8 md:p-12 lg:p-16 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="px-3.5 py-1.5 rounded-lg bg-background/50 border-primary/20">
                <Rocket className="mr-2 h-3.5 w-3.5 text-primary" />
                <span className="text-sm font-medium">Ready to launch?</span>
              </Badge>
              
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Start building <span className="bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text">beautiful UI</span> today
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-[90%]">
                Join thousands of developers who are already creating stunning interfaces with Feather UI. 
                Our components are designed to make your development workflow faster and more enjoyable.
              </p>
              
              <motion.div 
                className="space-y-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <p className="text-sm md:text-base">50+ customizable components</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                    <MousePointerClick className="h-4 w-4" />
                  </div>
                  <p className="text-sm md:text-base">Built with accessibility in mind</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                    <Github className="h-4 w-4" />
                  </div>
                  <p className="text-sm md:text-base">Open source and community-driven</p>
                </div>
              </motion.div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Button asChild size="lg" className="rounded-full px-8 w-full sm:w-auto">
                  <Link href="/docs" className="gap-2">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="rounded-full px-8 w-full sm:w-auto">
                  <Link href="https://github.com/feather-ui/feather-ui" className="gap-2">
                    <Github className="h-4 w-4" />
                    Star on GitHub
                  </Link>
                </Button>
              </div>
            </div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary/30 to-purple-500/30 blur-xl opacity-50 -z-10" />
              <div className="relative overflow-hidden rounded-xl border bg-background/30 backdrop-blur p-6 shadow-lg">
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
                <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl" />
                
                <h3 className="text-xl font-semibold mb-4">Join our newsletter</h3>
                <p className="text-muted-foreground mb-6">
                  Stay updated with the latest components, features, and news.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="h-12 pr-12 bg-background/50"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <div className="absolute right-3 top-3 text-muted-foreground">
                      <MailOpenIcon  className="h-5 w-5" />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-600 h-12"
                  >
                    {submitted ? "Subscribed!" : "Subscribe for updates"}
                  </Button>
                </form>
                
                <div className="flex items-center mt-6 pt-6 border-t">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i} 
                        className="w-8 h-8 rounded-full border-2 border-background bg-primary/10 flex items-center justify-center"
                      >
                        <span className="text-xs font-medium">{i === 4 ? '+' : ''}</span>
                      </div>
                    ))}
                  </div>
                  <div className="ml-3 text-sm text-muted-foreground">
                    Join 5,000+ developers
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Bottom stats/social proof */}
        <motion.div 
          className="max-w-3xl mx-auto mt-16 flex flex-wrap justify-center gap-x-16 gap-y-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="text-3xl font-bold">5,000+</div>
            <div className="text-sm text-muted-foreground">Developers</div>
          </div>
          <div>
            <div className="text-3xl font-bold">120+</div>
            <div className="text-sm text-muted-foreground">Contributors</div>
          </div>
          <div>
            <div className="text-3xl font-bold">180k+</div>
            <div className="text-sm text-muted-foreground">Downloads</div>
          </div>
          <div>
            <div className="text-3xl font-bold">15+</div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 