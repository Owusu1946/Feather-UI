"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Search, X, Filter, CheckIcon, ChevronDown, ExternalLink, Package } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { DropdownMenu, DropdownMenuContent, DropdownMenuCheckboxItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { componentRegistry } from "@/lib/component-registry"

// Define component categories for filtering
const categories = [
  "all",
  ...Array.from(new Set(componentRegistry.map(item => item.category))).sort(),
]

export default function ComponentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [showNewOnly, setShowNewOnly] = useState(false)
  const [view, setView] = useState<"grid" | "list">("grid")
  const [searchFocused, setSearchFocused] = useState(false)
  const [componentCount, setComponentCount] = useState(0)
  
  // Filter components based on search query and active category
  const filteredComponents = componentRegistry
    .filter(component => component.name !== "Sidebar")
    .filter(component => {
      // Filter by new flag if enabled
      if (showNewOnly && !component.new) {
        return false
      }
      
      const matchesSearch = 
        component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        component.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        component.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCategory = activeCategory === "all" || component.category === activeCategory
      
      return matchesSearch && matchesCategory
    })
  
  // Update component count for display
  useEffect(() => {
    setComponentCount(filteredComponents.length)
  }, [filteredComponents.length])
  
  // Clear search handler
  const handleClearSearch = () => {
    setSearchQuery("")
  }
  
  return (
    <div className="container py-10 px-4 md:px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-lg border bg-gradient-to-b from-background to-muted/20 p-8 mb-10">
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm font-medium mb-2">
            <Package className="mr-1 h-3 w-3" />
            <span>{componentRegistry.filter(c => c.name !== "Sidebar").length} components</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Components
          </h1>
          <p className="mt-3 text-xl text-muted-foreground max-w-3xl">
            Browse our collection of beautiful, accessible UI components designed for modern web applications.
          </p>
        </div>
        <div className="absolute right-8 top-8 hidden opacity-10 lg:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="218"
            height="109"
            viewBox="0 0 218 109"
            fill="none"
            className="h-[150px] w-[300px] rotate-[10deg]"
          >
            <rect width="98" height="86" x="120" y="23" fill="currentColor" rx="3"></rect>
            <rect width="98" height="86" x="13" fill="currentColor" rx="3"></rect>
            <rect width="98" height="86" fill="currentColor" rx="3"></rect>
          </svg>
        </div>
      </div>
      
      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
        <div className={cn(
          "relative w-full md:max-w-md transition-all duration-200 ease-in-out",
          searchFocused ? "md:max-w-xl" : ""
        )}>
          <div className="relative">
            <Search className={cn(
              "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors",
              searchFocused ? "text-primary" : "text-muted-foreground"
            )} />
            <Input
              type="search"
              placeholder="Search components..."
              className="pl-10 py-6 h-12 pr-10 ring-offset-background focus-visible:ring-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7"
                onClick={handleClearSearch}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Clear search</span>
              </Button>
            )}
          </div>
          {searchFocused && searchQuery && (
            <div className="absolute top-full left-0 right-0 z-10 mt-1 rounded-md border bg-background shadow-md">
              <div className="p-2 text-xs text-muted-foreground">
                Press Enter to search for "{searchQuery}"
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-3 ml-auto">
          <TooltipProvider>
            <DropdownMenu>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-10 gap-1">
                      <Filter className="h-4 w-4" />
                      <span className="hidden sm:inline-block">Filter</span>
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent>Filter components</TooltipContent>
              </Tooltip>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuCheckboxItem
                  checked={showNewOnly}
                  onCheckedChange={setShowNewOnly}
                >
                  Show new only
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-10"
                  onClick={() => setView(view === "grid" ? "list" : "grid")}
                >
                  {view === "grid" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                {view === "grid" ? "List view" : "Grid view"}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      
      {/* Category Tabs */}
      <div className="mb-8 overflow-auto pb-2">
        <div className="flex space-x-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              className={cn(
                "min-w-[100px] capitalize"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
              {activeCategory === category && componentCount > 0 && (
                <Badge variant="secondary" className="ml-2 bg-primary/20 hover:bg-primary/20 text-primary-foreground">
                  {
                    category === "all" 
                      ? componentCount 
                      : filteredComponents.filter(c => c.category === category).length
                  }
                </Badge>
              )}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Component Grid/List */}
        <div className="flex-1">
          {filteredComponents.length === 0 ? (
            <div className="flex flex-col h-[400px] items-center justify-center rounded-lg border border-dashed p-8 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                <Package className="h-10 w-10 text-muted-foreground/60" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">No components found</h3>
              <p className="mt-2 text-center text-sm text-muted-foreground max-w-sm mx-auto mb-6">
                {searchQuery 
                  ? `No components match "${searchQuery}"${activeCategory !== "all" ? ` in ${activeCategory}` : ''}`
                  : "Try adjusting your filters to find what you're looking for."}
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("")
                  setActiveCategory("all")
                  setShowNewOnly(false)
                }}
              >
                Reset filters
              </Button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-medium">
                  {filteredComponents.length} {filteredComponents.length === 1 ? 'component' : 'components'} 
                  {activeCategory !== "all" && ` in ${activeCategory}`}
                  {showNewOnly && " (new only)"}
                </h2>
              </div>
              <div className={cn(
                view === "grid" 
                  ? "grid gap-6 md:grid-cols-2 xl:grid-cols-3" 
                  : "flex flex-col gap-4"
              )}>
                {filteredComponents.map((component) => (
                  <Card 
                    key={component.name} 
                    className={cn(
                      "overflow-hidden flex flex-col",
                      view === "grid" ? "h-full" : "",
                      view === "list" ? "flex-row" : "",
                      component.new && "ring-1 ring-primary/20"
                    )}
                  >
                    {view === "grid" ? (
                      // Grid View
                      <>
                        <CardHeader className="p-6">
                          <div className="flex items-center justify-between mb-2">
                            <CardTitle className="text-xl">{component.name}</CardTitle>
                            {component.new && (
                              <Badge className="bg-primary hover:bg-primary">New</Badge>
                            )}
                          </div>
                          <CardDescription className="line-clamp-2 text-base">
                            {component.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-0 pt-0 flex-grow">
                          <div className="aspect-[4/3] w-full bg-muted/40 border-y flex items-center justify-center p-4 overflow-hidden transition-colors group hover:bg-muted/50">
                            <div className="w-full h-full flex items-center justify-center transition-transform group-hover:scale-105">
                              {React.createElement(component.preview, { variant: "default" })}
                            </div>
                          </div>
                          <div className="p-6 pt-4">
                            <div className="flex flex-wrap gap-2">
                              {component.tags.slice(0, 4).map((tag) => (
                                <Badge key={tag} variant="secondary" className="px-2 py-0.5 text-xs font-normal">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="p-6 pt-0 mt-auto">
                          <Button asChild size="default" className="w-full gap-1 group">
                            <Link href={`/docs/components/${component.name.toLowerCase()}`}>
                              View Details
                              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </>
                    ) : (
                      // List View
                      <>
                        <div className="flex-shrink-0 w-32 h-32 border-r flex items-center justify-center">
                          <div className="p-4 flex items-center justify-center">
                            {React.createElement(component.preview, { variant: "default" })}
                          </div>
                        </div>
                        <div className="flex flex-col flex-1 p-4">
                          <div className="flex items-center justify-between mb-2">
                            <CardTitle className="text-lg">{component.name}</CardTitle>
                            {component.new && (
                              <Badge className="bg-primary hover:bg-primary">New</Badge>
                            )}
                          </div>
                          <CardDescription className="line-clamp-2 mb-4">
                            {component.description}
                          </CardDescription>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {component.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="secondary" className="px-2 py-0.5 text-xs font-normal">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="mt-auto flex justify-end">
                            <Button asChild size="sm" className="gap-1 group">
                              <Link href={`/docs/components/${component.name.toLowerCase()}`}>
                                View Details
                                <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </>
                    )}
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* Component Count Footer */}
      {filteredComponents.length > 0 && (
        <div className="mt-12 pt-6 border-t">
          <p className="text-sm text-muted-foreground text-center">
            Showing {filteredComponents.length} of {componentRegistry.filter(c => c.name !== "Sidebar").length} components
          </p>
        </div>
      )}
    </div>
  )
} 