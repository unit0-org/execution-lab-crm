import { writeLine } from '@/lib/pdf/pdfWrite'
import { drawText } from '@/lib/pdf/drawText'
import { palette } from './palette'
import { margin } from '@/lib/pdf/pdfPage'

const body = { x: margin, size: 11, color: palette.ink }

// The "bill to" block for the client.
export function drawParties(ctx, invoice) {
  drawText(ctx, 'BILL TO', {
    x: margin, y: ctx.y, size: 9, bold: true, color: palette.accent
  })
  ctx.y -= 18

  ctx.y = writeLine(ctx, invoice.bill_to_name, { ...body, bold: true })
  ctx.y = writeLine(ctx, invoice.bill_to_email, body)
  ctx.y = writeLine(ctx, invoice.bill_to_address, { ...body, gap: 34 })
}
