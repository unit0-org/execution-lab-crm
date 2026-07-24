import { registerAddNote } from './addNote'
import { registerListNotes } from './listNotes'
import { registerUpdateNote } from './updateNote'
import { registerRemoveNote } from './removeNote'

// Contact manual note tools (free-text, distinct from facts/nuggets).
export function registerContactNoteTools(server) {
  registerAddNote(server)
  registerListNotes(server)
  registerUpdateNote(server)
  registerRemoveNote(server)
}
