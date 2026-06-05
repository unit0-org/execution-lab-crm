'use client'

import { useContacts } from '../hooks/useContacts'
import { useContactSelection } from '../hooks/useContactSelection'
import { useContactSearch } from '../hooks/useContactSearch'
import { FilterBar } from '@/ui/molecules/FilterBar'
import { CONTACT_FILTERS } from './contactFilters'
import { ContactSearch } from './ContactSearch'
import { ContactsToolbar } from './ContactsToolbar'
import { ContactsBody } from './ContactsBody'

export function ContactsView({ filter, initialContacts }) {
  const { contacts, loading, reload } = useContacts(filter, initialContacts)
  const selection = useContactSelection(contacts)
  const search = useContactSearch(contacts)

  return (
    <>
      <FilterBar options={CONTACT_FILTERS} active={filter}
        basePath="/contacts" param="filter" />
      <ContactSearch value={search.query} onChange={search.setQuery} />
      <ContactsToolbar contacts={contacts} selection={selection}
        onChanged={reload} />
      <ContactsBody loading={loading} contacts={search.results}
        selection={selection} onChanged={reload} />
    </>
  )
}
