import { fn, col } from 'sequelize'
import { Meeting } from '../models'

// Meetings with their attendee counts, newest first.
export async function listMeetings() {
  const rows = await Meeting.findAll({
    attributes: {
      include: [[fn('COUNT', col('participant.id')), 'attendees']]
    },
    include: [{ association: 'participant', attributes: [] }],
    group: ['meeting.id'],
    order: [[col('meeting.starts_at'), 'DESC']]
  })

  return rows.map((row) => row.toJSON())
}
