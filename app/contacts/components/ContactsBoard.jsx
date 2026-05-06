'use client'

import { useAccounts } from '../hooks/useAccounts'
import { useContacts } from '../hooks/useContacts'
import { useAccountIndex } from '../hooks/useAccountIndex'
import { AccountsSection } from './AccountsSection'
import { ContactsSection } from './ContactsSection'

export function ContactsBoard() {
  const { accounts, refresh: refreshAccounts } = useAccounts()
  const { contacts, refresh: refreshContacts } = useContacts()
  const refreshAll = () => { refreshAccounts(); refreshContacts() }

  return (
    <>
      <AccountsSection accounts={accounts} onMutate={refreshAll} />
      <ContactsSection contacts={contacts} accountById={useAccountIndex(accounts)} />
    </>
  )
}
