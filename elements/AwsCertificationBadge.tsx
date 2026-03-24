import Image from 'next/image'
import { BadgeCheck, ExternalLink } from 'lucide-react'

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
      className='group relative flex flex-col items-center gap-5 overflow-hidden rounded-2xl border border-border bg-card/70 p-6 text-center
                 hover:-translate-y-1 hover:border-primary transition-all duration-300
                 hover:shadow-xl hover:shadow-primary/10'
    >
      <div className='absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary via-[#0b4f84] to-[#07253d]' />
      <span className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary'>
        <BadgeCheck className='h-3.5 w-3.5' />
        AWS Verified
      </span>

      <div className='relative h-44 w-44'>
        <Image
          src={image}
          alt={name}
          fill
          className='object-contain transition-transform duration-300 group-hover:scale-105'
        />
      </div>

      <div className='space-y-2'>
        <p className='text-sm font-semibold text-foreground transition-colors group-hover:text-primary'>{name}</p>
        <div className='flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground transition-colors group-hover:text-primary'>
          <span>View credential</span>
          <ExternalLink className='h-3.5 w-3.5' />
        </div>
      </div>
    </a>
  )
}
