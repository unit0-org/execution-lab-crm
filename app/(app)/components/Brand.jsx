import Link from 'next/link'
import { brandStyle, brandMarkStyle } from './Brand.styles'

export function Brand() {
  return (
    <Link href="/" style={brandStyle}>
      <span style={brandMarkStyle} aria-hidden />
      Lab
    </Link>
  )
}
