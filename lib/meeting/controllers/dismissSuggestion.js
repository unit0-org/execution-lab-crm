import { MeetingMergeSuggestion } from '../models'

// Mark a suggestion the user decided isn't a duplicate. Keep the row so a
// re-sync's findOrCreate won't resurrect it; the list hides dismissed pairs.
export async function dismissSuggestion(id) {
  await MeetingMergeSuggestion.update(
    { dismissed_at: new Date() },
    { where: { id } }
  )

  return { ok: true }
}
