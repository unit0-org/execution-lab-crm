// A stored timestamp (or now, when absent) → a value for
// <input type="datetime-local"> in local wall-clock time.
export function toDateTimeInput(value) {
  const date = value ? new Date(value) : new Date()
  const offset = date.getTimezoneOffset() * 60000

  return new Date(date.getTime() - offset).toISOString().slice(0, 16)
}
