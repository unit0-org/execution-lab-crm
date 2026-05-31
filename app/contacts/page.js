import { Page } from '@/ui/layout/Page'
import { Heading } from '@/ui/atoms/Heading'
import { Stack } from '@/ui/layout/Stack'
import { Link } from '@/ui/atoms/Link'
import { ContactList } from './components/ContactList'
import { listContacts } from '@/lib/contacts/list'

export const dynamic = 'force-dynamic'

export default async function ContactsPage() {
  const contacts = await listContacts()

  return (
    <Page>
      <Stack gap="md">
        <Heading>Contacts</Heading>
        <Link href="/contacts/new">+ New contact</Link>
        <ContactList contacts={contacts} />
      </Stack>
    </Page>
  )
}
