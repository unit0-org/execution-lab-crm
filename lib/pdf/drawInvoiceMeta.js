import { drawText } from './drawText'
import { contentRight } from './pdfPage'
import { bandTop } from './drawBand'
import { metaRows } from './metaRows'

// Invoice number, status and dates under the band, right column.
export function drawInvoiceMeta(ctx, invoice) {
  let y = bandTop - 20

  metaRows(invoice).forEach((row) => {
    drawText(ctx, row.text, {
      x: contentRight, y, align: 'right', size: row.size,
      bold: row.bold, color: row.color
    })
    y -= row.gap
  })
}
