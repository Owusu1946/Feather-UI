"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, Copy, Check, ExternalLink, Github, Code as CodeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Define component and variant interfaces
interface ComponentVariant {
  name: string;
  preview: () => React.ReactNode;
  code: string;
}

interface ComponentProp {
  name: string;
  type: string;
  default?: string;
  description: string;
}

interface ComponentUsage {
  description: string;
  code: string;
}

interface ComponentItem {
  name: string;
  description: string;
  preview: React.ComponentType<any>;
  code: string;
  variants?: ComponentVariant[];
  new?: boolean;
  documentation?: string;
  usage?: ComponentUsage;
  props?: ComponentProp[];
  tags: string[];
}

interface ComponentDisplayProps {
  component: ComponentItem;
  onBack?: () => void;
}

export function ComponentDisplay({ component, onBack }: ComponentDisplayProps) {
  const [selectedVariant, setSelectedVariant] = useState(component.variants?.[0]?.name || "default")
  const [activeTab, setActiveTab] = useState("preview")
  const [copyStatus, setCopyStatus] = useState<Record<string, boolean>>({})
  const [isExpanded, setIsExpanded] = useState(false)
  
  const handleCopyCode = (code: string, variantName: string) => {
    navigator.clipboard.writeText(code)
    setCopyStatus(prev => ({ ...prev, [variantName]: true }))
    setTimeout(() => {
      setCopyStatus(prev => ({ ...prev, [variantName]: false }))
    }, 2000)
  }

  // Find the selected variant or use a default object that renders the base preview
  const selectedVariantObj = component.variants
    ? component.variants.find((v: ComponentVariant) => v.name === selectedVariant)
    : null

  // Helper function to render the appropriate preview
  const renderPreview = () => {
    if (selectedVariantObj && selectedVariantObj.preview) {
      return selectedVariantObj.preview()
    }
    // Use createElement to properly render the component
    return React.createElement(component.preview)
  }

  // Helper function to get the code for the selected variant or default
  const getCode = () => {
    return selectedVariantObj?.code || component.code
  }

  return (
    <div className="space-y-6">
      {/* Component Header */}
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight">{component.name}</h1>
            {component.new && (
              <Badge variant="secondary" className="ml-2">New</Badge>
            )}
          </div>
          <div className="flex items-center gap-2">
            {component.documentation && (
              <Button variant="outline" size="sm" asChild>
                <a href={component.documentation} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Docs
                </a>
              </Button>
            )}
            <Button variant="outline" size="sm" asChild>
              <a href={`https://github.com/shadcn-ui/ui/tree/main/apps/www/components/ui/${component.name.toLowerCase()}.tsx`} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
        <p className="text-muted-foreground mt-2">{component.description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {component.tags.map((tag: string) => (
            <Badge key={tag} variant="outline" className="capitalize">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

      {/* Variants (if applicable) */}
      {component.variants && component.variants.length > 1 && (
        <div className="space-y-2">
          <h2 className="text-sm font-medium">Variants</h2>
          <div className="flex flex-wrap gap-2">
            {component.variants.map((variant: ComponentVariant) => (
              <Button
                key={variant.name}
                variant={selectedVariant === variant.name ? "secondary" : "outline"}
                size="sm"
                onClick={() => setSelectedVariant(variant.name)}
                className="capitalize"
              >
                {variant.name}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Component Preview and Code */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          {component.props && component.props.length > 0 && (
            <TabsTrigger value="props">Props</TabsTrigger>
          )}
        </TabsList>
        
        <TabsContent value="preview" className="space-y-4">
          <div className="relative rounded-md border bg-background p-6 flex justify-center items-center min-h-[350px]">
            {renderPreview()}
          </div>
        </TabsContent>
        
        <TabsContent value="code" className="space-y-4">
          <div className="relative">
            <div className="relative rounded-lg border overflow-hidden">
              {/* Code header */}
              <div className="flex justify-between items-center px-4 py-2 bg-black border-b border-gray-800">
                <Button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-gray-200"
                >
                  {isExpanded ? "Collapse" : "Expand"}
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleCopyCode(getCode(), selectedVariant)}
                  variant="ghost"
                  className="text-gray-400 hover:text-gray-200"
                >
                  {copyStatus[selectedVariant] ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              
              {/* Code content - plain text without syntax highlighting */}
              <div 
                className={`bg-black overflow-auto p-4 ${
                  isExpanded ? "max-h-[800px]" : "max-h-[450px]"
                }`}
              >
                <pre className="font-mono text-sm leading-relaxed text-white whitespace-pre">
                  {getCode()}
                </pre>
              </div>
            </div>
          </div>
        </TabsContent>
        
        {component.props && component.props.length > 0 && (
          <TabsContent value="props" className="space-y-4">
            <div className="rounded-md border">
              <div className="grid grid-cols-4 border-b p-3 font-medium">
                <div>Name</div>
                <div>Type</div>
                <div>Default</div>
                <div>Description</div>
              </div>
              {component.props.map((prop: ComponentProp) => (
                <div key={prop.name} className="grid grid-cols-4 border-b p-3 last:border-0">
                  <div className="font-mono text-sm">{prop.name}</div>
                  <div className="font-mono text-sm text-muted-foreground">{prop.type}</div>
                  <div className="font-mono text-sm">{prop.default || "—"}</div>
                  <div className="text-sm text-muted-foreground">{prop.description}</div>
                </div>
              ))}
            </div>
          </TabsContent>
        )}
      </Tabs>
    </div>
  )
} 