// A compact summary of a sent digest: recipient count and counts per
// section. Persisted by the cron log and shown in the "Send it now" toast.
export function digestSummary(digest, recipients, force) {
  const followUps = digest.followUps

  return {
    forced: Boolean(force),
    recipients: recipients.length,
    followUps: followUps.items.length + followUps.overflow,
    attendees: digest.attendees.length,
    newCustomers: digest.newCustomers.length,
    birthdays: digest.birthdays.length
  }
}
