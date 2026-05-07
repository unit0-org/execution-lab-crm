import { Timeline } from './Timeline'
import { NotesPanel } from './NotesPanel'

export function PersonLeft({ contactId, timeline, notes }) {
  return (
    <>
      <Timeline entries={timeline} />
      <NotesPanel contactId={contactId} notes={notes} />
    </>
  )
}
