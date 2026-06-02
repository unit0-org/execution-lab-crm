'use client'

import { useContacts } from '../hooks/useContacts'
import { useContactSelection } from '../hooks/useContactSelection'
import { ContactsToolbar } from './ContactsToolbar'
import { ContactsBody } from './ContactsBody'

export function ContactsView() {
  const { contacts, loading, reload } = useContacts()
  const selection = useContactSelection(contacts)

  return (
    <>
      <ContactsToolbar contacts={contacts} selection={selection}
        onChanged={reload} />
      <ContactsBody loading={loading} contacts={contacts}
        selection={selection} onChanged={reload} />
    </>
  )
}
