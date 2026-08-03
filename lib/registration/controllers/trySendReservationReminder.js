import { sendReservationReminder } from './sendReservationReminder'

// Best-effort: a flaky send for one reservation must not stop the rest of
// the daily batch. Returns 1 when sent, 0 when it failed.
export async function trySendReservationReminder(reg) {
  try {
    await sendReservationReminder(reg)

    return 1
  } catch (e) {
    console.error(`reservation reminder failed for ${reg.id}: ${e.message}`)

    return 0
  }
}
