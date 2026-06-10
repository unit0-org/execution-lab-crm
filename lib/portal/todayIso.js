// Today's date as a YYYY-MM-DD string (UTC), for date-only comparisons.
export function todayIso() {
  return new Date().toISOString().slice(0, 10)
}
