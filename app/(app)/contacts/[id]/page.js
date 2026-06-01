import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { Link } from '@/ui/atoms/Link'
import { ContactDetailView } from '../components/ContactDetailView'

export default function ContactPage() {
  return (
    <Page>
      <Stack gap="md">
        <Link href="/contacts">← Back to contacts</Link>
        <ContactDetailView />
      </Stack>
    </Page>
  )
}
