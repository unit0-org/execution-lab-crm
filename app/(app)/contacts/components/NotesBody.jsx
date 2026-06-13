import { NoteList } from './NoteList'

// The list of notes, which handles its own empty case.
export function NotesBody({ notes, onChanged }) {
  return <NoteList notes={notes} onChanged={onChanged} />
}
