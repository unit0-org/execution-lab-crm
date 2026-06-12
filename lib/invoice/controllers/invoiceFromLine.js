// The invoice sender line, from the org's invoice settings.
export function invoiceFromLine(setting) {
  const name = setting.from_name || 'Invoices'
  const email = setting.from_email || 'invoices@example.com'

  return `${name} <${email}>`
}
