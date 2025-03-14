"use client"

import React from "react"
import Link from "next/link"
import { ChevronLeft, ExternalLink } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { componentRegistry } from "@/lib/component-registry"
import { CodeDisplay } from "@/components/code-display"

interface ComponentDetailPageProps {
  params: {
    slug: string
  }
}

export default function ComponentDetailPage({ params }: ComponentDetailPageProps) {
  // Find the component by slug (lowercase name)
  const component = componentRegistry.find(
    (c) => c.name.toLowerCase() === params.slug.toLowerCase()
  )
  
  // If component not found, show error message
  if (!component) {
    return (
      <div className="max-w-3xl mx-auto py-12 text-center">
        <h1 className="text-2xl font-bold">Component not found</h1>
        <p className="mt-2 text-muted-foreground">
          The component you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild variant="outline" className="mt-4">
          <Link href="/docs/components">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Components
          </Link>
        </Button>
      </div>
    )
  }
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <Button asChild variant="ghost" size="sm">
          <Link href="/docs/components">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Components
          </Link>
        </Button>
        {component.new && (
          <Badge variant="default" className="bg-primary">New</Badge>
        )}
      </div>
      
      <div className="mt-6 space-y-8">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            {component.name}
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            {component.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {component.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        
        <Separator />
        
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-4">Preview</h2>
          <div className="p-6 border rounded-lg">
            <div className="flex items-center justify-center p-10">
              {React.createElement(component.preview, { variant: "default" })}
            </div>
          </div>
        </div>
        
        {component.variants && component.variants.length > 1 && (
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">Variants</h2>
            <Tabs defaultValue={component.variants[0].name}>
              <TabsList className="mb-4">
                {component.variants.map((variant) => (
                  <TabsTrigger key={variant.name} value={variant.name}>
                    {variant.name.charAt(0).toUpperCase() + variant.name.slice(1)}
                  </TabsTrigger>
                ))}
              </TabsList>
              {component.variants.map((variant) => (
                <TabsContent key={variant.name} value={variant.name}>
                  <div className="space-y-4">
                    {variant.description && (
                      <p className="text-muted-foreground">{variant.description}</p>
                    )}
                    <div className="p-6 border rounded-lg">
                      <div className="flex items-center justify-center p-10">
                        {React.createElement(component.preview, { variant: variant.name })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        )}
        
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-4">Code</h2>
          <CodeDisplay code={component.code} expandable={true} />
        </div>
        
        {component.props && component.props.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">API Reference</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Prop</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Default</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {component.props.map((prop) => (
                  <TableRow key={prop.name}>
                    <TableCell className="font-mono text-sm">{prop.name}</TableCell>
                    <TableCell className="font-mono text-sm">{prop.type}</TableCell>
                    <TableCell className="font-mono text-sm">{prop.default || "-"}</TableCell>
                    <TableCell>{prop.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
        
        {component.usage && (
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">Usage</h2>
            <p className="text-muted-foreground mb-4">{component.usage.description}</p>
            <CodeDisplay code={component.usage.code} expandable={true} />
          </div>
        )}
        
        <div className="mt-12 flex items-center justify-between">
          <Button asChild variant="outline">
            <Link href={component.documentation} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Full Documentation
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 