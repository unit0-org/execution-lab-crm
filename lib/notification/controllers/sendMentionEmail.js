import { sendTemplatedEmail }
  from '@/lib/email/controllers/sendTemplatedEmail'

// Best-effort: email a mentioned member with the deep link to the note.
// Never throws — a failed email must not break saving the note.
export async function sendMentionEmail(recipient, vars) {
  if (!recipient.email) return { skipped: true }

  try {
    return await sendTemplatedEmail(
      'mention_notification', recipient.email, vars
    )
  } catch {
    return { skipped: true }
  }
}
