import { MeetingMergeSuggestion } from '../models'

// Drop a suggestion the user decided isn't a duplicate.
export async function dismissSuggestion(id) {
  await MeetingMergeSuggestion.destroy({ where: { id } })

  return { ok: true }
}
