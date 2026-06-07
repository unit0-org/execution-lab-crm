import { writeLine } from '@/lib/pdf/pdfWrite'
import { palette } from './palette'
import { margin } from '@/lib/pdf/pdfPage'

// Optional free-text notes under the totals.
export function drawNotes(ctx, notes) {
  if (!notes) return

  ctx.y = writeLine(ctx, 'NOTES', {
    x: margin, bold: true, size: 9, color: palette.muted
  })
  ctx.y = writeLine(ctx, notes, { x: margin, size: 10, color: palette.ink })
}
