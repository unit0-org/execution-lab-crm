// Up to 2 uppercase initials from a name, or '?' when empty.
export function initials(name) {
  const parts = (name || '').trim().split(/\s+/).filter(Boolean)

  if (!parts.length) return '?'

  return parts.slice(0, 2).map((p) => p[0].toUpperCase()).join('')
}
