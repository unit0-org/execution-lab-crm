import { followUps } from './followUps'
import { firstTimeAttendees } from './firstTimeAttendees'
import { newCustomers } from './newCustomers'
import { upcomingBirthdays } from './upcomingBirthdays'
import { mergeSignals } from '@/lib/dashboard/controllers/mergeSignals'
import { hotLeads } from '@/lib/dashboard/controllers/hotLeads'

// Gather every digest section for the current week in one call. The same
// payload feeds the email (HTML) and the dashboard (JSX).
export async function buildDigest() {
  const signals = await mergeSignals()
  const [followUp, attendees, customers, birthdays, leads] =
    await Promise.all([
      followUps(),
      firstTimeAttendees(),
      newCustomers(),
      upcomingBirthdays(),
      hotLeads(signals)
    ])

  return {
    followUps: followUp,
    attendees,
    newCustomers: customers,
    birthdays,
    hotLeads: leads
  }
}
