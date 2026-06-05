import { MeetingMergeSuggestion } from '../models'
import { toSuggestion } from './toSuggestion'

// Pending "possible duplicate" pairs, each with both meetings' summary.
export async function listSuggestions() {
  const rows = await MeetingMergeSuggestion.findAll({
    include: [
      { association: 'manual' },
      { association: 'google' }
    ],
    order: [['created_at', 'DESC']]
  })

  return rows.map((row) => toSuggestion(row.toJSON()))
}
