import { col } from 'sequelize'
import { Meeting } from '../models'
import { toMeetingRow } from './toMeetingRow'

// A page of meetings with their attendees (contact id + name), newest first.
// Omitting limit returns every meeting (MCP and other callers rely on that).
export async function listMeetings(limit, offset = 0) {
  const rows = await Meeting.findAll({
    include: [{
      association: 'participant',
      include: [{ association: 'contact' }]
    }, { association: 'attachment' }],
    order: [[col('meeting.starts_at'), 'DESC']],
    limit,
    offset
  })

  return rows.map((row) => toMeetingRow(row.toJSON()))
}
