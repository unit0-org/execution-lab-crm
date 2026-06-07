// An invoice's bill-to fields → editor client state.
export function toEditorClient(invoice) {
  return {
    contactId: invoice.contact_id || null,
    name: invoice.bill_to_name || '',
    email: invoice.bill_to_email || ''
  }
}
