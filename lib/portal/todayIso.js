// The business runs on Pacific calendar days (override with
// BUSINESS_TIMEZONE). Registration windows and pricing compare DATEONLY
// dates against "today", so this must be the LOCAL date, not UTC.
const TIMEZONE = process.env.BUSINESS_TIMEZONE || 'America/Vancouver'

// Today's date as a YYYY-MM-DD string in the business timezone. Computing it
// in UTC closed windows a day early for evening-local times — e.g. 5pm
// Pacific is already the next day in UTC, so a window set to close June 18
// closed at 5pm June 17. en-CA formats as YYYY-MM-DD.
export function todayIso() {
  return new Date().toLocaleDateString('en-CA', { timeZone: TIMEZONE })
}
