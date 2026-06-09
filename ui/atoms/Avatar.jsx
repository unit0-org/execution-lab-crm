import Image from 'next/image'
import { initials } from './initials'
import { imageStyle, fallbackStyle } from './Avatar.styles'

export function Avatar({ src, name, size = 40 }) {
  const alt = name || ''

  if (src) {
    return (
      <Image src={src} alt={alt} width={size} height={size}
        style={imageStyle(size)} unoptimized />
    )
  }

  return (
    <span style={fallbackStyle(size)}>{initials(name)}</span>
  )
}
