// Shift a YYYY-MM-DD date by whole days, returning YYYY-MM-DD. Anchored
// at UTC midnight so DST never nudges the result onto a different day.
export function shiftIso(iso, days) {
  const ms = new Date(`${iso}T00:00:00Z`).getTime() + days * 86400000

  return new Date(ms).toISOString().slice(0, 10)
}
