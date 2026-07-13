// The name shown on a note. A note written by an integration we can't tie
// back to a team member has no author — say so rather than invent one.
export function noteAuthorName(note) {
  return note.authorName || 'Unattributed'
}
