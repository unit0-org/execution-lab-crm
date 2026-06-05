import { writeLine } from './pdfWrite'

const rowText = (line) =>
  `${line.description || ''} - ${line.quantity} x `
  + `${line.unitAmount} = ${line.amount}`

// The invoice line items, one row each.
export function drawLines(ctx, lines) {
  ctx.y = writeLine(ctx, 'ITEMS', { bold: true, size: 10 })

  for (const line of lines) {
    ctx.y = writeLine(ctx, rowText(line))
  }

  ctx.y -= 10
}
