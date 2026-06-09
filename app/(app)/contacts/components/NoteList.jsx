import { CardGrid } from '@/ui/layout/CardGrid'
import { NoteCard } from './NoteCard'

export function NoteList({ notes, onChanged }) {
  return (
    <CardGrid>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onChanged={onChanged} />
      ))}
    </CardGrid>
  )
}
