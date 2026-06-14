'use client'

import { FilterBar } from '@/ui/molecules/FilterBar'
import { Inline } from '@/ui/layout/Inline'
import { CONTACT_FILTERS } from './contactFilters'
import { ContactSearch } from './ContactSearch'
import { LabelFilter } from './LabelFilter'
import { ContactsToolbar } from './ContactsToolbar'
import { ContactsBody } from './ContactsBody'
import { useContactsView } from '../hooks/useContactsView'

export function ContactsView({ filter, initialContacts }) {
  const view = useContactsView(filter, initialContacts)

  return (
    <>
      <FilterBar options={CONTACT_FILTERS} active={filter}
        basePath="/contacts" param="filter" />
      <Inline gap="sm">
        <ContactSearch value={view.search.query}
          onChange={view.search.setQuery} />
        <LabelFilter options={view.labelOptions} filter={view.labelFilter} />
      </Inline>
      <ContactsToolbar contacts={view.contacts} selection={view.selection}
        cats={view.cats} onChanged={view.reload} />
      <ContactsBody contacts={view.search.results}
        selection={view.selection} onChanged={view.reload} />
    </>
  )
}
