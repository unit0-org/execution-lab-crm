// Bill-to for a company invoice, derived from the live company record so
// it reflects the current legal name, address and business number rather
// than a stale snapshot. A person invoice keeps its own snapshot ({}).
export function companyBillTo(invoice) {
  const company = invoice.company

  if (!company) return {}

  return {
    bill_to_name: company.legal_name || company.name || invoice.bill_to_name,
    bill_to_email: company.invoice_email || invoice.bill_to_email,
    bill_to_address: company.address || invoice.bill_to_address,
    bill_to_business_number: company.business_number || null
  }
}
