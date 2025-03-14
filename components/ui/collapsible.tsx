"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { JSX, RefAttributes } from "react"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = (props: JSX.IntrinsicAttributes & CollapsiblePrimitive.CollapsibleTriggerProps & RefAttributes<HTMLButtonElement>) => (
  <CollapsiblePrimitive.CollapsibleTrigger
    className="flex items-center justify-center py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer"
    {...props}
  />
)

const CollapsibleContent = (props: JSX.IntrinsicAttributes & CollapsiblePrimitive.CollapsibleContentProps & RefAttributes<HTMLDivElement>) => (
  <CollapsiblePrimitive.CollapsibleContent
    className="mt-2 p-4 bg-white border border-gray-200 rounded-md shadow-md"
    {...props}
  />
)

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
