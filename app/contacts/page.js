import { Page } from '@/ui/layout/Page'
import { Heading } from '@/ui/atoms/Heading'
import { Stack } from '@/ui/layout/Stack'
import { Link } from '@/ui/atoms/Link'
import { ContactsView } from './components/ContactsView'

export default function ContactsPage() {
  return (
    <Page>
      <Stack gap="md">
        <Heading>Contacts</Heading>
        <Link href="/contacts/new">+ New contact</Link>
        <ContactsView />
      </Stack>
    </Page>
  )
}
