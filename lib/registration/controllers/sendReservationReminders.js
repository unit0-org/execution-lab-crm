import { findLapsingReservations } from './findLapsingReservations'
import { trySendReservationReminder } from './trySendReservationReminder'

// Daily: warn everyone whose reserved seat is about to be released, once
// each. Returns how many warnings actually went out.
export async function sendReservationReminders() {
  const lapsing = await findLapsingReservations()
  let sent = 0

  for (const reg of lapsing) sent += await trySendReservationReminder(reg)

  return { found: lapsing.length, sent }
}
