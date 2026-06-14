import { randomUUID } from 'crypto'
import { sendPriorityInvite } from './sendPriorityInvite'

const DAY_MS = 24 * 60 * 60 * 1000

// Reserve the freed spot for one waiting entry: stamp a 24h invite token
// and email them their private register link (Story 3.2).
export async function inviteToRegister(entry, cohort) {
  const token = randomUUID()

  entry.status = 'invited'
  entry.invite_token = token
  entry.invite_cohort_id = cohort.id
  entry.invited_at = new Date()
  entry.invite_expires_at = new Date(Date.now() + DAY_MS)
  await entry.save()
  await sendPriorityInvite(entry, cohort, token)
}
