"use client"

import Link from "next/link"
import { Github, Moon, Search, Sun, Feather, Check, Laptop, Command, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"
import { useState, useEffect, useCallback } from "react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from "@/components/ui/command"
import { useRouter } from "next/navigation"
import { VisuallyHidden } from "@/components/ui/visually-hidden"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Navigation links data
const navLinks = [
  { title: "Documentation", href: "/docs", group: "Pages" },
  { title: "Installation", href: "/docs/installation", group: "Documentation" },
  { title: "Theming", href: "/docs/theming", group: "Documentation" },
  { title: "Theme Generator", href: "/docs/theme-generator", group: "Tools" },
  { title: "Advanced Theming", href: "/docs/advanced-theming", group: "Documentation" },
  { title: "Components Overview", href: "/docs/components", group: "Components" },
  { title: "Button", href: "/docs/components/button", group: "Components" },
  { title: "Card", href: "/docs/components/card", group: "Components" },
  { title: "Dialog", href: "/docs/components/dialog", group: "Components" },
  { title: "Input", href: "/docs/components/input", group: "Components" },
  { title: "Tabs", href: "/docs/components/tabs", group: "Components" },
  { title: "Sidebar", href: "/docs/components/sidebar", group: "Components" },
]

// Main navigation items
const mainNavItems = [
  { title: "Docs", href: "/docs" },
  { title: "Components", href: "/components" },
  { title: "Blocks", href: "/blocks" },
  { title: "Charts", href: "/charts" },
  { title: "Themes", href: "/themes" },
  { title: "Colors", href: "/colors" },
]

// Group items by category
const groupedLinks = navLinks.reduce((acc, item) => {
  const group = acc[item.group] || []
  group.push(item)
  acc[item.group] = group
  return acc
}, {} as Record<string, typeof navLinks>)

// Generate default theme values - simplified version of what's in the theme generator
function generateLightThemeDefaults() {
  return {
    primary: "215 100% 50%", // Blue
    "primary-foreground": "215 10% 98%",
    secondary: "215 40% 95%",
    "secondary-foreground": "215 40% 10%",
    background: "0 0% 100%",
    foreground: "215 30% 3.9%",
    muted: "215 35% 95%",
    "muted-foreground": "215 20% 46%",
    border: "215 20% 90%",
  }
}

function generateDarkThemeDefaults() {
  return {
    primary: "215 80% 80%", // Blue
    "primary-foreground": "215 5% 10%",
    secondary: "215 35% 15.9%",
    "secondary-foreground": "215 30% 98%",
    background: "215 30% 3.9%",
    foreground: "215 20% 98%",
    muted: "215 30% 15.9%",
    "muted-foreground": "215 20% 64.9%",
    border: "215 35% 15.9%",
  }
}

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  
  // Store default themes
  const [lightTheme] = useState(generateLightThemeDefaults())
  const [darkTheme] = useState(generateDarkThemeDefaults())

  // Toggle command palette visibility
  const toggleSearch = useCallback(() => {
    setOpen(prev => !prev)
  }, [])

  // Run the command to navigate to a page
  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  // Apply theme changes directly to CSS variables for immediate effect
  const applyTheme = useCallback((newTheme: string) => {
    // Set the theme using next-themes
    setTheme(newTheme)
    
    // Apply CSS variables directly for immediate effect
    const themeVars = newTheme === "dark" ? darkTheme : lightTheme
    
    // Apply all theme variables directly to the root element
    Object.entries(themeVars).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value)
    })
    
    // Force the dark class to be applied/removed immediately
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkTheme, lightTheme, setTheme])

  // Enhanced theme toggle function with immediate feedback
  const toggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark"
    applyTheme(newTheme)
  }, [theme, applyTheme])

  // Close mobile menu after navigation
  const handleMobileNavigation = (href: string) => {
    setMobileMenuOpen(false)
    router.push(href)
  }

  // Handle mounting to avoid hydration mismatch with theme
  useEffect(() => {
    setMounted(true)
    
    // When component mounts, ensure the theme is properly applied
    if (typeof theme === 'string') {
      // Force apply the current theme to make sure styles are consistent
      applyTheme(theme)
    }
  }, [applyTheme, theme])

  useEffect(() => {
    // Setup keyboard shortcut listener
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        e.preventDefault()
        toggleSearch()
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [toggleSearch])

  if (!mounted) {
    return (
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          {/* Simplified skeleton during initial load */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2 mr-6">
              <Feather className="h-6 w-6" />
              <span className="font-semibold text-lg">Feather.UI</span>
            </div>
          </div>
          <div></div>
        </div>
      </header>
    )
  }

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 mr-6">
              <Feather className="h-6 w-6" />
              <span className="font-semibold text-lg">Feather.UI</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              {mainNavItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className="transition-colors hover:text-foreground text-foreground/60"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center justify-end space-x-4">
            {/* Desktop Search */}
            <div className="hidden md:flex relative w-full max-w-sm items-center">
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search documentation..."
                  className="w-full bg-background pl-8 md:w-[200px] lg:w-[300px]"
                  onClick={toggleSearch}
                  readOnly
                />
                <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </div>
            </div>
            
            {/* Mobile Search Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9"
              onClick={toggleSearch}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            
            {/* GitHub and Theme Toggle */}
            <div className="flex items-center space-x-1">
              <Link href="https://github.com/yourusername/feather-ui" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                onClick={toggleTheme}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="md:hidden h-9 w-9"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[350px] pr-0">
                <div className="flex flex-col h-full">
                  <div className="px-4 py-3 border-b">
                    <h2 className="text-lg font-semibold">Navigation</h2>
                  </div>
                  
                  <div className="flex-1 overflow-auto py-4">
                    <nav className="flex flex-col space-y-4">
                      {mainNavItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="px-4 py-2 text-base font-medium transition-colors hover:bg-muted"
                          onClick={() => handleMobileNavigation(item.href)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </nav>
                    
                    <div className="mt-6 border-t pt-4">
                      <div className="px-4 mb-2 text-sm font-semibold text-muted-foreground">
                        Components
                      </div>
                      <nav className="flex flex-col space-y-2">
                        {Object.entries(groupedLinks)
                          .filter(([group]) => group === "Components")
                          .flatMap(([_, items]) => items)
                          .map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="px-4 py-2 text-sm transition-colors hover:bg-muted"
                              onClick={() => handleMobileNavigation(item.href)}
                            >
                              {item.title}
                            </Link>
                          ))}
                      </nav>
                    </div>
                    
                    <div className="mt-4 border-t pt-4 px-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-muted-foreground">Theme</span>
                        <Button variant="ghost" size="icon" onClick={toggleTheme}>
                          {theme === "dark" ? (
                            <Sun className="h-4 w-4" />
                          ) : (
                            <Moon className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Command Palette Dialog with an accessible title */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="flex items-center border-b px-3">
          <Command className="h-4 w-4 text-muted-foreground mr-2" />
          <h2 id="command-dialog-title" className="text-sm font-medium">Search Commands</h2>
          <VisuallyHidden>
            <button onClick={() => setOpen(false)}>Close</button>
          </VisuallyHidden>
        </div>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          {Object.entries(groupedLinks).map(([group, items]) => (
            <CommandGroup key={group} heading={group}>
              {items.map(item => (
                <CommandItem
                  key={item.href}
                  onSelect={() => runCommand(() => router.push(item.href))}
                >
                  {item.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
          
          <CommandSeparator />
          
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => applyTheme("light"))}>
              <Sun className="mr-2 h-4 w-4" />
              Light Theme
              {theme === "light" && <Check className="ml-auto h-4 w-4" />}
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => applyTheme("dark"))}>
              <Moon className="mr-2 h-4 w-4" />
              Dark Theme
              {theme === "dark" && <Check className="ml-auto h-4 w-4" />}
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => applyTheme("system"))}>
              <Laptop className="mr-2 h-4 w-4" />
              System Theme
              {theme === "system" && <Check className="ml-auto h-4 w-4" />}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
} 