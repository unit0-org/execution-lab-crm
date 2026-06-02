import { MeetingParticipant, Meeting } from '../models'
import { toMeetingEntry } from './toMeetingEntry'

// A contact's meetings, shaped as activity entries.
export async function meetingEntries(contactId) {
  const rows = await MeetingParticipant.findAll({
    where: { contact_id: contactId },
    include: [{ model: Meeting }],
    order: [[Meeting, 'starts_at', 'DESC']]
  })

  return rows.map((row) => toMeetingEntry(row.toJSON()))
}
