import { Suspense } from 'react'
import { Page } from '@/ui/layout/Page'
import { Heading } from '@/ui/atoms/Heading'
import { Stack } from '@/ui/layout/Stack'
import { Link } from '@/ui/atoms/Link'
import { ContactsView } from './components/ContactsView'

export default function ContactsPage() {
  return (
    <Page width="wide">
      <Stack gap="md">
        <Heading>Contacts</Heading>
        <Link href="/contacts/new">+ New contact</Link>
        <Suspense>
          <ContactsView />
        </Suspense>
      </Stack>
    </Page>
  )
}
