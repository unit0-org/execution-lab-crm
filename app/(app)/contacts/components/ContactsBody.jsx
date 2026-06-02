'use client'

import { ContactList } from './ContactList'
import { ContactListSkeleton } from './ContactListSkeleton'

export function ContactsBody({ loading, contacts, selection, onChanged }) {
  if (loading) return <ContactListSkeleton />

  return (
    <ContactList contacts={contacts} selection={selection}
      onChanged={onChanged} />
  )
}
