import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { InvoiceEditorView } from '../../components/InvoiceEditorView'

export default function EditInvoicePage() {
  return (
    <Page>
      <Stack gap="md">
        <InvoiceEditorView mode="edit" />
      </Stack>
    </Page>
  )
}
