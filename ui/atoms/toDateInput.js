// A stored timestamp → a value for <input type="date"> (UTC date part).
export function toDateInput(value) {
  if (!value) return ''

  return new Date(value).toISOString().slice(0, 10)
}
