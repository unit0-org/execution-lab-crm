import { margin, contentWidth, contentRight } from '@/lib/pdf/pdfPage'

const w = contentWidth

// Column anchors: description left edge, number columns' right edges.
export const lineCols = {
  desc: margin,
  qty: margin + w * 0.63,
  unit: margin + w * 0.81,
  amount: contentRight
}
