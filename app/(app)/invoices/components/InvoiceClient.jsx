import { Link } from '@/ui/atoms/Link'

// The invoice's client, linked to their CRM contact when one exists (an
// invoice may instead carry only a bill-to name, with no linked contact).
export function InvoiceClient({ invoice }) {
  if (!invoice.contactId) return invoice.client

  return <Link href={`/contacts/${invoice.contactId}`}>{invoice.client}</Link>
}
