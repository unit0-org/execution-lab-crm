import { drawText } from './drawText'
import { palette } from './pdfColor'
import { contentRight } from './pdfPage'

export const labelX = 430

// One right-aligned totals line: label and value at the two anchors.
export function totalRow(ctx, label, value, opts = {}) {
  const o = { align: 'right', color: opts.color || palette.ink }

  drawText(ctx, label, { ...o, x: labelX, y: ctx.y })
  drawText(ctx, value, { ...o, x: contentRight, y: ctx.y, bold: opts.bold })
  ctx.y -= opts.gap || 20
}
