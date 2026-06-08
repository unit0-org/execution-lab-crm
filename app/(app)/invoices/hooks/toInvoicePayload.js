export const GST_RATE = 0.05

// Editor state → create/update server action payload.
export function toInvoicePayload(fields, lines) {
  return {
    number: fields.number ? fields.number.trim() : null,
    contactId: fields.client.contactId || null,
    billToName: fields.client.name || null,
    billToEmail: fields.client.email || null,
    issuedAt: fields.issuedAt || null,
    dueAt: fields.dueAt || null,
    taxRate: fields.gst ? GST_RATE : 0,
    lines
  }
}
