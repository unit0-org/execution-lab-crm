// A filter chip's href: this bar's own param (dropped for the "All"
// reset) merged with whatever else the page is filtered by, so one bar
// never clears another bar's selection.
export function chipHref(basePath, keep, param, value) {
  const query = new URLSearchParams()

  for (const [key, kept] of Object.entries(keep || {})) {
    if (kept) query.set(key, kept)
  }

  if (value) query.set(param, value)

  const search = query.toString()

  if (!search) return basePath

  return `${basePath}?${search}`
}
