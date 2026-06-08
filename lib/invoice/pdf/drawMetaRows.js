import { pen } from './pen'
import { palette } from './palette'
import { formatDate } from './formatDate'
import { contentRight } from '@/lib/pdf/pdfPage'

function metaRow(ctx, label, value, y, accent, labelX) {
  pen(ctx, label, { x: labelX, y, align: 'right', size: 9.5,
    font: ctx.fonts.semi, color: palette.subtle })
  pen(ctx, value, { x: contentRight, y, align: 'right', size: 12,
    font: ctx.fonts.mono, color: accent ? palette.accent : palette.ink })
}

// Invoice number (accent) + issue/due dates; returns the bottom y. The
// label column sits left of the widest value so they never overlap,
// however long the invoice number runs.
export function drawMetaRows(ctx, invoice, top) {
  const number = `# ${invoice.number}`
  const valueW = ctx.fonts.mono.widthOfTextAtSize(number, 12)
  const labelX = contentRight - valueW - 20

  metaRow(ctx, 'INVOICE NO', number, top, true, labelX)
  metaRow(ctx, 'ISSUE DATE', formatDate(invoice.issued_at), top - 19,
    false, labelX)
  metaRow(ctx, 'DUE DATE', formatDate(invoice.due_at), top - 38,
    false, labelX)

  return top - 38
}
