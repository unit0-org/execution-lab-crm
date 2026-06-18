'use client'

import { FilterBar } from '@/ui/molecules/FilterBar'
import { CONTACT_FILTERS } from './contactFilters'
import { ContactControls } from './ContactControls'
import { ContactsToolbar } from './ContactsToolbar'
import { ContactsBody } from './ContactsBody'
import { useContactsView } from '../hooks/useContactsView'

export function ContactsView({ filter, initialContacts }) {
  const view = useContactsView(filter, initialContacts)

  return (
    <>
      <FilterBar options={CONTACT_FILTERS} active={filter}
        basePath="/contacts" param="filter" />
      <ContactControls view={view} />
      <ContactsToolbar contacts={view.contacts} selection={view.selection}
        cats={view.cats} onChanged={view.reload} />
      <ContactsBody contacts={view.search.results}
        selection={view.selection} onChanged={view.reload} />
    </>
  )
}
