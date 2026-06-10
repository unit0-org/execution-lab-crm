import { sendTemplatedEmail } from '@/lib/email/controllers/sendTemplatedEmail'
import { portalUrl } from '@/lib/portal/portalUrl'

// Email the front-of-line person their 24h private register link. Swallows
// any failure so a flaky mailer never blocks advancing the queue.
export async function sendPriorityInvite(organizationId, entry, cohort, token) {
  const base = portalUrl(`/register/${cohort.id}`)
  const registerUrl = `${base}?invite=${token}`

  try {
    await sendTemplatedEmail(organizationId, 'waitlist_priority', entry.email, {
      first_name: entry.first_name,
      cohort_name: cohort.label,
      register_url: registerUrl
    })
  } catch {
    // best-effort: the invite is recorded regardless
  }
}
