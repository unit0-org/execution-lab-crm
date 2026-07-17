import { MeetingMergeSuggestion } from '../models'
import { toSuggestion } from './toSuggestion'
import { closestSuggestionPerManual } from './closestSuggestionPerManual'

// Pending "possible duplicate" pairs, each with both meetings' summary,
// collapsed to the closest Google occurrence per manual meeting so a
// recurring series doesn't fan out into dozens of identical cards.
export async function listSuggestions() {
  const rows = await MeetingMergeSuggestion.findAll({
    where: { dismissed_at: null },
    include: [
      { association: 'manual' },
      { association: 'google' }
    ],
    order: [['created_at', 'DESC']]
  })

  const all = rows.map((row) => toSuggestion(row.toJSON()))

  return closestSuggestionPerManual(all)
}
