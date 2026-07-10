const UNITS = ['B', 'KB', 'MB', 'GB']

// Human-readable byte size, e.g. 2048 → "2 KB". Null/0 → an em dash.
export function formatFileSize(bytes) {
  if (!bytes) return '—'

  let size = bytes
  let unit = 0

  while (size >= 1024 && unit < UNITS.length - 1) {
    size /= 1024
    unit += 1
  }

  return `${Math.round(size)} ${UNITS[unit]}`
}
