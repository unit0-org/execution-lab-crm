import { Timeline } from './Timeline'
import { NotesPanel } from './NotesPanel'

export function PersonLeft({ contactId, timeline, linkable, notes }) {
  return (
    <>
      <Timeline contactId={contactId} entries={timeline} linkable={linkable} />
      <NotesPanel contactId={contactId} notes={notes} />
    </>
  )
}
