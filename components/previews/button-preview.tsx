import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

// Define the allowed button variants based on the Button component requirements
type ButtonVariant = "default" | "destructive" | "link" | "outline" | "secondary" | "ghost";

interface ButtonPreviewProps {
  variant?: ButtonVariant;
  minimal?: boolean;
}

export function ButtonPreview({ variant = "default", minimal = false }: ButtonPreviewProps) {
  if (minimal) {
    return <Button variant={variant} size="sm">Button</Button>
  }

  // For a more interesting preview
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <Button variant={variant}>Button</Button>
        <Button variant={variant} disabled>Disabled</Button>
      </div>
      <div className="flex gap-4">
        <Button variant={variant} size="sm">Small</Button>
        <Button variant={variant} size="lg">Large</Button>
      </div>
      <Button variant={variant} className="gap-1">
        <Check className="h-4 w-4" /> With Icon
      </Button>
    </div>
  )
} 