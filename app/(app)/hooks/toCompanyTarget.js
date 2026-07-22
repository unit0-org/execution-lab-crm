// Shape a company row for the command palette: id, name, its invoice email
// as the subtitle, no photo, and the link to its page.
export function toCompanyTarget(company) {
  return {
    id: company.id,
    name: company.name || '',
    subtitle: company.invoice_email || '',
    photo: null,
    href: `/companies/${company.id}`
  }
}
