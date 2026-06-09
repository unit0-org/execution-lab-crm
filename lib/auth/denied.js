// The standard 403 result returned by a guarded server action when the
// caller lacks access. Shaped like other action errors, with a status.
export function denied() {
  return { error: 'forbidden', status: 403 }
}
