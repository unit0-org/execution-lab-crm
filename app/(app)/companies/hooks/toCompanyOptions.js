// Company rows → autocomplete options; legalName bills to the legal
// entity, falling back to the trading name ({ value, label, legalName,
// email, address }).
export function toCompanyOptions(companies) {
  return companies.map((c) => ({
    value: c.id,
    label: c.name || '',
    legalName: c.legal_name || c.name || '',
    email: c.invoice_email || '',
    address: c.address || ''
  }))
}
