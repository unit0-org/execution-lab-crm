import { NoteSeparator } from './NoteSeparator'
import { NoteRow } from './NoteRow'

// A note and the rule that divides it from the one above.
export function NoteEntry({ note, index, onChanged }) {
  return (
    <>
      <NoteSeparator index={index} />
      <NoteRow note={note} onChanged={onChanged} />
    </>
  )
}
