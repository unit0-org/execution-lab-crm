'use client'

import { useContactsBoardData } from '../hooks/useContactsBoardData'
import { useAccountIndex } from '../hooks/useAccountIndex'
import { useSelection } from '../hooks/useSelection'
import { filterByTagName } from '@/lib/contacts/filterByTagName'
import { filterByAccount } from '@/lib/contacts/filterByAccount'
import { ContactsSection } from './ContactsSection'

export function ContactsBoard({ activeTag, activeAccount }) {
  const data = useContactsBoardData()
  const selection = useSelection()
  const byTag = filterByTagName(data.contacts, data.contactTagMap, data.labels, activeTag)
  const visible = filterByAccount(byTag, activeAccount)

  return (
    <ContactsSection
      contacts={visible}
      accountById={useAccountIndex(data.accounts)}
      allLabels={data.labels}
      contactTagMap={data.contactTagMap}
      onMutate={data.refresh}
      selection={selection}
    />
  )
}
