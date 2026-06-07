'use client'

import { parseAmountCents } from '@/lib/invoice/controllers/parseAmountCents'
import { formatMoney } from '@/lib/purchase/controllers/formatMoney'
import { GST_RATE } from './toInvoicePayload'

const lineCents = (line) =>
  (Number(line.quantity) || 1) * parseAmountCents(line.unitAmount)

export function useEditorTotals(lines, gst) {
  const subtotal = lines.reduce((sum, l) => sum + lineCents(l), 0)
  const tax = gst ? Math.round(subtotal * GST_RATE) : 0

  return {
    subtotal: formatMoney(subtotal, 'cad'),
    tax: formatMoney(tax, 'cad'),
    total: formatMoney(subtotal + tax, 'cad')
  }
}
