import Image from "next/image"

interface ProfilePictureProps {
  src: string
  alt: string
  size?: "sm" | "md" | "lg"
}

const sizeClasses = {
  sm: "w-16 h-16",
  md: "w-32 h-32",
  lg: "w-40 h-40",
}

export function ProfilePicture({ src, alt, size = "md" }: ProfilePictureProps) {
  return (
    <div className={`relative ${sizeClasses[size]} mx-auto rounded-full overflow-hidden ring-4 ring-primary/30 shadow-2xl shadow-primary/20`}>
      <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-transparent z-10 pointer-events-none" />
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  )
}
