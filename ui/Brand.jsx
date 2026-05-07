import Link from 'next/link'
import { brandStyle, brandMarkStyle } from './Brand.styles'

// Wordmark + cobalt dot, links home. App uses this directly.
export function Brand({ word = 'Lab', href = '/' }) {
  return (
    <Link href={href} style={brandStyle}>
      <span style={brandMarkStyle} aria-hidden />
      {word}
    </Link>
  )
}
