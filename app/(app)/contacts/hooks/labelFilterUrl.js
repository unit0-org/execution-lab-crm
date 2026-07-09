const PARAM = 'labels'

// Parse the ?labels=a,b value into a Set of label ids.
export const parseLabelIds = (raw) =>
  new Set(raw ? raw.split(',').filter(Boolean) : [])

// A new Set with `id` toggled in or out.
export function toggledSet(set, id) {
  const next = new Set(set)

  if (next.has(id)) next.delete(id)
  else next.add(id)

  return next
}

// Mirror the selected ids into the URL (?labels=…) via history — no server
// navigation or refetch — keeping any other query params intact.
export function writeLabelIds(ids) {
  const url = new URL(window.location.href)

  if (ids.size) url.searchParams.set(PARAM, [...ids].join(','))
  else url.searchParams.delete(PARAM)

  window.history.replaceState(null, '', url)
}
