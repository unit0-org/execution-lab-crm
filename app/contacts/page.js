import { createClient } from '@/lib/supabase/server'
import { Page } from '@/ui/Page'
import { useAccounts } from './hooks/useAccounts'
import { useContacts } from './hooks/useContacts'
import { useAccountIndex } from './hooks/useAccountIndex'
import { ContactsHeader } from './components/ContactsHeader'
import { ContactsNotices } from './components/ContactsNotices'
import { AccountsSection } from './components/AccountsSection'
import { ContactsSection } from './components/ContactsSection'

export const dynamic = 'force-dynamic'

export default async function ContactsPage({ searchParams }) {
  const params = await searchParams
  const supabase = await createClient()
  const accounts = await useAccounts(supabase)
  const contacts = await useContacts(supabase)

  return (
    <Page width="wide">
      <ContactsHeader />
      <ContactsNotices connected={params?.connected === '1'} error={params?.error} />
      <AccountsSection accounts={accounts} />
      <ContactsSection contacts={contacts} accountById={useAccountIndex(accounts)} />
    </Page>
  )
}
