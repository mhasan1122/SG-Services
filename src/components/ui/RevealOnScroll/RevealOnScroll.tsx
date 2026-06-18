import { type CSSProperties, type ReactNode } from 'react'
import { useInView } from '../../../hooks/useInView'
import './RevealOnScroll.css'

type RevealOnScrollProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function RevealOnScroll({
  children,
  className = '',
  delay = 0,
}: RevealOnScrollProps) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={[
        'reveal-on-scroll',
        isInView && 'reveal-on-scroll--visible',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}
