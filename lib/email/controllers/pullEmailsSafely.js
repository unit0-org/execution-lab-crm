import { pullEmails } from './pullEmails'

// Run the pull, turning a missing-gmail-scope 403 into a skip rather than a
// thrown error, so one un-reconsented account doesn't fail the whole cron.
export async function pullEmailsSafely(email, account) {
  try {
    return await pullEmails(
      email, account.refresh_token, account.emails_synced_at
    )
  } catch (error) {
    if (error.notAuthorized) return { skipped: 'gmail_not_authorized' }

    throw error
  }
}
