import { listInvoicesAction } from './actions/listInvoices'
import { InvoicesView } from './components/InvoicesView'

// Server-side initial load for the invoices list: fetch the first
// render on the server, then hand it to the client view (no skeleton
// waterfall on navigation).
export async function InvoicesServer() {
  const invoices = await listInvoicesAction()

  return <InvoicesView initialInvoices={invoices} />
}
