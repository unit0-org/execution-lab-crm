'use client'

import { useContactsBoardData } from '../hooks/useContactsBoardData'
import { useAccountIndex } from '../hooks/useAccountIndex'
import { useSelection } from '../hooks/useSelection'
import { filterByTagName } from '@/lib/contacts/filterByTagName'
import { AccountsSection } from './AccountsSection'
import { ContactsSection } from './ContactsSection'

export function ContactsBoard({ activeTag }) {
  const data = useContactsBoardData()
  const selection = useSelection()
  const visible = filterByTagName(data.contacts, data.contactTagMap, data.labels, activeTag)

  return (
    <>
      <AccountsSection accounts={data.accounts} onMutate={data.refresh} />
      <ContactsSection
        contacts={visible}
        accountById={useAccountIndex(data.accounts)}
        allLabels={data.labels}
        contactTagMap={data.contactTagMap}
        allTypes={data.types}
        contactTypeMap={data.contactTypeMap}
        onMutate={data.refresh}
        selection={selection}
      />
    </>
  )
}
