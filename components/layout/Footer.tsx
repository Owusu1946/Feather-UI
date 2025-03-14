"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Mail, 
  Heart, 
  ChevronUp,
  ArrowRight,
  Feather
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 3000)
      setEmail("")
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = [
    {
      title: "Products",
      links: [
        { name: "Components", href: "/components" },
        { name: "Templates", href: "/templates" },
        { name: "Blocks", href: "/blocks" },
        { name: "Icons", href: "/icons" },
        { name: "Themes", href: "/themes" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "Getting Started", href: "/docs/getting-started" },
        { name: "API Reference", href: "/docs/api" },
        { name: "Examples", href: "/examples" },
        { name: "Changelog", href: "/changelog" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
        { name: "Contributors", href: "/contributors" },
        { name: "Contact", href: "/contact" }
      ]
    }
  ]

  const socialLinks = [
    { name: "GitHub", icon: <Github className="h-5 w-5" />, href: "https://github.com/feather-ui/feather-ui" },
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/feather_ui" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/company/feather-ui" },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com/feather_ui" },
    { name: "YouTube", icon: <Youtube className="h-5 w-5" />, href: "https://youtube.com/c/feather-ui" }
  ]

  return (
    <footer className="relative border-t bg-muted/30">
      {/* Wave pattern at the top */}
      <div className="absolute top-0 left-0 w-full h-6 bg-[url('/wave-pattern.svg')] bg-repeat-x opacity-10 transform -translate-y-full" />
      
      <div className="container px-4 py-12 md:py-16 lg:py-20">
        {/* Top section with logo and newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 pb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Feather className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl">Feather.UI</span>
            </Link>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Beautifully designed components that you can copy and paste into your apps. 
              Accessible. Customizable. Open Source.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-3 max-w-sm">
              <p className="text-sm font-medium">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background/60"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" variant="default">
                  {subscribed ? "Subscribed!" : <ArrowRight className="h-4 w-4" />}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get the latest updates. No spam ever.
              </p>
            </form>
          </div>
          
          {/* Footer links */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              {footerLinks.map((category) => (
                <div key={category.title}>
                  <h3 className="font-semibold mb-3">{category.title}</h3>
                  <ul className="space-y-2.5">
                    {category.links.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <Separator className="bg-muted-foreground/20" />
        
        {/* Bottom section with social links and copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-6">
          <div className="flex flex-wrap items-center gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </motion.a>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-full"
              onClick={scrollToTop}
            >
              <ChevronUp className="h-4 w-4" />
              <span className="sr-only">Scroll to top</span>
            </Button>
          </div>
        </div>
        
        {/* Copyright and credits */}
        <div className="mt-8 pt-4 border-t border-muted-foreground/10 text-center md:text-left text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              &copy; {new Date().getFullYear()} Feather UI. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/privacy" className="hover:underline underline-offset-4">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:underline underline-offset-4">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:underline underline-offset-4">
                Cookie Policy
              </Link>
            </div>
            
            <div className="flex items-center gap-1.5">
              <span>Made with</span>
              <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />
              <span>by</span>
              <a
                href="https://twitter.com/feather_team"
                target="_blank"
                rel="noreferrer"
                className="font-medium hover:underline underline-offset-4"
              >
                Feather Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 