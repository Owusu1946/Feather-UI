import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal, AlertTriangle, Info, CheckCircle } from "lucide-react"
import { ReactNode } from "react"

// Define valid Alert variants based on the Alert component's restrictions
type AlertVariant = "default" | "destructive" 

// Define extended variants that include our visual variants
type ExtendedAlertVariant = AlertVariant | "warning" | "success"

interface AlertPreviewProps {
  variant?: ExtendedAlertVariant;
  minimal?: boolean;
}

export function AlertPreview({ variant = "default", minimal = false }: AlertPreviewProps) {
  // Define icons for our variants
  const icons: Record<ExtendedAlertVariant, ReactNode> = {
    default: <Terminal className="h-4 w-4" />,
    destructive: <AlertTriangle className="h-4 w-4" />,
    warning: <Info className="h-4 w-4" />,
    success: <CheckCircle className="h-4 w-4" />
  }
  
  // Define titles for our variants
  const titles: Record<ExtendedAlertVariant, string> = {
    default: "Heads up!",
    destructive: "Error",
    warning: "Warning",
    success: "Success"
  }
  
  // Define descriptions for our variants
  const descriptions: Record<ExtendedAlertVariant, string> = {
    default: "You can add components to your app using the CLI.",
    destructive: "Your session has expired. Please log in again to continue.",
    warning: "Please back up your data before continuing.",
    success: "Your changes have been successfully saved."
  }

  // Map extended variants to valid Alert variants
  const getAlertVariant = (extendedVariant: ExtendedAlertVariant): AlertVariant => {
    // Only "default" and "destructive" are supported by the Alert component
    return extendedVariant === "default" || extendedVariant === "destructive"
      ? extendedVariant
      : "default" // Fall back to default for other variants
  }

  if (minimal) {
    return (
      <Alert variant={getAlertVariant(variant)} className="w-full max-w-xs">
        {icons[variant]}
        <AlertTitle>{titles[variant]}</AlertTitle>
      </Alert>
    )
  }

  return (
    <Alert variant={getAlertVariant(variant)}>
      {icons[variant]}
      <AlertTitle>{titles[variant]}</AlertTitle>
      <AlertDescription>
        {descriptions[variant]}
      </AlertDescription>
    </Alert>
  )
} 