"use client"

import { useState, useEffect } from "react"
import { Search, Code, Copy, Check, Menu, X } from "lucide-react"
import { motion } from "framer-motion"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ComponentDisplay } from "@/components/component-display"
import { componentRegistry } from "@/lib/component-registry"

export default function ComponentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedComponent, setSelectedComponent] = useState<any>(componentRegistry[0])
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  
  // Get unique categories
  const categories = ["all", ...Array.from(new Set(componentRegistry.map(component => component.category)))].sort()
  
  // Group components by category for sidebar
  const groupedComponents = categories.reduce((acc, category) => {
    if (category === "all") return acc;
    
    acc[category] = componentRegistry.filter(component => component.category === category);
    return acc;
  }, {} as Record<string, typeof componentRegistry>);
  
  // Filter components based on search query
  const filteredComponents = componentRegistry.filter(component => {
    const matchesSearch = !searchQuery || 
      component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || component.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Handle component selection
  const handleComponentSelect = (component: any) => {
    setSelectedComponent(component);
    setIsMobileOpen(false);
  };

  // Set initial component on page load
  useEffect(() => {
    if (filteredComponents.length > 0 && !selectedComponent) {
      setSelectedComponent(filteredComponents[0]);
    }
  }, [filteredComponents, selectedComponent]);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2 md:gap-4">
            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0 pt-10">
                <MobileSidebar 
                  categories={categories}
                  groupedComponents={groupedComponents}
                  selectedComponent={selectedComponent}
                  onComponentSelect={handleComponentSelect}
                  onCategorySelect={setSelectedCategory}
                  selectedCategory={selectedCategory}
                />
              </SheetContent>
            </Sheet>
            <h1 className="text-xl font-bold">Components</h1>
          </div>
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search components..."
              className="pl-9"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      <div className="container flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10">
        {/* Sidebar (Desktop) */}
        <aside className="fixed top-16 hidden h-[calc(100vh-4rem)] w-full md:sticky md:block">
          <ScrollArea className="h-full py-6 pr-6">
            <Sidebar 
              categories={categories}
              groupedComponents={groupedComponents}
              selectedComponent={selectedComponent}
              onComponentSelect={handleComponentSelect}
              onCategorySelect={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <main className="flex-1 py-6">
          {searchQuery && filteredComponents.length === 0 ? (
            <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
              <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                <Code className="h-10 w-10 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">No components found</h3>
                <p className="mt-2 text-sm text-muted-foreground mb-4">
                  We couldn't find any components with that term. Try searching for something else.
                </p>
                <Button onClick={() => setSearchQuery("")}>Show all components</Button>
              </div>
            </div>
          ) : selectedComponent ? (
            <ComponentDisplay component={selectedComponent} onBack={() => setSelectedComponent(null)} />
          ) : (
            <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
              <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                <Code className="h-10 w-10 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">Select a component</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Choose a component from the sidebar to view its details and code.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// Sidebar Component
function Sidebar({ 
  categories, 
  groupedComponents, 
  selectedComponent, 
  onComponentSelect,
  onCategorySelect,
  selectedCategory
}: {
  categories: string[];
  groupedComponents: Record<string, any[]>;
  selectedComponent: any;
  onComponentSelect: (component: any) => void;
  onCategorySelect: (category: string) => void;
  selectedCategory: string;
}) {
  return (
    <div className="w-full">
      <div className="space-y-4">
        <div className="py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Categories</h2>
          <div className="space-y-1">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "secondary" : "ghost"}
                className="w-full justify-start font-normal capitalize"
                onClick={() => onCategorySelect(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        <Separator />
        <div className="py-2">
          <h2 className="px-2 text-lg font-semibold tracking-tight">Components</h2>
          <ScrollArea className="h-[calc(100vh-16rem)]">
            <div className="space-y-1 p-2">
              {(selectedCategory === 'all' ? 
                Object.entries(groupedComponents).flatMap(([_, components]) => components) : 
                groupedComponents[selectedCategory] || []
              ).map((component) => (
                <ComponentNavItem
                  key={component.name}
                  component={component}
                  isSelected={selectedComponent?.name === component.name}
                  onSelect={() => onComponentSelect(component)}
                />
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

// Mobile Sidebar Component
function MobileSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return <Sidebar {...props} />;
}

// Component Navigation Item
function ComponentNavItem({ 
  component, 
  isSelected, 
  onSelect 
}: {
  component: any;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <Button
      variant={isSelected ? "secondary" : "ghost"}
      className="w-full justify-start"
      onClick={onSelect}
    >
      <span className="mr-auto">{component.name}</span>
      {component.new && (
        <Badge className="ml-auto" variant="secondary">
          New
        </Badge>
      )}
    </Button>
  );
} 