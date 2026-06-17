import { Op } from 'sequelize'
import { Meeting, MeetingParticipant } from '@/lib/meeting/models'

const TWO_HOURS = 2 * 60 * 60 * 1000

// A meeting within ±2h of startsAt that already has one of these contacts —
// the calendar-synced row to bridge onto, or null.
export async function matchByTimeAndPeople(meeting, contactIds, t) {
  if (!meeting.startsAt || !(contactIds || []).length) return null

  const at = new Date(meeting.startsAt).getTime()
  const window = [new Date(at - TWO_HOURS), new Date(at + TWO_HOURS)]
  const row = await MeetingParticipant.findOne({
    where: { contact_id: contactIds },
    include: [{ model: Meeting, required: true,
      where: { starts_at: { [Op.between]: window } } }],
    transaction: t
  })

  return row ? Meeting.findByPk(row.meeting_id, { transaction: t }) : null
}
