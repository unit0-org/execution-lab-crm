import { buildInvoiceCode } from '@/lib/invoice/controllers/buildInvoiceCode'
import { emptyClient } from './emptyClient'

const EMPTY_LINE =
  { description: '', detail: '', quantity: '1', unitAmount: '' }

const today = () => new Date().toISOString().slice(0, 10)

// A fresh editor state for creating an invoice — dates default to today.
export function blankInitial() {
  return {
    id: null,
    number: buildInvoiceCode(today()),
    client: emptyClient(),
    issuedAt: today(),
    dueAt: today(),
    gst: false,
    lines: [{ ...EMPTY_LINE }]
  }
}
