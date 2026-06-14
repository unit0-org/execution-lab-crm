import { col } from 'sequelize'
import { Meeting } from '../models'
import { toMeetingRow } from './toMeetingRow'

// Meetings with their attendees (contact id + name), newest first.
export async function listMeetings() {
  const rows = await Meeting.findAll({
    include: [{
      association: 'participant',
      include: [{ association: 'contact' }]
    }, { association: 'attachment' }],
    order: [[col('meeting.starts_at'), 'DESC']]
  })

  return rows.map((row) => toMeetingRow(row.toJSON()))
}
