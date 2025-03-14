import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContributorAvatar } from "@/components/contributor-avatar"

export function ContributorsSection() {
  return (
    <section className="container py-8 md:py-12 lg:py-24 border-t">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Contributors</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Thanks to all the amazing people who have contributed to this project.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {Array.from({ length: 12 }).map((_, i) => (
          <ContributorAvatar key={i} index={i} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button variant="outline" asChild>
          <Link href="https://github.com/yourusername/yourui/graphs/contributors">View All Contributors</Link>
        </Button>
      </div>
    </section>
  )
} 