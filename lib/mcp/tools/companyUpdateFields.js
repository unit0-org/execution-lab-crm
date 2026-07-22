// Map provided update_company args to company column names, omitting any
// that were not supplied.
const MAP = {
  name: 'name',
  legalName: 'legal_name',
  address: 'address',
  businessNumber: 'business_number',
  invoiceEmail: 'invoice_email',
  website: 'website'
}

export function companyUpdateFields(a) {
  const fields = {}

  for (const key of Object.keys(MAP))
    if (a[key] !== undefined) fields[MAP[key]] = a[key]

  return fields
}
