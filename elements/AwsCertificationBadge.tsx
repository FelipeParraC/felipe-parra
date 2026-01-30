import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

interface AwsCertificationBadgeProps {
  name: string
  image: string
  url: string
}

export function AwsCertificationBadge({
  name,
  image,
  url,
}: AwsCertificationBadgeProps) {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='group flex flex-col items-center gap-4 p-6 rounded-xl border border-border bg-card/60
                 hover:border-primary transition-all duration-300
                 hover:shadow-lg hover:shadow-primary/10'
    >
      <div className='relative w-48 h-48'>
        <Image
          src={image}
          alt={name}
          fill
          className='object-contain transition-transform duration-300 group-hover:scale-105'
        />
      </div>

      <div className='flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors'>
        <span>{name}</span>
        <ExternalLink className='w-4 h-4' />
      </div>
    </a>
  )
}
