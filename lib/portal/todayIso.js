import { isoDate } from './isoDate'

// Today's date as a YYYY-MM-DD string in the business timezone. Computing it
// in UTC closed windows a day early for evening-local times — e.g. 5pm
// Pacific is already the next day in UTC, so a window set to close June 18
// closed at 5pm June 17.
export function todayIso() {
  return isoDate(new Date())
}
