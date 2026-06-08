import { rgb } from 'pdf-lib'
import { margin, contentWidth } from '@/lib/pdf/pdfPage'

const A = [0x5e, 0x7c, 0xff]
const B = [0x5e, 0xff, 0xb7]
const mix = (a, b, t) => (a + (b - a) * t) / 255

// The blue→mint brand gradient divider, drawn as thin segments.
export function gradientRule(ctx, y) {
  const n = 120
  const w = contentWidth / n

  for (let i = 0; i < n; i++) {
    const t = i / (n - 1)

    ctx.page.drawRectangle({
      x: margin + i * w, y, width: w + 0.6, height: 3,
      color: rgb(mix(A[0], B[0], t), mix(A[1], B[1], t), mix(A[2], B[2], t))
    })
  }
}
