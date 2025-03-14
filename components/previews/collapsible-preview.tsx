import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Button } from "../ui/button"

export const CollapsiblePreview = () => {
  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button variant="outline">Show more</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
      </CollapsibleContent>
    </Collapsible>
  )
}
