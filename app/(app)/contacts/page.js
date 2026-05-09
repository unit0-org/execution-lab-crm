import { Page } from '@/ui/Page'
import { ContactsHeader } from './components/ContactsHeader'
import { ContactsNotices } from './components/ContactsNotices'
import { ContactsBoard } from './components/ContactsBoard'

export const dynamic = 'force-dynamic'
export const maxDuration = 300

export default async function ContactsPage({ searchParams }) {
  const params = await searchParams
  const activeTag = params?.tag || ''
  const activeAccount = params?.account || ''
  return (
    <Page width="wide">
      <ContactsHeader activeTag={activeTag} />
      <ContactsNotices connected={params?.connected === '1'} error={params?.error} />
      <ContactsBoard activeTag={activeTag} activeAccount={activeAccount} />
    </Page>
  )
}
