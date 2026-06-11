import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { InvoiceEditorView } from '../components/InvoiceEditorView'

export default function NewInvoicePage() {
  return (
    <Page>
      <Stack gap="md">
        <InvoiceEditorView mode="create" />
      </Stack>
    </Page>
  )
}
