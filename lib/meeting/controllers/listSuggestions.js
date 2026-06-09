import { MeetingMergeSuggestion } from '../models'
import { toSuggestion } from './toSuggestion'

// Pending "possible duplicate" pairs, each with both meetings' summary.
export async function listSuggestions(organizationId) {
  const inOrg = { organization_id: organizationId }
  const rows = await MeetingMergeSuggestion.findAll({
    where: { dismissed_at: null },
    include: [
      { association: 'manual', where: inOrg },
      { association: 'google', where: inOrg }
    ],
    order: [['created_at', 'DESC']]
  })

  return rows.map((row) => toSuggestion(row.toJSON()))
}
