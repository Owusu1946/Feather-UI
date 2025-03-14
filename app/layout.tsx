import type React from "react"
import { Mona_Sans as FontSans } from "next/font/google"
import localFont from "next/font/local"

import "@/app/globals.css"
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Optional: Add a heading font
const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

export const metadata = {
  title: "Feather.UI - Lightweight UI Components library",
  description:
    "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
    author: 'Owusu1956'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, fontHeading.variable)}>
        {children}
      </body>
    </html>
  )
}



import './globals.css'