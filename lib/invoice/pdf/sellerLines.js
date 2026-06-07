const cityLine = (c) =>
  [c.city, c.region].filter(Boolean).join(', ')
  + (c.postal_code ? ` ${c.postal_code}` : '')

// Seller contact + full address lines (email, street, city/region/zip,
// country, tax id), skipping any blanks.
export function sellerLines(company) {
  return [
    company.email,
    company.address_line1,
    company.address_line2,
    cityLine(company),
    company.country,
    company.tax_id
  ].filter(Boolean)
}
