import { createClient } from '@/lib/supabase/server'
import { loadAccounts, loadContacts, indexById } from './_data'
import { Header } from './_components/Header'
import { Notice } from './_components/Notice'
import { AccountsSection } from './_components/AccountsSection'
import { ContactsSection } from './_components/ContactsSection'
import { page } from './_styles'

export const dynamic = 'force-dynamic'

export default async function ContactsPage({ searchParams }) {
  const params = await searchParams
  const supabase = await createClient()
  const accounts = await loadAccounts(supabase)
  const contacts = await loadContacts(supabase)

  return (
    <main style={page}>
      <Header />
      {params?.connected === '1' && <Notice tone="success">Account connected. Click <strong>Sync</strong> to pull contacts.</Notice>}
      {params?.error && <Notice tone="error">{params.error}</Notice>}
      <AccountsSection accounts={accounts} />
      <ContactsSection contacts={contacts} accountById={indexById(accounts)} />
    </main>
  )
}
