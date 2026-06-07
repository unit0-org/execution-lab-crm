import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { Link } from '@/ui/atoms/Link'
import { InvoiceEditorView } from '../../components/InvoiceEditorView'

export default function EditInvoicePage() {
  return (
    <Page>
      <Stack gap="md">
        <Link href="/invoices">← Back to invoices</Link>
        <InvoiceEditorView mode="edit" />
      </Stack>
    </Page>
  )
}
