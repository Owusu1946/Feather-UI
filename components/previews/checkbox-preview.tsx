import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface CheckboxPreviewProps {
  variant?: string;
}

export function CheckboxPreview({ variant = "default" }: CheckboxPreviewProps) {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms1" />
        <Label htmlFor="terms1">Accept terms and conditions</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms2" checked />
        <Label htmlFor="terms2">Stay signed in</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms3" disabled />
        <Label htmlFor="terms3" className="text-muted-foreground">Disabled option</Label>
      </div>
    </div>
  );
} 