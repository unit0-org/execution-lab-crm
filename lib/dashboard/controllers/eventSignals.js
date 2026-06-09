import { fn, col, Op } from 'sequelize'
import { EventParticipant, OwnEvent } from '@/lib/event/models'

// Per-contact event check-in count and first/last check-in dates,
// scoped to events owned by the given organization.
export function eventSignals(organizationId) {
  return EventParticipant.findAll({
    attributes: [
      'contact_id',
      [fn('COUNT', col('checked_in_at')), 'count'],
      [fn('MIN', col('checked_in_at')), 'first'],
      [fn('MAX', col('checked_in_at')), 'last']
    ],
    include: [{
      model: OwnEvent,
      attributes: [],
      where: { organization_id: organizationId },
      required: true
    }],
    where: { checked_in_at: { [Op.ne]: null }, contact_id: { [Op.ne]: null } },
    group: ['event_participant.contact_id'],
    raw: true
  })
}
