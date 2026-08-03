// Split a full name into first + last for the contact record; null when
// blank (the name is required). Everything after the first space is last.
export function splitName(full) {
  const trimmed = (full || '').trim()

  if (!trimmed) return null

  const space = trimmed.indexOf(' ')

  if (space === -1) return { first_name: trimmed, last_name: '' }

  return {
    first_name: trimmed.slice(0, space),
    last_name: trimmed.slice(space + 1).trim()
  }
}
