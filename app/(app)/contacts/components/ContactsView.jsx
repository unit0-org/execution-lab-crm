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
  const v = useContactsView(filter, initialContacts)

  return (
    <>
      <FilterBar options={CONTACT_FILTERS} active={filter}
        basePath="/contacts" param="filter" />
      <Inline gap="sm">
        <ContactSearch value={v.search.query} onChange={v.search.setQuery} />
        <LabelFilter options={v.labelOptions} filter={v.labelFilter} />
      </Inline>
      <ContactsToolbar contacts={v.contacts} selection={v.selection}
        cats={v.cats} onChanged={v.reload} />
      <ContactsBody contacts={v.search.results}
        selection={v.selection} onChanged={v.reload} />
    </>
  )
}
