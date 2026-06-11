import { NoteList } from './NoteList'
import { ListSkeleton } from './ListSkeleton'

// Skeleton while notes load, then the list (which handles the empty case).
export function NotesBody({ notes, onChanged }) {
  if (notes === undefined) return <ListSkeleton />

  return <NoteList notes={notes} onChanged={onChanged} />
}
