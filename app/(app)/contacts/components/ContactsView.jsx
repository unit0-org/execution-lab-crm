'use client'

import { useContacts } from '../hooks/useContacts'
import { useContactSelection } from '../hooks/useContactSelection'
import { ContactsToolbar } from './ContactsToolbar'
import { ContactList } from './ContactList'
import { ContactListSkeleton } from './ContactListSkeleton'

export function ContactsView() {
  const { contacts, loading, reload } = useContacts()
  const selection = useContactSelection(contacts)

  if (loading) return <ContactListSkeleton />

  return (
    <>
      <ContactsToolbar contacts={contacts} selection={selection}
        onChanged={reload} />
      <ContactList contacts={contacts} selection={selection}
        onChanged={reload} />
    </>
  )
}
