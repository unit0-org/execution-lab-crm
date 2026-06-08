import { pen } from './pen'
import { palette } from './palette'
import { margin } from '@/lib/pdf/pdfPage'

// The "Bill To" block: label, client name, client email.
export function drawParties(ctx, invoice) {
  pen(ctx, 'BILL TO', {
    x: margin, y: ctx.y, size: 9.5, font: ctx.fonts.semi,
    color: palette.subtle
  })

  const nameY = ctx.y - 24

  pen(ctx, invoice.bill_to_name || '', {
    x: margin, y: nameY, size: 16, font: ctx.fonts.bold, color: palette.ink
  })
  pen(ctx, invoice.bill_to_email || '', {
    x: margin, y: nameY - 18, size: 12, font: ctx.fonts.mono,
    color: palette.muted
  })

  ctx.y = nameY - 52
}
