import { fn, col, Op } from 'sequelize'
import { MeetingParticipant, Meeting } from '@/lib/meeting/models'

// Per-contact meeting count and first/last meeting dates.
export function meetingSignals() {
  return MeetingParticipant.findAll({
    attributes: [
      'contact_id',
      [fn('COUNT', col('meeting.id')), 'count'],
      [fn('MIN', col('meeting.starts_at')), 'first'],
      [fn('MAX', col('meeting.starts_at')), 'last']
    ],
    include: [{ model: Meeting, attributes: [], required: true }],
    where: { contact_id: { [Op.ne]: null } },
    group: ['meeting_participant.contact_id'],
    raw: true
  })
}
