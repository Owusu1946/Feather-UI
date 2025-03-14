import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ComponentPreviewProps {
  title: string
  description: string
  className?: string
}

export function ComponentPreview({ title, description, className }: ComponentPreviewProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="bg-muted/50 flex items-center justify-center p-6 h-full">
          <div className="text-sm text-muted-foreground">Preview content goes here</div>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 p-3">
        <div className="text-xs text-muted-foreground">View code</div>
      </CardFooter>
    </Card>
  )
}

