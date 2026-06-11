import { ImageResponse } from 'next/og'
import { ogCard } from './components/ogCard'

export const alt = 'The Execution Lab — Fundamentals Registration'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// The shared-link preview image for every portal page.
export default function Image() {
  return new ImageResponse(ogCard(), size)
}
