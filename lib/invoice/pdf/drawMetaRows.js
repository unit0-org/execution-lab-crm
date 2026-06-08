import { pen } from './pen'
import { palette } from './palette'
import { formatDate } from './formatDate'
import { contentRight } from '@/lib/pdf/pdfPage'

const LABEL_X = contentRight - 130

function metaRow(ctx, label, value, y, accent) {
  pen(ctx, label, { x: LABEL_X, y, align: 'right', size: 8,
    font: ctx.fonts.semi, color: palette.subtle })
  pen(ctx, value, { x: contentRight, y, align: 'right', size: 11,
    font: ctx.fonts.mono, color: accent ? palette.accent : palette.ink })
}

// Invoice number (accent) + issue/due dates; returns the bottom y.
export function drawMetaRows(ctx, invoice, top) {
  metaRow(ctx, 'INVOICE NO', `# ${invoice.number}`, top, true)
  metaRow(ctx, 'ISSUE DATE', formatDate(invoice.issued_at), top - 17)
  metaRow(ctx, 'DUE DATE', formatDate(invoice.due_at), top - 34)

  return top - 34
}
