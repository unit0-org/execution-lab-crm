import { Inline } from '@/ui/layout/Inline'
import { ContactSearch } from './ContactSearch'
import { LabelFilter } from './LabelFilter'
import { ContactsCount } from './ContactsCount'

// The contacts list controls row: search, label filter, and a live count
// of the contacts currently displayed.
export function ContactControls({ view }) {
  return (
    <Inline gap="sm">
      <ContactSearch value={view.search.query}
        onChange={view.search.setQuery} />
      <LabelFilter options={view.labelOptions} filter={view.labelFilter}
        cats={view.cats} />
      <ContactsCount count={view.search.results.length} />
    </Inline>
  )
}
