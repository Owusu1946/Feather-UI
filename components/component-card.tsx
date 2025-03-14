"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Define component type
interface ComponentItem {
  name: string;
  description: string;
  tags: string[];
  preview: React.ComponentType<{ minimal?: boolean }>;
  new?: boolean;
  // Add other properties that might exist on your component objects
  variants?: any[];
  code?: string;
  documentation?: string;
  category?: string;
}

// Define props for the ComponentCard
interface ComponentCardProps {
  component: ComponentItem;
  viewMode: "grid" | "list";
  onClick: () => void;
}

export function ComponentCard({ component, viewMode, onClick }: ComponentCardProps) {
  return viewMode === "grid" ? (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
      onClick={onClick}
    >
      <Card className="h-full cursor-pointer hover:border-primary/50 transition-colors overflow-hidden flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-xl">{component.name}</CardTitle>
            <CardDescription className="line-clamp-2">{component.description}</CardDescription>
          </div>
          {component.new && (
            <Badge className="bg-primary hover:bg-primary">New</Badge>
          )}
        </CardHeader>
        <CardContent className="flex-grow py-4">
          <div className="h-[160px] bg-muted/40 rounded-md flex items-center justify-center border">
            <component.preview minimal={true} />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center border-t pt-4 bg-muted/20">
          <div className="flex gap-2">
            {component.tags.slice(0, 2).map((tag: string) => (
              <Badge key={tag} variant="outline" className="capitalize">
                {tag}
              </Badge>
            ))}
            {component.tags.length > 2 && (
              <Badge variant="outline">+{component.tags.length - 2}</Badge>
            )}
          </div>
          <Button variant="ghost" size="sm" className="gap-1">
            View <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  ) : (
    <motion.div
      whileHover={{ x: 5, transition: { duration: 0.2 } }}
      onClick={onClick}
    >
      <Card className="cursor-pointer hover:border-primary/50 transition-colors overflow-hidden">
        <div className="flex items-center p-4 gap-4">
          <div className="h-16 w-16 bg-muted/40 rounded-md flex items-center justify-center border shrink-0">
            <component.preview minimal={true} />
          </div>
          
          <div className="flex-grow">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">{component.name}</CardTitle>
              {component.new && (
                <Badge className="bg-primary hover:bg-primary text-xs">New</Badge>
              )}
            </div>
            <CardDescription className="line-clamp-1 mt-1">{component.description}</CardDescription>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex gap-2">
              {component.tags.slice(0, 1).map((tag: string) => (
                <Badge key={tag} variant="outline" className="capitalize">
                  {tag}
                </Badge>
              ))}
            </div>
            <Button variant="ghost" size="sm" className="gap-1 shrink-0">
              View <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
} 