import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { InvoiceEditor } from '../components/InvoiceEditor'
import { blankInitial } from '../hooks/blankInitial'

export default function NewInvoicePage() {
  return (
    <Page>
      <Stack gap="md">
        <InvoiceEditor mode="create" initial={blankInitial()} />
      </Stack>
    </Page>
  )
}
