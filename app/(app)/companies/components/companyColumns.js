const name = (c) => c.name || ''
const email = (c) => c.invoice_email || ''
const website = (c) => c.website || ''

export const columns = [
  { label: 'Name', key: 'name', sortBy: name },
  { label: 'Invoice email', key: 'email', sortBy: email },
  { label: 'Website', key: 'website', sortBy: website },
  { label: 'Contacts', key: 'contacts' }
]
