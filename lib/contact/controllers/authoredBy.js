// True when the row exists and this user wrote it — the guard that limits a
// note's edit and delete to its own author.
export function authoredBy(row, userId) {
  return Boolean(row) && row.author_user_id === userId
}
