// "attended/registered (rate%)" for an event — omits the rate when
// nobody registered, so we never divide by zero.
export function attendanceLabel(event) {
  const attended = Number(event.checked_in)
  const registered = Number(event.registered)

  if (!registered) return `${attended}/${registered}`

  const rate = Math.round((attended / registered) * 100)

  return `${attended}/${registered} (${rate}%)`
}
