'use client'

import { FilterBar } from '@/ui/molecules/FilterBar'
import { CONTACT_FILTERS } from './contactFilters'
import { criteriaParams } from './contactsCriteria'
import { ContactControls } from './ContactControls'
import { ContactsToolbar } from './ContactsToolbar'
import { ContactsBody } from './ContactsBody'
import { useContactsView } from '../hooks/useContactsView'

export function ContactsView({ criteria, initialContacts, eventOptions }) {
  const view = useContactsView(criteria, initialContacts, eventOptions)

  return (
    <>
      <FilterBar options={CONTACT_FILTERS} active={criteria.filter}
        basePath="/contacts" param="filter" keep={criteriaParams(criteria)} />
      <ContactControls view={view} />
      <ContactsToolbar contacts={view.contacts} selection={view.selection}
        cats={view.cats} onChanged={view.reload} />
      <ContactsBody contacts={view.search.results}
        selection={view.selection} onChanged={view.reload} />
    </>
  )
}
