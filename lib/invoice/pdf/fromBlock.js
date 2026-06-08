const cityLine = (c) =>
  [c.city, c.region].filter(Boolean).join(', ')
  + (c.postal_code ? ` ${c.postal_code}` : '')

// Seller "from" block: name, address lines (no tax id), and BN.
export function fromBlock(company) {
  const lines = [
    company.email, company.address_line1, company.address_line2,
    cityLine(company), company.country
  ].filter(Boolean)

  return {
    name: company.legal_name || 'Your Company',
    lines,
    bn: company.tax_id
  }
}
