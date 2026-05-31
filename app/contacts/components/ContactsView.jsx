'use client'

import { useContacts } from '../hooks/useContacts'
import { ContactList } from './ContactList'
import { ContactListSkeleton } from './ContactListSkeleton'

export function ContactsView() {
  const { contacts, loading } = useContacts()

  if (loading) return <ContactListSkeleton />

  return <ContactList contacts={contacts} />
}
