import { Section } from '@/ui/Section'
import { Heading } from '@/ui/Heading'
import { EmptyState } from '@/ui/EmptyState'
import { AddNoteForm } from './AddNoteForm'
import { NoteRow } from './NoteRow'
import { listStyle } from './NotesPanel.styles'

export function NotesPanel({ contactId, notes }) {
  return (
    <Section gutter="lg">
      <Heading level={2} gutter="md">Notes</Heading>
      <AddNoteForm contactId={contactId} />
      <div style={listStyle}>
        {notes.length === 0 && <EmptyState>No notes yet.</EmptyState>}
        {notes.map((n) => <NoteRow key={n.id} contactId={contactId} note={n} />)}
      </div>
    </Section>
  )
}
