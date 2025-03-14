import Image from "next/image"

interface ContributorAvatarProps {
  index: number
}

export function ContributorAvatar({ index }: ContributorAvatarProps) {
  // This is just a placeholder - in a real app, you'd use actual contributor data
  return (
    <div className="relative h-12 w-12 overflow-hidden rounded-full border bg-muted">
      <Image
        src={`/placeholder.svg?height=48&width=48&text=${index + 1}`}
        alt={`Contributor ${index + 1}`}
        width={48}
        height={48}
        className="object-cover"
      />
    </div>
  )
}

