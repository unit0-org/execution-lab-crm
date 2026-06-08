import { buildInvoiceCode } from '@/lib/invoice/controllers/buildInvoiceCode'

const EMPTY_LINE = { description: '', quantity: '1', unitAmount: '' }

const EMPTY_CLIENT = { contactId: null, name: '', email: '' }

const today = () => new Date().toISOString().slice(0, 10)

// A fresh editor state for creating an invoice — dates default to today.
export function blankInitial() {
  return {
    id: null,
    number: buildInvoiceCode(today()),
    client: { ...EMPTY_CLIENT },
    issuedAt: today(),
    dueAt: today(),
    gst: false,
    lines: [{ ...EMPTY_LINE }]
  }
}
