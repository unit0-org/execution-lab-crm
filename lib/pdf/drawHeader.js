import { writeLine } from './pdfWrite'

// Seller block plus the invoice's number and status.
export function drawHeader(ctx, invoice, company) {
  ctx.y = writeLine(ctx, company.legal_name, { bold: true, size: 20 })
  ctx.y = writeLine(ctx, company.email)
  ctx.y = writeLine(ctx, company.address_line1)
  ctx.y = writeLine(ctx, company.tax_id, { gap: 24 })
  ctx.y = writeLine(ctx, `Invoice ${invoice.number}`, { bold: true })
  ctx.y = writeLine(ctx, `Status: ${invoice.status}`, { gap: 24 })
}
