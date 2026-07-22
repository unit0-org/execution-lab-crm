export const GST_RATE = 0.05

// Editor state → create/update server action payload.
export function toInvoicePayload(fields, lines) {
  const isCompany = fields.client.kind === 'company'

  return {
    number: fields.number ? fields.number.trim() : null,
    contactId: isCompany ? null : fields.client.contactId || null,
    companyId: isCompany ? fields.client.companyId || null : null,
    billToName: fields.client.name || null,
    billToEmail: fields.client.email || null,
    billToAddress: fields.client.address || null,
    issuedAt: fields.issuedAt || null,
    dueAt: fields.dueAt || null,
    taxRate: fields.gst ? GST_RATE : 0,
    lines
  }
}
