'use client'

import { ContactList } from './ContactList'

export function ContactsBody({ contacts, selection, onChanged }) {
  return (
    <ContactList contacts={contacts} selection={selection}
      onChanged={onChanged} />
  )
}
