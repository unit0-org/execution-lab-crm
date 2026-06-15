import { findPendingForFollowup } from './findPendingForFollowup'
import { trySendFollowup } from './trySendFollowup'

// Daily: email every still-pending registrant who filled the form but
// hasn't paid (and hasn't been chased yet) a link to finish. Returns how
// many emails actually went out.
export async function sendPendingPaymentFollowups() {
  const pending = await findPendingForFollowup()
  let sent = 0

  for (const reg of pending) sent += await trySendFollowup(reg)

  return { found: pending.length, sent }
}
