const EMPTY_LINE = { description: '', quantity: '1', unitAmount: '' }

const EMPTY_CLIENT = { contactId: null, name: '', email: '' }

// A fresh editor state for creating an invoice.
export function blankInitial() {
  return {
    id: null,
    client: { ...EMPTY_CLIENT },
    issuedAt: '',
    dueAt: '',
    gst: false,
    lines: [{ ...EMPTY_LINE }]
  }
}
