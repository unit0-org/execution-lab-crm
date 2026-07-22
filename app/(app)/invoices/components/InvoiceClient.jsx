import { Link } from '@/ui/atoms/Link'

const clientHref = (invoice) => {
  if (invoice.contactId) return `/contacts/${invoice.contactId}`

  if (invoice.companyId) return `/companies/${invoice.companyId}`

  return null
}

// The invoice's client, linked to its CRM contact or company when one
// exists (an invoice may instead carry only a bare bill-to name).
export function InvoiceClient({ invoice }) {
  const href = clientHref(invoice)

  if (!href) return invoice.client

  return <Link href={href}>{invoice.client}</Link>
}
