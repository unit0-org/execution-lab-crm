import { pen } from './pen'
import { palette } from './palette'
import { margin } from '@/lib/pdf/pdfPage'

// The "Bill To" block: label, client name, client email.
export function drawParties(ctx, invoice) {
  pen(ctx, 'BILL TO', {
    x: margin, y: ctx.y, size: 8, font: ctx.fonts.semi,
    color: palette.subtle
  })

  const nameY = ctx.y - 20

  pen(ctx, invoice.bill_to_name || '', {
    x: margin, y: nameY, size: 15, font: ctx.fonts.bold, color: palette.ink
  })
  pen(ctx, invoice.bill_to_email || '', {
    x: margin, y: nameY - 16, size: 11, font: ctx.fonts.mono,
    color: palette.muted
  })

  ctx.y = nameY - 46
}
