import { type ImgHTMLAttributes } from 'react'

type LazyImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  eager?: boolean
}

export function LazyImage({
  eager = false,
  loading,
  decoding = 'async',
  ...props
}: LazyImageProps) {
  return (
    <img
      loading={loading ?? (eager ? 'eager' : 'lazy')}
      decoding={decoding}
      {...props}
    />
  )
}
