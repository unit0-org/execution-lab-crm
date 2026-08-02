import { Op } from 'sequelize'
import { statusColumns } from './participationStatuses'

const hasTimestamp = (column) => ({ [column]: { [Op.ne]: null } })

// The event_participant filter for the chosen statuses (any of them) and
// the chosen events (any of them). Null when neither dimension narrows
// anything, i.e. there is nothing to filter on.
export function participationWhere(statuses, events = []) {
  const columns = statusColumns(statuses)

  if (!columns.length && !events.length) return null

  const byEvent = events.length ? { own_event_id: events } : {}
  const anyStatus = { [Op.or]: columns.map(hasTimestamp) }
  const byStatus = columns.length ? anyStatus : {}

  return { ...byEvent, ...byStatus }
}
