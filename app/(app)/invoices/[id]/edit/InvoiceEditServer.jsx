import { Text } from '@/ui/atoms/Text'
import { getInvoiceAction } from '../../actions/getInvoice'
import { toEditorInitial } from '../../hooks/toEditorInitial'
import { InvoiceEditor } from '../../components/InvoiceEditor'

// Server-side load for editing an invoice, seeded into the editor.
export async function InvoiceEditServer({ params }) {
  const { id } = await params
  const invoice = await getInvoiceAction(id)

  if (!invoice) return <Text>Invoice not found.</Text>

  return <InvoiceEditor mode="edit" initial={toEditorInitial(invoice)} />
}
