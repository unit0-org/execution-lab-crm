import { getInvoiceAction } from '../actions/getInvoice'
import { InvoiceDetailView } from './components/InvoiceDetailView'

// Server-side load for a single invoice, seeded into the client view.
export async function InvoiceDetailServer({ params }) {
  const { id } = await params
  const invoice = await getInvoiceAction(id)

  return <InvoiceDetailView initialInvoice={invoice} />
}
