'use client'

import { useContacts } from '../hooks/useContacts'
import { ContactList } from './ContactList'

export function ContactsView() {
  const { contacts } = useContacts()

  return <ContactList contacts={contacts} />
}
