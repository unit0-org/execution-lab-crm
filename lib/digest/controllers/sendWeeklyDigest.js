import { buildDigest } from './buildDigest'
import { digestRecipients } from './digestRecipients'
import { deliverDigest } from './deliverDigest'
import { stampDigestSent } from './stampDigestSent'
import { digestSummary } from './digestSummary'

// Build the digest, email it to all staff, record the send, and return a
// summary. Used by "Send it now" (force) and by the Monday cron via
// sendWeeklyDigestIfDue — it holds no schedule guard of its own.
export async function sendWeeklyDigest({ force = false } = {}) {
  const [digest, recipients] = await Promise.all([
    buildDigest(),
    digestRecipients()
  ])

  if (recipients.length) await deliverDigest(recipients, digest)

  await stampDigestSent()

  return digestSummary(digest, recipients, force)
}
