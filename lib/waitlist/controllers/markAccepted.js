// Take an entry out of the active line by marking it accepted into a
// cohort. On payment, convertByEmail flips it to 'converted'.
export async function markAccepted(entry, cohortId) {
  entry.status = 'accepted'
  entry.invite_cohort_id = cohortId
  entry.invited_at = new Date()
  await entry.save()
}
