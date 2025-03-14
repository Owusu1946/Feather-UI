import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { ExamplesSection } from "@/components/sections/ExamplesSection"
import { ContributorsSection } from "@/components/sections/ContributorsSection"
import { CTASection } from "@/components/sections/CTASection"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ExamplesSection />
        <ContributorsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

