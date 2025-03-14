"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Copy, ExternalLink, EyeIcon, Code, Share2, Sparkles, Check } from "lucide-react"

// UI Components
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

// Sample components to showcase
const buttonVariants = ["default", "destructive", "outline", "secondary", "ghost", "link"]
const alertVariants = ["default", "destructive", "warning", "success"]

export function ExamplesSection() {
  const [activeTab, setActiveTab] = useState("components")
  const [copied, setCopied] = useState(false)

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5 dark:opacity-10 -z-10" />
      
      {/* Gradient accents */}
      <div className="absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl -z-10" />
      <div className="absolute left-0 bottom-0 h-[20rem] w-[20rem] rounded-full bg-purple-500/10 blur-3xl -z-10" />
      
      <div className="container relative">
        {/* Section header with badge */}
        <motion.div 
          className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="px-3.5 py-1.5 mb-4">
            <Sparkles className="mr-2 h-3.5 w-3.5 text-yellow-500" />
            <span className="text-sm font-medium">Explore our components</span>
          </Badge>
          
          <h2 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">
            Component <span className="text-primary">Examples</span>
          </h2>
          
          <p className="max-w-[85%] text-lg text-muted-foreground sm:text-xl sm:leading-8">
            Interactive examples showcasing the versatility and flexibility of our component library.
            See what you can build with Feather UI.
          </p>
        </motion.div>

        {/* Component tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[85rem]"
        >
          <Tabs defaultValue="components" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 sm:grid-cols-4 rounded-full h-11 p-1 bg-muted/70 backdrop-blur">
                <TabsTrigger value="components" className="rounded-full data-[state=active]:bg-background data-[state=active]:text-foreground">
                  UI Components
                </TabsTrigger>
                <TabsTrigger value="cards" className="rounded-full data-[state=active]:bg-background data-[state=active]:text-foreground">
                  Cards
                </TabsTrigger>
                <TabsTrigger value="forms" className="rounded-full data-[state=active]:bg-background data-[state=active]:text-foreground">
                  Forms
                </TabsTrigger>
                <TabsTrigger value="templates" className="rounded-full data-[state=active]:bg-background data-[state=active]:text-foreground hidden sm:block">
                  Templates
                </TabsTrigger>
              </TabsList>
            </div>

            {/* UI Components Tab */}
            <TabsContent value="components" className="space-y-8">
              {/* Featured Component - Button Variants */}
              <div className="relative overflow-hidden rounded-xl border bg-background/50 p-8 backdrop-blur">
                <div className="flex flex-col gap-6">
                  <div>
                    <Badge className="mb-2">Featured Component</Badge>
                    <h3 className="text-2xl font-semibold tracking-tight">Button Variants</h3>
                    <p className="text-muted-foreground">A collection of button styles for different contexts and needs.</p>
                  </div>
                  
                  {/* Interactive button showcase */}
                  <div className="flex flex-wrap gap-4 items-center">
                    {buttonVariants.map((variant) => (
                      <TooltipProvider key={variant}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant={variant as any} className="capitalize">
                              {variant}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>variant="{variant}"</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                  
                  {/* Code snippet */}
                  <div className="relative mt-4 overflow-hidden rounded-lg border bg-muted/50 backdrop-blur">
                    <div className="flex items-center justify-between border-b px-4 py-2">
                      <div className="text-sm text-muted-foreground">Button.tsx</div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => copyCode('<Button variant="default">Default</Button>')}
                      >
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                    <pre className="p-4 text-sm overflow-x-auto">
                      <code className="text-muted-foreground">
                        {`<Button variant="default">Default</Button>`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>

              {/* Component Carousel */}
              <div>
                <h3 className="text-xl font-semibold mb-6">More UI Components</h3>
                <Carousel className="w-full">
                  <CarouselContent>
                    {/* Alert Component Examples */}
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <Card>
                        <CardHeader>
                          <CardTitle>Alert Component</CardTitle>
                          <CardDescription>Contextual feedback messages for user actions</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <Alert>
                            <AlertTitle>Information</AlertTitle>
                            <AlertDescription>
                              This is a default alert providing information.
                            </AlertDescription>
                          </Alert>
                          <Alert variant="destructive">
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>
                              Something went wrong. Please try again.
                            </AlertDescription>
                          </Alert>
                        </CardContent>
                        <CardFooter>
                          <Button variant="ghost" size="sm" asChild className="gap-1">
                            <Link href="/components/alert">
                              View component <ChevronRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </CarouselItem>

                    {/* Dialog Component Example */}
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <Card>
                        <CardHeader>
                          <CardTitle>Dialog Component</CardTitle>
                          <CardDescription>Modal windows for focused interactions</CardDescription>
                        </CardHeader>
                        <CardContent className="flex items-center justify-center py-8">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button>Open Dialog</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                              <DialogHeader>
                                <DialogTitle>Dialog Example</DialogTitle>
                                <DialogDescription>
                                  This is a dialog component example that appears in a modal window.
                                </DialogDescription>
                              </DialogHeader>
                              <div className="py-4">
                                <p className="text-muted-foreground">
                                  Dialog content goes here, perfect for focused user interactions.
                                </p>
                              </div>
                              <div className="flex justify-end">
                                <Button>Continue</Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </CardContent>
                        <CardFooter>
                          <Button variant="ghost" size="sm" asChild className="gap-1">
                            <Link href="/components/dialog">
                              View component <ChevronRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </CarouselItem>

                    {/* Badge Component Example */}
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <Card>
                        <CardHeader>
                          <CardTitle>Badge Component</CardTitle>
                          <CardDescription>Compact labels for status and metadata</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-3 py-8 justify-center">
                          <Badge>Default</Badge>
                          <Badge variant="secondary">Secondary</Badge>
                          <Badge variant="outline">Outline</Badge>
                          <Badge variant="destructive">Destructive</Badge>
                        </CardContent>
                        <CardFooter>
                          <Button variant="ghost" size="sm" asChild className="gap-1">
                            <Link href="/components/badge">
                              View component <ChevronRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </CarouselItem>
                  </CarouselContent>
                  <div className="flex justify-center mt-4">
                    <CarouselPrevious className="mr-2 static translate-y-0" />
                    <CarouselNext className="ml-2 static translate-y-0" />
                  </div>
                </Carousel>
              </div>
            </TabsContent>

            {/* Cards Tab */}
            <TabsContent value="cards" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="overflow-hidden shadow-lg border-primary/10">
                    <CardHeader className="bg-gradient-to-r from-primary/10 to-purple-500/10 dark:from-primary/20 dark:to-purple-500/20">
                      <CardTitle>Profile Card</CardTitle>
                      <CardDescription>User profile card with avatar and details</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6 pb-2">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="font-semibold text-lg">JD</span>
                        </div>
                        <div>
                          <h4 className="font-medium">John Doe</h4>
                          <p className="text-sm text-muted-foreground">Product Designer</p>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-3 divide-x text-center">
                        <div className="px-2">
                          <div className="font-medium">142</div>
                          <div className="text-xs text-muted-foreground">Posts</div>
                        </div>
                        <div className="px-2">
                          <div className="font-medium">2.8k</div>
                          <div className="text-xs text-muted-foreground">Followers</div>
                        </div>
                        <div className="px-2">
                          <div className="font-medium">268</div>
                          <div className="text-xs text-muted-foreground">Following</div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t bg-muted/30 flex justify-between">
                      <Button variant="ghost" size="sm">
                        <EyeIcon className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="overflow-hidden shadow-lg border-primary/10">
                    <CardHeader className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20">
                      <CardTitle>Feature Card</CardTitle>
                      <CardDescription>Showcase key product features</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="rounded-lg bg-primary/10 p-4 mb-4">
                        <p className="text-sm">
                          Feather UI provides a collection of beautifully designed components that you can use in your 
                          projects. Our components are customizable, accessible, and easy to implement.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">React</Badge>
                        <Badge variant="outline">TypeScript</Badge>
                        <Badge variant="outline">Tailwind CSS</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t bg-muted/30">
                      <Button variant="outline" size="sm" className="w-full">
                        <Code className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>

            {/* Other tab contents */}
            <TabsContent value="forms">
              <Card className="border-primary/10">
                <CardHeader>
                  <CardTitle>Form Components</CardTitle>
                  <CardDescription>Build interactive forms with validation and accessibility</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground py-12">
                    Form examples will be displayed here
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="templates">
              <Card className="border-primary/10">
                <CardHeader>
                  <CardTitle>Page Templates</CardTitle>
                  <CardDescription>Pre-designed page layouts for common use cases</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground py-12">
                    Template examples will be displayed here
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 backdrop-blur rounded-lg border p-4 bg-background/30">
            <p className="text-muted-foreground">Want to explore more examples?</p>
            <Button asChild>
              <Link href="/examples" className="gap-2">
                View All Examples
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 