import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { Link } from '@/ui/atoms/Link'
import { ContactDetail } from '../components/ContactDetail'
import { NotFound } from '../components/NotFound'
import { getContact } from '@/lib/contacts/get'

export const dynamic = 'force-dynamic'

export default async function ContactPage({ params }) {
  const { id } = await params
  const contact = await getContact(id)
  if (!contact) return <NotFound />

  return (
    <Page>
      <Stack gap="md">
        <Link href="/contacts">← Back to contacts</Link>
        <ContactDetail contact={contact} />
      </Stack>
    </Page>
  )
}
