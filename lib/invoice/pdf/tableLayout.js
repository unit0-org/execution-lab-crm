import { margin, contentRight } from '@/lib/pdf/pdfPage'

export const rowPad = 12

// Column anchors for the line-item table (numeric columns right-aligned),
// inset by rowPad so text never touches the row band edges.
export const cols = [
  { x: margin + rowPad, align: 'left' },
  { x: 360, align: 'right' },
  { x: 455, align: 'right' },
  { x: contentRight - rowPad, align: 'right' }
]
