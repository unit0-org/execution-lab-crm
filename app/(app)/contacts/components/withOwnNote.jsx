// Gates a note's own-author controls: renders the wrapped control only when
// the note is the viewer's own (`mine`), otherwise nothing — keeping the
// "is this mine?" check out of presentational NoteTools (HOC rule, AGENTS.md).
export function withOwnNote(Wrapped) {
  return function OwnNoteOnly({ mine, ...rest }) {
    if (!mine) return null

    return <Wrapped {...rest} />
  }
}
