// Import React for JSX support
import * as React from "react";

// Import all UI components
import { Accordion } from "@/components/ui/accordion"
import { Alert } from "@/components/ui/alert"
import { AlertDialog } from "@/components/ui/alert-dialog"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { Carousel } from "@/components/ui/carousel"
import { Checkbox } from "@/components/ui/checkbox"
import { Command } from "@/components/ui/command"
import { Dialog } from "@/components/ui/dialog"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { Form } from "@/components/ui/form"
import { HoverCard } from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Menubar } from "@/components/ui/menubar"
import { NavigationMenu } from "@/components/ui/navigation-menu"
import { Popover } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { RadioGroup } from "@/components/ui/radio-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Table } from "@/components/ui/table"
import { Tabs } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Toast } from "@/components/ui/toast"
import { Toggle } from "@/components/ui/toggle"
import { Tooltip } from "@/components/ui/tooltip"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { ChartContainer } from "@/components/ui/chart"

// Import preview components
import { AccordionPreview } from "@/components/previews/accordion-preview"
import { AlertPreview } from "@/components/previews/alert-preview"
import { ButtonPreview } from "@/components/previews/button-preview"
import { AlertDialogPreview } from "@/components/previews/alert-dialog-preview"
import { AspectRatioPreview } from "@/components/previews/aspect-ratio-preview"
import { AvatarPreview } from "@/components/previews/avatar-preview"
import { BadgePreview } from "@/components/previews/badge-preview"
import { BreadcrumbPreview } from "@/components/previews/breadcrumb-preview"
import { CalendarPreview } from "@/components/previews/calendar-preview"
import { CardPreview } from "@/components/previews/card-preview"
import { CarouselPreview } from "@/components/previews/carousel-preview"
import { ChartPreview } from "@/components/previews/chart-preview"
import { CheckboxPreview } from "@/components/previews/checkbox-preview"
import { CollapsiblePreview } from "@/components/previews/collapsible-preview"
import { CommandPreview } from "@/components/previews/command-preview"
import { ContextMenuPreview } from "@/components/previews/context-menu-preview"
import { DialogPreview } from "@/components/previews/dialog-preview"
import { DrawerPreview } from "@/components/previews/drawer-preview"
import { DropdownMenuPreview } from "@/components/previews/dropdown-menu-preview"
import { FormPreview } from "@/components/previews/form-preview"
import { HoverCardPreview } from "@/components/previews/hover-card-preview"
import { InputOTPPreview } from "@/components/previews/input-otp-preview"
import { InputPreview } from "@/components/previews/input-preview"
import { LabelPreview } from "@/components/previews/label-preview"
import { MenubarPreview } from "@/components/previews/menubar-preview"
import { NavigationMenuPreview } from "@/components/previews/navigation-menu-preview"
import { PaginationPreview } from "@/components/previews/pagination-preview"
import { PopoverPreview } from "@/components/previews/popover-preview"
import { ProgressPreview } from "@/components/previews/progress-preview"
import { RadioGroupPreview } from "@/components/previews/radio-group-preview"
import { ResizablePreview } from "@/components/previews/resizable-preview"
import { ScrollAreaPreview } from "@/components/previews/scroll-area-preview"
import { SelectPreview } from "@/components/previews/select-preview"
import { SeparatorPreview } from "@/components/previews/separator-preview"
import { SheetPreview } from "@/components/previews/sheet-preview"
import { SidebarPreview } from "@/components/previews/sidebar-preview"
import { SkeletonPreview } from "@/components/previews/skeleton-preview"
import { SliderPreview } from "@/components/previews/slider-preview"
import { SonnerPreview } from "@/components/previews/sonner-preview"
import { SwitchPreview } from "@/components/previews/switch-preview"
import { TablePreview } from "@/components/previews/table-preview"
import { TabsPreview } from "@/components/previews/tabs-preview"
import { TextareaPreview } from "@/components/previews/textarea-preview"
import { ToastPreview } from "@/components/previews/toast-preview"
import { TogglePreview } from "@/components/previews/toggle-preview"
import { ToggleGroupPreview } from "@/components/previews/toggle-group-preview"
import { TooltipPreview } from "@/components/previews/tooltip-preview"

// Define type for component props
interface ComponentProp {
  name: string;
  type: string;
  default?: string;
  description: string;
}

// Define type for component usage
interface ComponentUsage {
  description: string;
  code: string;
}

// Define type for component variant
interface ComponentVariant {
  name: string;
  preview?: () => React.ReactNode;
  code?: string;
  description?: string;
}

// Define type for component item
interface ComponentItem {
  name: string;
  description: string;
  category: string;
  tags: string[];
  preview: React.ComponentType<any>;
  code: string;
  documentation: string;
  new?: boolean;
  variants?: ComponentVariant[];
  props?: ComponentProp[];
  usage?: ComponentUsage;
}

// Export typed component registry
export const componentRegistry: ComponentItem[] = [
  {
    name: "Accordion",
    description: "A vertically stacked set of interactive headings that each reveal a section of content.",
    category: "disclosure",
    tags: ["disclosure", "interactive", "content"],
    preview: AccordionPreview,
    code: `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components' aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`,
    documentation: "/docs/components/accordion",
    new: false,
    props: [
      { name: "type", type: "single | multiple", default: "single", description: "Defines whether one or multiple items can be opened at the same time." },
      { name: "collapsible", type: "boolean", default: "false", description: "When type is 'single', allows closing content when clicking the trigger for an open item." },
      { name: "value", type: "string", default: "", description: "The controlled value of the item to expand." },
      { name: "defaultValue", type: "string", default: "", description: "The value of the item to expand when initially rendered." },
    ],
  },
  {
    name: "Alert",
    description: "Displays a callout for user attention with important and contextual information.",
    category: "feedback",
    tags: ["feedback", "notification", "message"],
    preview: AlertPreview,
    code: `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

export function AlertDemo() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
  )
}`,
    documentation: "/docs/components/alert",
    new: false,
    variants: [
      {
        name: "default",
        preview: () => {
          return React.createElement(AlertPreview, { variant: "default" });
        },
        code: `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

export function AlertDemo() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
  )
}`
      },
      {
        name: "destructive",
        preview: () => {
          return React.createElement(AlertPreview, { variant: "destructive" });
        },
        code: `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

export function AlertDestructive() {
  return (
    <Alert variant="destructive">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again to continue.
      </AlertDescription>
    </Alert>
  )
}`
      }
    ]
  },
  {
    name: "AlertDialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
    category: "overlay",
    tags: ["overlay", "modal", "dialog", "popup"],
    preview: AlertDialogPreview,
    code: `import {
      AlertDialog,
      AlertDialogAction,
      AlertDialogCancel,
      AlertDialogContent,
      AlertDialogDescription,
      AlertDialogFooter,
      AlertDialogHeader,
      AlertDialogTitle,
      AlertDialogTrigger,
    } from "@/components/ui/alert-dialog"
    import { Button } from "@/components/ui/button"

    export function AlertDialogDemo() {
      return (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Show Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )
    }`,
    documentation: "/docs/components/alert-dialog",
    new: false,
    props: [
      { name: "open", type: "boolean", description: "The controlled open state of the dialog." },
      { name: "onOpenChange", type: "function", description: "Event handler called when the open state of the dialog changes." },
      { name: "defaultOpen", type: "boolean", default: "false", description: "The open state of the dialog when it is initially rendered." },
    ],
  },
  {
    name: "AspectRatio",
    description: "Displays content within a desired ratio.",
    category: "layout",
    tags: ["layout", "image", "container"],
    preview: AspectRatioPreview,
    code: `import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"

export function AspectRatioDemo() {
  return (
    <div className="w-[400px]">
      <AspectRatio ratio={16 / 9}>
        <Image
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Image"
          fill
          className="rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  )
}`,
    documentation: "/docs/components/aspect-ratio",
    new: false,
    props: [
      { name: "ratio", type: "number", default: "1", description: "The desired aspect ratio for the content." },
    ],
  },
  {
    name: "Avatar",
    description: "An image element with a fallback for representing the user.",
    category: "data-display",
    tags: ["data-display", "image", "user", "profile"],
    preview: AvatarPreview,
    code: `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}`,
    documentation: "/docs/components/avatar",
    new: false,
    props: [
      { name: "src", type: "string", description: "The image source to display." },
      { name: "alt", type: "string", description: "The alt text for the avatar image." },
      { name: "delayMs", type: "number", default: "600", description: "The delay in milliseconds before showing the fallback." },
    ],
  },
  {
    name: "Badge",
    description: "Displays a badge or a component that looks like a badge.",
    category: "data-display",
    tags: ["data-display", "label", "tag", "status"],
    preview: BadgePreview,
    code: `import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return <Badge>Badge</Badge>
}`,
    documentation: "/docs/components/badge",
    new: false,
    variants: [
      {
        name: "default",
        preview: () => {
          return React.createElement(BadgePreview, { variant: "default" });
        },
        code: `import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return <Badge>Badge</Badge>
}`
      },
      {
        name: "secondary",
        preview: () => {
          return React.createElement(BadgePreview, { variant: "secondary" });
        },
        code: `import { Badge } from "@/components/ui/badge"

export function BadgeSecondary() {
  return <Badge variant="secondary">Secondary</Badge>
}`
      },
      {
        name: "destructive",
        preview: () => {
          return React.createElement(BadgePreview, { variant: "destructive" });
        },
        code: `import { Badge } from "@/components/ui/badge"

export function BadgeDestructive() {
  return <Badge variant="destructive">Destructive</Badge>
}`
      },
      {
        name: "outline",
        preview: () => {
          return React.createElement(BadgePreview, { variant: "outline" });
        },
        code: `import { Badge } from "@/components/ui/badge"

export function BadgeOutline() {
  return <Badge variant="outline">Outline</Badge>
}`
      }
    ]
  },
  {
    name: "Breadcrumb",
    description: "Displays the hierarchical path to the current resource with links to navigate to higher levels.",
    category: "navigation",
    tags: ["navigation", "hierarchy", "path", "links"],
    preview: BreadcrumbPreview,
    code: `import {
      Breadcrumb,
      BreadcrumbItem,
      BreadcrumbLink,
      BreadcrumbList,
      BreadcrumbPage,
      BreadcrumbSeparator,
    } from "@/components/ui/breadcrumb"
    import { HomeIcon } from "lucide-react"

    export function BreadcrumbDemo() {
      return (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                <HomeIcon className="h-4 w-4 mr-1" />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      )
    }`,
    documentation: "/docs/components/breadcrumb",
    new: true,
    props: [
      { name: "separator", type: "React.ReactNode", description: "Custom separator between breadcrumb items." },
      { name: "asChild", type: "boolean", default: "false", description: "When true, BreadcrumbLink will forward props to its child element." },
    ],
  },
  {
    name: "Button",
    description: "Displays a button or a component that looks like a button.",
    category: "inputs",
    tags: ["inputs", "action", "interactive"],
    preview: ButtonPreview,
    code: `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Click me</Button>
}`,
    documentation: "/docs/components/button",
    new: false,
    variants: [
      {
        name: "default",
        preview: () => {
          return React.createElement(ButtonPreview, { variant: "default" });
        },
        code: `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Click me</Button>
}`
      },
      {
        name: "destructive",
        preview: () => {
          return React.createElement(ButtonPreview, { variant: "destructive" });
        },
        code: `import { Button } from "@/components/ui/button"

export function ButtonDestructive() {
  return <Button variant="destructive">Delete</Button>
}`
      },
      {
        name: "outline",
        preview: () => {
          return React.createElement(ButtonPreview, { variant: "outline" });
        },
        code: `import { Button } from "@/components/ui/button"

export function ButtonOutline() {
  return <Button variant="outline">Outline</Button>
}`
      },
      {
        name: "secondary",
        preview: () => {
          return React.createElement(ButtonPreview, { variant: "secondary" });
        },
        code: `import { Button } from "@/components/ui/button"

export function ButtonSecondary() {
  return <Button variant="secondary">Secondary</Button>
}`
      },
      {
        name: "ghost",
        preview: () => {
          return React.createElement(ButtonPreview, { variant: "ghost" });
        },
        code: `import { Button } from "@/components/ui/button"

export function ButtonGhost() {
  return <Button variant="ghost">Ghost</Button>
}`
      },
      {
        name: "link",
        preview: () => {
          return React.createElement(ButtonPreview, { variant: "link" });
        },
        code: `import { Button } from "@/components/ui/button"

export function ButtonLink() {
  return <Button variant="link">Link</Button>
}`
      }
    ]
  },
  {
    name: "Calendar",
    description: "A date field component that allows users to enter and edit date values.",
    category: "inputs",
    tags: ["inputs", "date", "selection", "date-picker"],
    preview: CalendarPreview,
    code: `import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

export function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}`,
    documentation: "/docs/components/calendar",
    new: false,
    props: [
      { name: "mode", type: "single | multiple | range", default: "single", description: "The selection mode of the calendar." },
      { name: "selected", type: "Date | Date[] | DateRange", description: "The selected date or dates." },
      { name: "onSelect", type: "function", description: "Function called when a date is selected." },
      { name: "disabled", type: "Date[] | ((date: Date) => boolean)", description: "Dates that are disabled and cannot be selected." },
    ],
  },
  {
    name: "Card",
    description: "Displays a card with header, content, and footer sections.",
    category: "layout",
    tags: ["layout", "container", "surface"],
    preview: CardPreview,
    code: `import {
      Card,
      CardContent,
      CardDescription,
      CardFooter,
      CardHeader,
      CardTitle,
    } from "@/components/ui/card"
    import { Button } from "@/components/ui/button"

    export function CardDemo() {
      return (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Submit</Button>
          </CardFooter>
        </Card>
      )
    }`,
    documentation: "/docs/components/card",
    new: false,
    props: [
      { name: "className", type: "string", description: "Additional CSS classes to apply to the card." },
    ],
  },
  {
    name: "Carousel",
    description: "A carousel component with motion and swipe capabilities for cycling through elements.",
    category: "data-display",
    tags: ["data-display", "slider", "gallery", "images"],
    preview: CarouselPreview,
    code: `import {
      Carousel,
      CarouselContent,
      CarouselItem,
      CarouselNext,
      CarouselPrevious,
    } from "@/components/ui/carousel"

    export function CarouselDemo() {
      return (
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="flex aspect-square items-center justify-center p-6 text-2xl font-semibold">
                    {index + 1}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )
    }`,
    documentation: "/docs/components/carousel",
    new: true,
    props: [
      { name: "opts", type: "CarouselOptions", description: "Options for the carousel." },
      { name: "orientation", type: "horizontal | vertical", default: "horizontal", description: "The orientation of the carousel." },
      { name: "setApi", type: "function", description: "A function that receives the carousel API object." },
      { name: "plugins", type: "CarouselPlugin", description: "Plugins for the carousel." },
    ],
  },
  {
    name: "Chart",
    description: "Displays data visualizations using Recharts with a customizable theme.",
    category: "data-display",
    tags: ["data-display", "visualization", "graphs", "statistics"],
    preview: ChartPreview,
    code: `import {
      ChartContainer,
      ChartTooltip,
      ChartTooltipContent,
    } from "@/components/ui/chart"
    import {
      LineChart,
      Line,
      XAxis,
      YAxis,
      CartesianGrid,
    } from "recharts"

    export function ChartDemo() {
      const data = [
        { name: "Jan", value: 400 },
        { name: "Feb", value: 300 },
        { name: "Mar", value: 500 },
        { name: "Apr", value: 280 },
        { name: "May", value: 590 },
        { name: "Jun", value: 320 },
      ]

      const config = {
        value: {
          label: "Revenue",
          color: "#0ea5e9",
        },
      }

      return (
        <ChartContainer config={config}>
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="var(--color-value, #0ea5e9)" 
              strokeWidth={2} 
              dot={{ r: 4 }}
            />
          </LineChart>
        </ChartContainer>
      )
    }`,
    documentation: "/docs/components/chart",
    new: true,
    props: [
      { name: "config", type: "ChartConfig", description: "Configuration object for chart colors and labels." },
      { name: "children", type: "React.ReactNode", description: "Chart component from Recharts library." },
    ],
  },
  {
    name: "Checkbox",
    description: "A control that allows the user to toggle between checked and not checked.",
    category: "inputs",
    tags: ["inputs", "form", "selection", "toggle"],
    preview: CheckboxPreview,
    code: `import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  )
}`,
    documentation: "/docs/components/checkbox",
    new: false,
    props: [
      { name: "checked", type: "boolean", description: "Whether the checkbox is checked." },
      { name: "defaultChecked", type: "boolean", description: "Whether the checkbox is checked by default." },
      { name: "onCheckedChange", type: "function", description: "Event handler called when the checked state changes." },
      { name: "disabled", type: "boolean", default: "false", description: "Whether the checkbox is disabled." },
    ],
  },
  {
    name: "Collapsible",
    description: "A collapsible component that allows users to toggle the visibility of content.",
    category: "disclosure",
    tags: ["disclosure", "toggle", "content"],
    preview: CollapsiblePreview,
    code: `import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"

export const CollapsiblePreview = () => {
  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button variant="outline">Show more</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <p>Hello</p>
      </CollapsibleContent>
    </Collapsible>
  )
}`,
    documentation: "/docs/components/collapsible",
    new: true,
    props: [
      { name: "open", type: "boolean", description: "Whether the collapsible is open." },
      { name: "onOpenChange", type: "function", description: "Function called when the open state of the collapsible changes." },
    ],
  },
  {
    name: "Command",
    description: "A command menu for displaying command options triggered by a keyboard shortcut.",
    category: "overlay",
    tags: ["overlay", "command", "search", "menu", "keyboard"],
    preview: CommandPreview,
    code: `import {
      Command,
      CommandDialog,
      CommandInput,
      CommandList,
      CommandEmpty,
      CommandGroup,
      CommandItem,
      CommandShortcut,
      CommandSeparator,
    } from "@/components/ui/command"

    export function CommandDemo() {
      return (
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      )
    }`,
    documentation: "/docs/components/command",
    new: true,
    variants: [
      {
        name: "default",
        preview: () => {
          return React.createElement(CommandPreview, { variant: "default" });
        },
        code: `import { useState, useEffect } from "react"
        import {
          CommandDialog,
          CommandInput,
          CommandList,
          CommandEmpty,
          CommandGroup,
          CommandItem,
          CommandShortcut,
          CommandSeparator,
        } from "@/components/ui/command"
        import { Calendar, Smile, Calculator, User, CreditCard, Settings } from "lucide-react"
        import { Button } from "@/components/ui/button"

        export function CommandDialogDemo() {
          const [open, setOpen] = useState(false)

          useEffect(() => {
            const down = (e: KeyboardEvent) => {
              if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
              }
            }
            document.addEventListener("keydown", down)
            return () => document.removeEventListener("keydown", down)
          }, [])

          return (
            <>
              <p className="text-sm text-muted-foreground">
                Press <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">⌘</span>K
                </kbd> to open command menu
              </p>
              
              <Button
                onClick={() => setOpen(true)}
                variant="outline"
              >
                Open Command Menu
              </Button>
              
              <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Calendar</span>
                    </CommandItem>
                    <CommandItem>
                      <Smile className="mr-2 h-4 w-4" />
                      <span>Search Emoji</span>
                    </CommandItem>
                    <CommandItem>
                      <Calculator className="mr-2 h-4 w-4" />
                      <span>Calculator</span>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Settings">
                    <CommandItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                      <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Billing</span>
                      <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                      <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </CommandDialog>
            </>
          )
        }`,
      },
    ],
    props: [
      { name: "value", type: "string", description: "The value for the command menu input element." },
      { name: "onValueChange", type: "function", description: "Event handler called when the value changes." },
      { name: "filter", type: "function", default: "(value, search) => value.includes(search)", description: "Custom filter function for search results." },
      { name: "loop", type: "boolean", default: "false", description: "When true, keyboard navigation will loop from last item to first, and vice-versa." },
    ],
  },
  {
    name: "ContextMenu",
    description: "Displays a context menu when you right-click or press the menu button.",
    category: "overlay",
    tags: ["overlay", "menu", "context", "right-click"],
    preview: ContextMenuPreview,
    code: `import {
      ContextMenu,
      ContextMenuCheckboxItem,
      ContextMenuContent,
      ContextMenuItem,
      ContextMenuLabel,
      ContextMenuRadioGroup,
      ContextMenuRadioItem,
      ContextMenuSeparator,
      ContextMenuShortcut,
    } from "@/components/ui/context-menu"

    export function ContextMenuDemo() {
      return (
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuItem>
              Back
              <ContextMenuShortcut>⌘[</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              Forward
              <ContextMenuShortcut>⌘]</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              Reload
              <ContextMenuShortcut>⌘R</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-48">
                <ContextMenuItem>
                  Save Page As...
                  <ContextMenuShortcut>⌘S</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                <ContextMenuItem>Name Window...</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Developer Tools</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem checked>
              Show Bookmarks Bar
              <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuRadioGroup value="pedro">
              <ContextMenuLabel>People</ContextMenuLabel>
              <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
              <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuContent>
        </ContextMenu>
      )
    }`,
    documentation: "/docs/components/context-menu",
    new: true,
    props: [
      { name: "modal", type: "boolean", default: "false", description: "Whether the context menu should act like a modal." },
    ],
  },
  {
    name: "Dialog",
    description: "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.",
    category: "overlay",
    tags: ["overlay", "modal", "popup", "alert"],
    preview: DialogPreview,
    code: `import {
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
    } from "@/components/ui/dialog"
    import { Button } from "@/components/ui/button"
    import { Input } from "@/components/ui/input"
    import { Label } from "@/components/ui/label"

    export function DialogDemo() {
      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )
    }`,
    documentation: "/docs/components/dialog",
    new: false,
    props: [
      { name: "open", type: "boolean", description: "Whether the dialog is open." },
      { name: "onOpenChange", type: "function", description: "Function called when the open state of the dialog changes." },
      { name: "modal", type: "boolean", default: "true", description: "Whether the dialog should block interactions with the rest of the app." },
    ],
  },
  {
    name: "Drawer",
    description: "A panel that slides out from the edge of the screen.",
    category: "overlay",
    tags: ["overlay", "panel", "slide", "sidebar"],
    preview: DrawerPreview,
    code: `import {
      Drawer,
      DrawerClose,
      DrawerContent,
      DrawerDescription,
      DrawerFooter,
      DrawerHeader,
      DrawerTitle,
      DrawerTrigger,
    } from "@/components/ui/drawer"
    import { Button } from "@/components/ui/button"

    export function DrawerDemo() {
      return (
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Edit profile</DrawerTitle>
                <DrawerDescription>
                  Make changes to your profile here. Click save when you're done.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  Your drawer content goes here.
                </p>
              </div>
              <DrawerFooter>
                <Button>Save changes</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      )
    }`,
    documentation: "/docs/components/drawer",
    new: true,
    props: [
      { name: "open", type: "boolean", description: "Whether the drawer is open." },
      { name: "onOpenChange", type: "function", description: "Function called when the open state of the drawer changes." },
      { name: "shouldScaleBackground", type: "boolean", default: "true", description: "Whether the background should scale when the drawer is opened." },
    ],
  },
  {
    name: "DropdownMenu",
    description: "Displays a menu to the user — such as a set of actions or functions — triggered by a button.",
    category: "overlay",
    tags: ["overlay", "menu", "dropdown", "popup"],
    preview: DropdownMenuPreview,
    code: `import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuLabel,
      DropdownMenuSeparator,
      DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu"
    import { Button } from "@/components/ui/button"

    export function DropdownMenuDemo() {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }`,
    documentation: "/docs/components/dropdown-menu",
    new: false,
    props: [
      { name: "modal", type: "boolean", default: "true", description: "Whether the dropdown menu should act like a modal." },
      { name: "open", type: "boolean", description: "Whether the dropdown menu is open." },
      { name: "onOpenChange", type: "function", description: "Function called when the open state of the dropdown menu changes." },
    ],
  },
  {
    name: "Form",
    description: "Building forms with React Hook Form and Zod for validation.",
    category: "inputs",
    tags: ["inputs", "form", "validation", "layout"],
    preview: FormPreview,
    code: `"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

export function FormDemo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}`,
    documentation: "/docs/components/form",
    new: true,
    props: [
      { name: "control", type: "Control<T, any>", description: "Control object from useForm hook." },
      { name: "name", type: "FieldPath<T>", description: "The name of the form field." },
      { name: "render", type: "function", description: "Render function for form field." },
    ],
  },
  {
    name: "HoverCard",
    description: "For when you need to show more information on hover.",
    category: "overlay",
    tags: ["overlay", "popup", "hover", "tooltip"],
    preview: HoverCardPreview,
    code: `import {
      HoverCard,
      HoverCardContent,
      HoverCardTrigger,
    } from "@/components/ui/hover-card"

    export function HoverCardDemo() {
      return (
        <HoverCard>
          <HoverCardTrigger>Hover</HoverCardTrigger>
          <HoverCardContent>
            <div className="flex justify-between space-x-4">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">
                  The React Framework – created and maintained by @vercel.
                </p>
                <div className="flex items-center pt-2">
                  <span className="text-xs text-muted-foreground">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      )
    }`,
    documentation: "/docs/components/hover-card",
    new: true,
    props: [
      { name: "defaultOpen", type: "boolean", description: "The open state of the hover card when it is initially rendered." },
      { name: "open", type: "boolean", description: "The controlled open state of the hover card." },
      { name: "onOpenChange", type: "function", description: "Callback function called when the open state changes." },
      { name: "openDelay", type: "number", default: "700", description: "The duration from when the mouse enters the trigger until the hover card opens." },
      { name: "closeDelay", type: "number", default: "300", description: "The duration from when the mouse leaves the trigger or content until the hover card closes." },
    ],
  },
  {
    name: "InputOTP",
    description: "Accessible one-time password input for authentication.",
    category: "inputs",
    tags: ["inputs", "form", "otp", "verification", "auth"],
    preview: InputOTPPreview,
    variants: [
      { 
        name: "default", 
        description: "Default OTP input layout.",
      },
      { 
        name: "pattern", 
        description: "OTP input with separated groups and a pattern format.",
      }
    ],
    code: `import {
      InputOTP,
      InputOTPGroup,
      InputOTPSlot,
    } from "@/components/ui/input-otp"

    export function InputOTPDemo() {
      return (
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      )
    }`,
    documentation: "/docs/components/input-otp",
    new: true,
    props: [
      { name: "maxLength", type: "number", description: "Maximum number of characters or digits." },
      { name: "value", type: "string", description: "The controlled value of the OTP input." },
      { name: "onChange", type: "function", description: "Event handler called when the input's value changes." },
      { name: "pattern", type: "RegExp", description: "Regular expression pattern for digit filtering." },
      { name: "disabled", type: "boolean", description: "Whether the input is disabled." },
    ],
  },
  {
    name: "Input",
    description: "Captures text input from the user.",
    category: "inputs",
    tags: ["inputs", "form", "text", "field"],
    preview: InputPreview,
    variants: [
      { 
        name: "default", 
        description: "Default input field.",
      },
      { 
        name: "with-label", 
        description: "Input field with associated label.",
      },
      { 
        name: "disabled", 
        description: "Disabled input field.",
      },
      { 
        name: "with-button", 
        description: "Input field with an adjacent button.",
      },
      { 
        name: "file", 
        description: "File input field for uploads.",
      }
    ],
    code: `import { Input } from "@/components/ui/input"

export function InputDemo() {
  return <Input placeholder="Email" />
}`,
    documentation: "/docs/components/input",
    new: false,
    props: [
      { name: "type", type: "string", default: "text", description: "Type of the input (text, email, password, etc.)" },
      { name: "placeholder", type: "string", description: "Text to display when the input is empty." },
      { name: "disabled", type: "boolean", description: "Whether the input is disabled." },
      { name: "required", type: "boolean", description: "Whether the input is required in a form." },
      { name: "value", type: "string", description: "The controlled value of the input." },
      { name: "onChange", type: "function", description: "Event handler called when the input's value changes." },
    ],
  },
  {
    name: "Label",
    description: "Accessible label for form controls.",
    category: "inputs",
    tags: ["inputs", "form", "accessibility", "label"],
    preview: LabelPreview,
    variants: [
      { 
        name: "default", 
        description: "Default label for input fields.",
      },
      { 
        name: "with-checkbox", 
        description: "Label associated with a checkbox control.",
      },
      { 
        name: "with-switch", 
        description: "Label associated with a switch control.",
      },
      { 
        name: "with-radio", 
        description: "Labels associated with radio group options.",
      }
    ],
    code: `import { Label } from "@/components/ui/label"

export function LabelDemo() {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}`,
    documentation: "/docs/components/label",
    new: false,
    props: [
      { name: "htmlFor", type: "string", description: "Associates the label with a form control." },
      { name: "disabled", type: "boolean", description: "Whether the label is disabled." },
    ],
  },
  {
    name: "Menubar",
    description: "A horizontal menu with clickable items, groups, and dropdown menus for applications.",
    category: "navigation",
    tags: ["navigation", "menu", "dropdown", "toolbar"],
    preview: MenubarPreview,
    code: `import {
      Menubar,
      MenubarContent,
      MenubarItem,
      MenubarMenu,
      MenubarSeparator,
      MenubarShortcut,
      MenubarTrigger,
    } from "@/components/ui/menubar"

    export function MenubarDemo() {
      return (
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                New Window <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                Print... <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Undo <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                Cut <MenubarShortcut>⌘X</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Copy <MenubarShortcut>⌘C</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Paste <MenubarShortcut>⌘V</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      )
    }`,
    documentation: "/docs/components/menubar",
    new: true,
    props: [
      { name: "defaultValue", type: "string", description: "The value of the menu that should be open when initially rendered." },
      { name: "value", type: "string", description: "The controlled value of the menu to open." },
      { name: "onValueChange", type: "function", description: "Event handler called when the value changes." },
      { name: "loop", type: "boolean", default: "true", description: "When true, keyboard navigation will loop from last item to first, and vice versa." },
    ],
  },
  {
    name: "NavigationMenu",
    description: "A responsive navigation component with support for links, dropdowns, and mega menus.",
    category: "navigation",
    tags: ["navigation", "menu", "links", "dropdown"],
    preview: NavigationMenuPreview,
    code: `import {
      NavigationMenu,
      NavigationMenuContent,
      NavigationMenuItem,
      NavigationMenuLink,
      NavigationMenuList,
      NavigationMenuTrigger,
      navigationMenuTriggerStyle,
    } from "@/components/ui/navigation-menu"
    import Link from "next/link"

    export function NavigationMenuDemo() {
      return (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Feather.UI
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI and
                          Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Documentation
                      </NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )
    }`,
    documentation: "/docs/components/navigation-menu",
    new: true,
    props: [
      { name: "defaultValue", type: "string", description: "The value of the menu that should be open when initially rendered." },
      { name: "value", type: "string", description: "The controlled value of the menu to open." },
      { name: "onValueChange", type: "function", description: "Event handler called when the value changes." },
      { name: "delayDuration", type: "number", default: "200", description: "The duration from when the mouse enters the trigger until the content opens." },
      { name: "skipDelayDuration", type: "number", default: "300", description: "The duration from when the mouse leaves the trigger until the content closes." },
    ],
  },
  {
    name: "Pagination",
    description: "Navigation for paginated content with page numbers and next/previous controls.",
    category: "navigation",
    tags: ["navigation", "paginate", "pages", "links"],
    preview: PaginationPreview,
    variants: [
      { 
        name: "default", 
        description: "Simple pagination with next/previous controls.",
      },
      { 
        name: "with-numbers", 
        description: "Pagination with page numbers and ellipsis.",
      }
    ],
    code: `import {
      Pagination,
      PaginationContent,
      PaginationEllipsis,
      PaginationItem,
      PaginationLink,
      PaginationNext,
      PaginationPrevious,
    } from "@/components/ui/pagination"

    export function PaginationDemo() {
      return (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )
    }`,
    documentation: "/docs/components/pagination",
    new: true,
    props: [
      { name: "className", type: "string", description: "Additional CSS classes to apply to the pagination component." },
      { name: "isActive", type: "boolean", default: "false", description: "Whether a pagination link is active (current page)." },
    ],
  },
  {
    name: "Popover",
    description: "Displays floating content in relation to a trigger element when clicked.",
    category: "overlay",
    tags: ["overlay", "popup", "tooltip", "modal"],
    preview: PopoverPreview,
    code: `import {
      Popover,
      PopoverContent,
      PopoverTrigger,
    } from "@/components/ui/popover"
    import { Button } from "@/components/ui/button"

    export function PopoverDemo() {
      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">
                  Set the dimensions for the layer
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">Width</Label>
                  <Input
                    id="width"
                    defaultValue="100%"
                    className="col-span-2 h-8"
                  />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      )
    }`,
    documentation: "/docs/components/popover",
    new: false,
    props: [
      { name: "defaultOpen", type: "boolean", description: "The open state of the popover when it is initially rendered." },
      { name: "open", type: "boolean", description: "The controlled open state of the popover." },
      { name: "onOpenChange", type: "function", description: "Event handler called when the open state of the popover changes." },
      { name: "modal", type: "boolean", default: "false", description: "Whether the popover should trap focus when opened." },
    ],
  },
  {
    name: "Progress",
    description: "Displays an indicator showing the completion progress of a task.",
    category: "feedback",
    tags: ["feedback", "loading", "indicator", "status"],
    preview: ProgressPreview,
    code: `import { Progress } from "@/components/ui/progress"

export function ProgressDemo() {
  return <Progress value={33} />
}`,
    documentation: "/docs/components/progress",
    new: false,
    props: [
      { name: "value", type: "number", description: "The progress value between 0 and 100." },
      { name: "max", type: "number", default: "100", description: "The maximum value of the progress." },
      { name: "getValueLabel", type: "function", description: "A function to generate a label for the progress." },
    ],
  },
  {
    name: "RadioGroup",
    description: "A set of checkable buttons where only one can be checked at a time.",
    category: "inputs",
    tags: ["inputs", "selection", "form", "choice"],
    preview: RadioGroupPreview,
    code: `import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  )
}`,
    documentation: "/docs/components/radio-group",
    new: false,
    props: [
      { name: "value", type: "string", description: "The controlled value of the item to check." },
      { name: "defaultValue", type: "string", description: "The value of the item to check by default." },
      { name: "onValueChange", type: "function", description: "Event handler called when the value changes." },
      { name: "disabled", type: "boolean", default: "false", description: "When true, prevents the user from interacting with radio items." },
    ],
  },
  {
    name: "Resizable",
    description: "Accessible resizable panels with drag handles for adjusting size.",
    category: "layout",
    tags: ["layout", "panels", "resize", "split"],
    preview: ResizablePreview,
    variants: [
      { 
        name: "default", 
        description: "Horizontal resizable panels with a drag handle.",
      },
      { 
        name: "vertical", 
        description: "Vertical resizable panels with a drag handle.",
      }
    ],
    code: `import {
      ResizablePanel,
      ResizablePanelGroup,
      ResizableHandle,
    } from "@/components/ui/resizable"

    export function ResizableDemo() {
      return (
        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-[200px] max-w-md rounded-lg border"
        >
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Sidebar</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Content</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      )
    }`,
    documentation: "/docs/components/resizable",
    new: true,
    props: [
      { name: "direction", type: "horizontal | vertical", default: "horizontal", description: "The axis the panels will resize on." },
      { name: "defaultSize", type: "number", description: "The initial size of the panel in percentage." },
      { name: "minSize", type: "number", default: "10", description: "The minimum size of the panel in percentage." },
      { name: "maxSize", type: "number", default: "90", description: "The maximum size of the panel in percentage." },
      { name: "withHandle", type: "boolean", default: "false", description: "Whether to show a visual drag handle on the resize handle." },
    ],
  },
  {
    name: "ScrollArea",
    description: "A scrollable container with a native feel but custom styled scrollbars.",
    category: "layout",
    tags: ["layout", "scroll", "container", "overflow"],
    preview: ScrollAreaPreview,
    code: `import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export function ScrollAreaDemo() {
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => \`v1.2.0-beta.\${a.length - i}\`
  )

  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  )
}`,
    documentation: "/docs/components/scroll-area",
    new: false,
    props: [
      { name: "type", type: "auto | always | scroll | hover", default: "hover", description: "When scrollbars should be visible." },
      { name: "scrollHideDelay", type: "number", default: "600", description: "Duration in ms to hide scrollbars after scrolling." },
      { name: "dir", type: "ltr | rtl", description: "Text direction of the scrollbar." },
    ],
  },
  {
    name: "Select",
    description: "Displays a list of options for the user to select with a dropdown menu.",
    category: "inputs",
    tags: ["inputs", "form", "dropdown", "selection"],
    preview: SelectPreview,
    variants: [
      { 
        name: "default", 
        description: "Basic select with a list of options.",
      },
      { 
        name: "with-groups", 
        description: "Select with grouped options under labels.",
      }
    ],
    code: `import {
      Select,
      SelectContent,
      SelectItem,
      SelectTrigger,
      SelectValue,
    } from "@/components/ui/select"

    export function SelectDemo() {
      return (
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectContent>
        </Select>
      )
    }`,
    documentation: "/docs/components/select",
    new: false,
    props: [
      { name: "defaultValue", type: "string", description: "The value of the select when initially rendered." },
      { name: "value", type: "string", description: "The controlled value of the select." },
      { name: "onValueChange", type: "function", description: "Event handler called when the value changes." },
      { name: "disabled", type: "boolean", default: "false", description: "When true, prevents the user from interacting with the select." },
      { name: "placeholder", type: "string", description: "The placeholder text for the select trigger." },
    ],
  },
  {
    name: "Separator",
    description: "Visually or semantically separates content.",
    category: "layout",
    tags: ["layout", "divider", "separator", "horizontal", "vertical"],
    preview: SeparatorPreview,
    variants: [
      { 
        name: "default", 
        description: "Horizontal separator with content.",
      },
      { 
        name: "vertical", 
        description: "Vertical separator between items.",
      }
    ],
    code: `import { Separator } from "@/components/ui/separator"

export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  )
}`,
    documentation: "/docs/components/separator",
    new: false,
    props: [
      { name: "orientation", type: "horizontal | vertical", default: "horizontal", description: "The orientation of the separator." },
      { name: "decorative", type: "boolean", default: "true", description: "Whether the separator is decorative or semantically meaningful." },
    ],
  },
  {
    name: "Sheet",
    description: "Extends the Dialog component to display content that complements the main content of the screen.",
    category: "overlay",
    tags: ["overlay", "slide", "panel", "drawer"],
    preview: SheetPreview,
    variants: [
      { 
        name: "default", 
        description: "Default sheet sliding from the right.",
      },
      { 
        name: "side", 
        description: "Sheet with specified position (right).",
      },
      { 
        name: "top", 
        description: "Sheet sliding from the top.",
      },
      { 
        name: "bottom", 
        description: "Sheet sliding from the bottom.",
      },
      { 
        name: "left", 
        description: "Sheet sliding from the left.",
      }
    ],
    code: `import {
      Sheet,
      SheetContent,
      SheetDescription,
      SheetHeader,
      SheetTitle,
      SheetTrigger,
    } from "@/components/ui/sheet"
    import { Button } from "@/components/ui/button"

    export function SheetDemo() {
      return (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <Button type="submit">Save changes</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      )
    }`,
    documentation: "/docs/components/sheet",
    new: true,
    props: [
      { name: "side", type: "top | right | bottom | left", default: "right", description: "The side the sheet appears from." },
      { name: "open", type: "boolean", description: "The controlled open state of the sheet." },
      { name: "onOpenChange", type: "function", description: "Function called when the open state changes." },
      { name: "defaultOpen", type: "boolean", default: "false", description: "The open state of the sheet when it is initially rendered." },
    ],
  },
  {
    name: "Sidebar",
    description: "A responsive navigation sidebar with collapsible sections and mobile support.",
    category: "navigation",
    tags: ["navigation", "sidebar", "menu", "layout"],
    preview: SidebarPreview,
    variants: [
      { 
        name: "default", 
        description: "Standard sidebar with navigation sections.",
      },
      { 
        name: "inset", 
        description: "Inset sidebar with elevated main content.",
      }
    ],
    code: `import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger
  } from "@/components/ui/sidebar"
  import { Home } from "lucide-react"

  export function SidebarDemo() {
    return (
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2">
              <p className="text-sm font-semibold">Sidebar Example</p>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive tooltip="Dashboard">
                      <Home className="h-4 w-4" />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <div className="flex h-full w-full flex-1 flex-col p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">Main content area</p>
          </div>
        </div>
      </SidebarProvider>
    )
  }`,
    documentation: "/docs/components/sidebar",
    new: true,
    props: [
      { name: "variant", type: "sidebar | floating | inset", default: "sidebar", description: "The variant of the sidebar." },
      { name: "side", type: "left | right", default: "left", description: "The side the sidebar appears on." },
      { name: "collapsible", type: "offcanvas | icon | none", default: "offcanvas", description: "How the sidebar collapses." },
      { name: "defaultOpen", type: "boolean", default: "true", description: "Whether the sidebar is open by default." },
    ],
  },
  {
    name: "Skeleton",
    description: "Used to show a placeholder while content is loading.",
    category: "feedback",
    tags: ["feedback", "loading", "placeholder"],
    preview: SkeletonPreview,
    variants: [
      { 
        name: "default", 
        description: "Default skeleton for avatar and text.",
      },
      { 
        name: "card", 
        description: "Skeleton for a card layout.",
      }
    ],
    code: `import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}`,
    documentation: "/docs/components/skeleton",
    new: false,
    props: [
      { name: "className", type: "string", description: "Additional CSS classes to style the skeleton." },
    ],
  },
  {
    name: "Slider",
    description: "An input that allows users to select a value or range from a given range.",
    category: "inputs",
    tags: ["inputs", "range", "selection", "numeric"],
    preview: SliderPreview,
    variants: [
      { 
        name: "default", 
        description: "Basic slider with a single thumb.",
      },
      { 
        name: "range", 
        description: "Range slider with multiple thumbs.",
      }
    ],
    code: `import { Slider } from "@/components/ui/slider"

export function SliderDemo() {
  return <Slider defaultValue={[33]} max={100} step={1} />
}`,
    documentation: "/docs/components/slider",
    new: false,
    props: [
      { name: "defaultValue", type: "number[]", description: "The initial value of the slider." },
      { name: "value", type: "number[]", description: "The controlled value of the slider." },
      { name: "onValueChange", type: "function", description: "Event handler called when the value changes." },
      { name: "min", type: "number", default: "0", description: "The minimum value of the slider." },
      { name: "max", type: "number", default: "100", description: "The maximum value of the slider." },
      { name: "step", type: "number", default: "1", description: "The stepping interval." },
      { name: "orientation", type: "horizontal | vertical", default: "horizontal", description: "The orientation of the slider." },
    ],
  },
  {
    name: "Sonner",
    description: "A toast notification component for displaying brief messages.",
    category: "feedback",
    tags: ["feedback", "notification", "toast", "alert"],
    preview: SonnerPreview,
    variants: [
      { 
        name: "default", 
        description: "Default toast notification.",
      },
      { 
        name: "with-action", 
        description: "Toast with an action button.",
      },
      { 
        name: "success", 
        description: "Success toast notification.",
      },
      { 
        name: "destructive", 
        description: "Destructive/error toast notification.",
      }
    ],
    code: `import { Toaster } from "@/components/ui/sonner"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export function ToastDemo() {
  return (
    <>
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 21st at 4:30PM",
          })
        }
      >
        Show Toast
      </Button>
      <Toaster />
    </>
  )
}`,
    documentation: "/docs/components/sonner",
    new: true,
    props: [
      { name: "position", type: "top-left | top-right | bottom-left | bottom-right | top-center | bottom-center", default: "bottom-right", description: "Position of the toast." },
      { name: "closeButton", type: "boolean", default: "false", description: "Whether to show a close button." },
      { name: "richColors", type: "boolean", default: "false", description: "Whether to use rich colors for the toast." },
      { name: "expand", type: "boolean", default: "false", description: "Whether to expand the toast to fill the width." },
    ],
  },
  {
    name: "Switch",
    description: "A control that allows the user to toggle between checked and not checked.",
    category: "inputs",
    tags: ["inputs", "toggle", "selection", "control"],
    preview: SwitchPreview,
    variants: [
      { 
        name: "default", 
        description: "Basic switch control.",
      },
      { 
        name: "with-label", 
        description: "Switch with an associated label.",
      }
    ],
    code: `import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}`,
    documentation: "/docs/components/switch",
    new: false,
    props: [
      { name: "checked", type: "boolean", description: "Whether the switch is checked." },
      { name: "defaultChecked", type: "boolean", description: "Whether the switch is checked by default." },
      { name: "onCheckedChange", type: "function", description: "Event handler called when the checked state changes." },
      { name: "disabled", type: "boolean", default: "false", description: "Whether the switch is disabled." },
    ],
  },
  {
    name: "Table",
    description: "A responsive table component for displaying tabular data.",
    category: "data-display",
    tags: ["data-display", "table", "data", "grid"],
    preview: TablePreview,
    variants: [
      { 
        name: "default", 
        description: "Standard table with header and rows.",
      },
      { 
        name: "with-caption", 
        description: "Table with caption and footer.",
      }
    ],
    code: `import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}`,
    documentation: "/docs/components/table",
    new: false,
    props: [
      { name: "className", type: "string", description: "Additional CSS classes to style the table." },
    ],
  },
  {
    name: "Tabs",
    description: "A set of layered sections of content that display one panel at a time.",
    category: "navigation",
    tags: ["navigation", "tabs", "sections", "content"],
    preview: TabsPreview,
    variants: [
      { 
        name: "default", 
        description: "Simple tabs with basic content.",
      },
      { 
        name: "card", 
        description: "Tabs with card-based content panels.",
      }
    ],
    code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account settings go here.</TabsContent>
      <TabsContent value="password">Password settings go here.</TabsContent>
    </Tabs>
  )
}`,
    documentation: "/docs/components/tabs",
    new: false,
    props: [
      { name: "defaultValue", type: "string", description: "The value of the tab that should be active when initially rendered." },
      { name: "value", type: "string", description: "The controlled value of the tab to activate." },
      { name: "onValueChange", type: "function", description: "Callback invoked when the value changes." },
      { name: "orientation", type: "horizontal | vertical", default: "horizontal", description: "The orientation of the tabs." },
    ],
  },
  {
    name: "Textarea",
    description: "A multi-line text input field.",
    category: "inputs",
    tags: ["inputs", "form", "text", "multiline"],
    preview: TextareaPreview,
    variants: [
      { 
        name: "default", 
        description: "Basic textarea component.",
      },
      { 
        name: "with-label", 
        description: "Textarea with a label.",
      },
      { 
        name: "disabled", 
        description: "Disabled textarea state.",
      }
    ],
    code: `import { Textarea } from "@/components/ui/textarea"

export function TextareaDemo() {
  return <Textarea placeholder="Type your message here..." />
}`,
    documentation: "/docs/components/textarea",
    new: false,
    props: [
      { name: "placeholder", type: "string", description: "The placeholder text when the textarea is empty." },
      { name: "disabled", type: "boolean", default: "false", description: "Whether the textarea is disabled." },
      { name: "required", type: "boolean", default: "false", description: "Whether the textarea is required." },
      { name: "className", type: "string", description: "Additional CSS classes to style the textarea." },
    ],
  },
  {
    name: "Toast",
    description: "A notification component that displays brief messages to users.",
    category: "feedback",
    tags: ["feedback", "notification", "alert", "message"],
    preview: ToastPreview,
    variants: [
      { 
        name: "default", 
        description: "Default toast notification.",
      },
      { 
        name: "destructive", 
        description: "Destructive/error toast notification.",
      },
      { 
        name: "with-action", 
        description: "Toast with an action button.",
      }
    ],
    code: `import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function ToastDemo() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}
    >
      Show Toast
    </Button>
  )
}`,
    documentation: "/docs/components/toast",
    new: false,
    props: [
      { name: "variant", type: "default | destructive", default: "default", description: "The variant of the toast." },
      { name: "title", type: "React.ReactNode", description: "The title of the toast." },
      { name: "description", type: "React.ReactNode", description: "The description of the toast." },
      { name: "action", type: "React.ReactNode", description: "An action component to display." },
    ],
  },
  {
    name: "Toggle",
    description: "A two-state button that can be either on or off.",
    category: "inputs",
    tags: ["inputs", "button", "toggle", "state"],
    preview: TogglePreview,
    variants: [
      { 
        name: "default", 
        description: "Basic toggle component.",
      },
      { 
        name: "outline", 
        description: "Toggle with an outline style.",
      },
      { 
        name: "with-text", 
        description: "Toggle with icon and text.",
      },
      { 
        name: "sizes", 
        description: "Different sizes of toggle components.",
      }
    ],
    code: `import { Toggle } from "@/components/ui/toggle"
import { Bold } from "lucide-react"

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  )
}`,
    documentation: "/docs/components/toggle",
    new: false,
    props: [
      { name: "pressed", type: "boolean", description: "The controlled state of the toggle." },
      { name: "defaultPressed", type: "boolean", description: "The default state when initially rendered." },
      { name: "onPressedChange", type: "function", description: "Event handler called when the pressed state changes." },
      { name: "variant", type: "default | outline", default: "default", description: "The visual style of the toggle." },
      { name: "size", type: "sm | default | lg", default: "default", description: "The size of the toggle." },
    ],
  },
  {
    name: "ToggleGroup",
    description: "A set of two-state buttons that can be toggled on or off.",
    category: "inputs",
    tags: ["inputs", "button", "toggle", "group", "selection"],
    preview: ToggleGroupPreview,
    variants: [
      { 
        name: "default", 
        description: "Multi-selection toggle group.",
      },
      { 
        name: "single", 
        description: "Single-selection toggle group.",
      },
      { 
        name: "outline", 
        description: "Toggle group with outline style.",
      }
    ],
    code: `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Bold, Italic, Underline } from "lucide-react"

export function ToggleGroupDemo() {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}`,
    documentation: "/docs/components/toggle-group",
    new: false,
    props: [
      { name: "type", type: "single | multiple", description: "Whether a single or multiple items can be selected." },
      { name: "value", type: "string | string[]", description: "The controlled value of the item(s) to select." },
      { name: "defaultValue", type: "string | string[]", description: "The value of the item(s) to select by default." },
      { name: "onValueChange", type: "function", description: "Event handler called when the value changes." },
      { name: "variant", type: "default | outline", default: "default", description: "The visual style of the toggle group." },
      { name: "size", type: "sm | default | lg", default: "default", description: "The size of the toggle group items." },
    ],
  },
  {
    name: "Tooltip",
    description: "A popup that displays information related to an element when the element receives focus or is hovered over.",
    category: "overlay",
    tags: ["overlay", "popup", "info", "hover"],
    preview: TooltipPreview,
    variants: [
      { 
        name: "default", 
        description: "Basic tooltip on a button.",
      },
      { 
        name: "with-icon", 
        description: "Tooltip on an icon button.",
      }
    ],
    code: `import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover Me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`,
    documentation: "/docs/components/tooltip",
    new: false,
    props: [
      { name: "delayDuration", type: "number", default: "700", description: "Duration in milliseconds before showing the tooltip." },
      { name: "skipDelayDuration", type: "number", default: "300", description: "Skip delay when moving between multiple tooltips." },
      { name: "sideOffset", type: "number", default: "4", description: "Offset distance from the trigger element." },
      { name: "side", type: "top | right | bottom | left", default: "top", description: "The preferred side to show the tooltip." },
      { name: "align", type: "start | center | end", default: "center", description: "The alignment along the tooltip's side." },
    ],
  },
] 