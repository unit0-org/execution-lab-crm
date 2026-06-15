import { sendPaymentFollowup } from './sendPaymentFollowup'

// Best-effort: a flaky send for one registrant must not stop the rest of
// the daily batch. Returns 1 when sent, 0 when it failed.
export async function trySendFollowup(reg) {
  try {
    await sendPaymentFollowup(reg)

    return 1
  } catch (e) {
    console.error(`payment follow-up failed for ${reg.id}: ${e.message}`)

    return 0
  }
}
