"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { componentRegistry } from "@/lib/component-registry"

export function ComponentNavigation({ className }: { className: string }) {
  const [activeCategory, setActiveCategory] = useState("")
  
  // Get unique categories
  const categories = [...new Set(componentRegistry.map(component => component.category))]
  
  const getCategoryComponents = (category: string) => {
    return componentRegistry.filter(component => component.category === category)
  }
  
  return (
    <div className={className}>
      <div className="pb-4 font-medium">
        Categories
      </div>
      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="space-y-6 pr-4">
          {categories.map(category => (
            <div key={category}>
              <Button
                variant="ghost"
                className="flex w-full items-center justify-between px-2 py-1 capitalize"
                onClick={() => setActiveCategory(activeCategory === category ? "" : category)}
              >
                <span>{category}</span>
                <ChevronRight 
                  className={`h-4 w-4 transition-transform ${activeCategory === category ? "rotate-90" : ""}`} 
                />
              </Button>
              
              {activeCategory === category && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="pl-4 mt-1 space-y-1"
                >
                  {getCategoryComponents(category).map(component => (
                    <Button
                      key={component.name}
                      variant="ghost"
                      asChild
                      className="w-full justify-start pl-6 font-normal"
                    >
                      <Link href={`/components/${component.name.toLowerCase()}`}>
                        {component.name}
                      </Link>
                    </Button>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
} 