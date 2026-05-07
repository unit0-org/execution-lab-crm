// Format the current time as the value an <input type="datetime-local"> expects.
// Strips seconds + timezone, leaves "YYYY-MM-DDTHH:MM".
export function useNowDateTime() {
  const now = new Date()
  const offsetMs = now.getTimezoneOffset() * 60_000

  return new Date(now.getTime() - offsetMs).toISOString().slice(0, 16)
}
