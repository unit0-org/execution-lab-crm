import { Page } from '@/ui/Page'
import { ContactsHeader } from './components/ContactsHeader'
import { ContactsNotices } from './components/ContactsNotices'
import { ContactsBoard } from './components/ContactsBoard'

export const dynamic = 'force-dynamic'

export default async function ContactsPage({ searchParams }) {
  const params = await searchParams
  return (
    <Page width="wide">
      <ContactsHeader />
      <ContactsNotices connected={params?.connected === '1'} error={params?.error} />
      <ContactsBoard />
    </Page>
  )
}
