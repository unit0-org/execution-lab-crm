// An invoice's bill-to fields → editor client state (person or company).
export function toEditorClient(invoice) {
  return {
    kind: invoice.company_id ? 'company' : 'contact',
    contactId: invoice.contact_id || null,
    companyId: invoice.company_id || null,
    name: invoice.bill_to_name || '',
    email: invoice.bill_to_email || '',
    address: invoice.bill_to_address || ''
  }
}
