import { Section } from '@/ui/Section'
import { Heading } from '@/ui/Heading'
import { Stack } from '@/ui/Stack'
import { EmptyState } from '@/ui/EmptyState'
import { AddNoteForm } from './AddNoteForm'
import { NoteRow } from './NoteRow'

export function NotesPanel({ contactId, notes }) {
  return (
    <Section gutter="lg">
      <Heading level={2} gutter="md">Notes</Heading>
      <AddNoteForm contactId={contactId} />
      <Stack gap="sm">
        {notes.length === 0 && <EmptyState>No notes yet.</EmptyState>}
        {notes.map((n) => <NoteRow key={n.id} contactId={contactId} note={n} />)}
      </Stack>
    </Section>
  )
}
