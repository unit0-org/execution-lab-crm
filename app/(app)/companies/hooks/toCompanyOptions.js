// Company rows → autocomplete options ({ value, label, email, address }).
export function toCompanyOptions(companies) {
  return companies.map((c) => ({
    value: c.id,
    label: c.name || '',
    email: c.invoice_email || '',
    address: c.address || ''
  }))
}
