import { Page } from '@/ui/layout/Page'
import { Heading } from '@/ui/atoms/Heading'
import { Stack } from '@/ui/layout/Stack'
import { Link } from '@/ui/atoms/Link'
import { ContactsServer } from './ContactsServer'

export default function ContactsPage({ searchParams }) {
  return (
    <Page width="wide">
      <Stack gap="md">
        <Heading>Contacts</Heading>
        <Link href="/contacts/new">+ New contact</Link>
        <ContactsServer searchParams={searchParams} />
      </Stack>
    </Page>
  )
}
