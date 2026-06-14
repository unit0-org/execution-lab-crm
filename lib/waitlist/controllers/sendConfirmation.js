import { sendTemplatedEmail } from '@/lib/email/controllers/sendTemplatedEmail'

// Fire the join-confirmation email; swallow any failure so a flaky
// mailer never blocks the join itself (Story 3.1).
export async function sendConfirmation(email, firstName) {
  try {
    await sendTemplatedEmail('waitlist_confirmation', email, {
      first_name: firstName
    })
  } catch {
    // best-effort: the entry is saved regardless
  }
}
