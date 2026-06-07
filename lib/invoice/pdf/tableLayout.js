import { margin, contentRight } from '@/lib/pdf/pdfPage'

// Column anchors for the line-item table (numeric columns right-aligned).
export const cols = [
  { x: margin, align: 'left' },
  { x: 360, align: 'right' },
  { x: 455, align: 'right' },
  { x: contentRight, align: 'right' }
]
