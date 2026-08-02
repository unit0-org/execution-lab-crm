import { Inline } from '@/ui/layout/Inline'
import { ContactSearch } from './ContactSearch'
import { LabelFilter } from './LabelFilter'
import { ParticipationFilter } from './ParticipationFilter'
import { ContactsCount } from './ContactsCount'

// The contacts list controls row: search, label filter, the event
// participation filter, and a live count of the contacts displayed.
export function ContactControls({ view }) {
  return (
    <Inline gap="sm">
      <ContactSearch value={view.search.query}
        onChange={view.search.setQuery} />
      <LabelFilter options={view.labelOptions} filter={view.labelFilter}
        cats={view.cats} />
      <ParticipationFilter participation={view.participation}
        eventOptions={view.eventOptions} />
      <ContactsCount count={view.search.results.length} />
    </Inline>
  )
}
