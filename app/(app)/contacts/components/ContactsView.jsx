'use client'

import { useContacts } from '../hooks/useContacts'
import { useContactSelection } from '../hooks/useContactSelection'
import { FilterBar } from '@/ui/molecules/FilterBar'
import { CONTACT_FILTERS } from './contactFilters'
import { ContactsToolbar } from './ContactsToolbar'
import { ContactsBody } from './ContactsBody'

export function ContactsView({ filter, initialContacts }) {
  const { contacts, loading, reload } = useContacts(filter, initialContacts)
  const selection = useContactSelection(contacts)

  return (
    <>
      <FilterBar options={CONTACT_FILTERS} active={filter}
        basePath="/contacts" param="filter" />
      <ContactsToolbar contacts={contacts} selection={selection}
        onChanged={reload} />
      <ContactsBody loading={loading} contacts={contacts}
        selection={selection} onChanged={reload} />
    </>
  )
}
