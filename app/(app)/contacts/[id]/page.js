import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { ContactDetailServer } from './ContactDetailServer'

export default function ContactPage({ params }) {
  return (
    <Page>
      <Stack gap="md">
        <ContactDetailServer params={params} />
      </Stack>
    </Page>
  )
}
