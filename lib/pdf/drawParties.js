import { writeLine } from './pdfWrite'

// The "bill to" block for the client.
export function drawParties(ctx, invoice) {
  ctx.y = writeLine(ctx, 'BILL TO', { bold: true, size: 10 })
  ctx.y = writeLine(ctx, invoice.bill_to_name)
  ctx.y = writeLine(ctx, invoice.bill_to_email)
  ctx.y = writeLine(ctx, invoice.bill_to_address, { gap: 24 })
}
