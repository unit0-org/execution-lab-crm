// The business runs on Pacific calendar days (override with
// BUSINESS_TIMEZONE). Registration windows and pricing compare DATEONLY
// dates, so dates must be formatted as the LOCAL day, not UTC.
const TIMEZONE = process.env.BUSINESS_TIMEZONE || 'America/Vancouver'

// A date as a YYYY-MM-DD string in the business timezone. en-CA formats as
// YYYY-MM-DD. Computing it in UTC shifts evening-local times to the next day.
export function isoDate(date) {
  return new Date(date).toLocaleDateString('en-CA', { timeZone: TIMEZONE })
}
