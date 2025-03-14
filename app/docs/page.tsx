import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DocsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-6">
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Feather.UI
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            A beautiful, accessible, and customizable UI component library for React applications.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>
                Learn how to install and use Feather UI in your projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Follow our step-by-step guide to get up and running with Feather UI quickly.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/docs/installation">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Components</CardTitle>
              <CardDescription>
                Explore our beautiful UI components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Browse our collection of high-quality, accessible UI components.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/docs/components">
                  View Components
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight">Features</h2>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <Badge className="mr-2">Accessible</Badge>
              Built with accessibility in mind from the ground up
            </li>
            <li className="flex items-center">
              <Badge className="mr-2">Customizable</Badge>
              Easily theme and customize to match your brand
            </li>
            <li className="flex items-center">
              <Badge className="mr-2">Responsive</Badge>
              Designed to work on any device and screen size
            </li>
            <li className="flex items-center">
              <Badge className="mr-2">TypeScript</Badge>
              Fully typed components for a better developer experience
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
} 