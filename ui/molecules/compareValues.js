// Compare two cell values: numbers numerically, else as text; nulls last.
export function compareValues(a, b) {
  if (a == null) return 1

  if (b == null) return -1

  const na = Number(a)
  const nb = Number(b)

  if (!Number.isNaN(na) && !Number.isNaN(nb)) return na - nb

  return String(a).localeCompare(String(b))
}
