import { followUps } from './followUps'
import { firstTimeAttendees } from './firstTimeAttendees'
import { newCustomers } from './newCustomers'
import { upcomingBirthdays } from './upcomingBirthdays'

// Gather all four digest sections for the current week in one call.
export async function buildDigest() {
  const [followUp, attendees, customers, birthdays] = await Promise.all([
    followUps(),
    firstTimeAttendees(),
    newCustomers(),
    upcomingBirthdays()
  ])

  return {
    followUps: followUp,
    attendees,
    newCustomers: customers,
    birthdays
  }
}
