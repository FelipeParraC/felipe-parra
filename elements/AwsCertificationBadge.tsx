import Image from 'next/image'
import { BadgeCheck, ExternalLink } from 'lucide-react'

interface AwsCertificationBadgeProps {
  name: string
  image: string
  url: string
  delayClass?: string
}

export function AwsCertificationBadge({
  name,
  image,
  url,
  delayClass = '',
}: AwsCertificationBadgeProps) {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className={`surface-premium shine-on-hover hover-lift-glow group relative flex w-full max-w-[320px] flex-col items-center gap-6 rounded-[28px] p-7 text-center animate-reveal ${delayClass}`}
    >
      <div className='absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-primary/80 to-transparent' />
      <div className='absolute left-1/2 top-6 h-24 w-24 -translate-x-1/2 rounded-full bg-primary/12 blur-3xl animate-pulse-glow' />
      <span className='relative inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary'>
        <BadgeCheck className='h-3.5 w-3.5' />
        AWS Verified
      </span>

      <div className='relative h-48 w-48 animate-float-slow'>
        <Image
          src={image}
          alt={name}
          fill
          sizes="192px"
          className='object-contain drop-shadow-[0_24px_30px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:scale-[1.08]'
        />
      </div>

      <div className='relative space-y-3'>
        <p className='text-base font-semibold leading-7 text-foreground transition-colors group-hover:text-primary'>{name}</p>
        <div className='flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground transition-colors group-hover:text-primary'>
          <span>View credential</span>
          <ExternalLink className='h-3.5 w-3.5' />
        </div>
      </div>
    </a>
  )
}
