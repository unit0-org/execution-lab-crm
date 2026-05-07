'use client'

import { useContactsBoardData } from '../hooks/useContactsBoardData'
import { useAccountIndex } from '../hooks/useAccountIndex'
import { useSelection } from '../hooks/useSelection'
import { filterByTagName } from '@/lib/contacts/filterByTagName'
import { AccountsSection } from './AccountsSection'
import { ContactsSection } from './ContactsSection'

export function ContactsBoard({ activeTag }) {
  const { accounts, contacts, labels, contactTagMap, refresh } = useContactsBoardData()
  const selection = useSelection()
  const visible = filterByTagName(contacts, contactTagMap, labels, activeTag)
  return (
    <>
      <AccountsSection accounts={accounts} onMutate={refresh} />
      <ContactsSection
        contacts={visible}
        accountById={useAccountIndex(accounts)}
        allLabels={labels}
        contactTagMap={contactTagMap}
        onMutate={refresh}
        selection={selection}
      />
    </>
  )
}
