import { sendTemplatedEmail } from '@/lib/email/controllers/sendTemplatedEmail'

// Send one registration email, logging (never throwing) so a provider
// failure or skip is visible in logs yet can't break payment processing.
export async function trySendRegistrationEmail(orgId, key, to, vars) {
  try {
    const res = await sendTemplatedEmail(orgId, key, to, vars)

    if (res?.skipped) console.warn(`registration email "${key}" skipped`)
  } catch (e) {
    console.error(`registration email "${key}" failed: ${e.message}`)
  }
}
