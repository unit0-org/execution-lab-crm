import { Op } from 'sequelize'
import { Meeting, MeetingParticipant } from '../models'

const TWO_HOURS = 2 * 60 * 60 * 1000

// An un-synced meeting within ±2h of startsAt sharing one of these
// contacts — a candidate the Google event may belong to, or null.
export async function matchByParticipant(startsAt, contactIds) {
  if (!startsAt || !(contactIds || []).length) return null

  const at = new Date(startsAt).getTime()
  const window = [new Date(at - TWO_HOURS), new Date(at + TWO_HOURS)]
  const row = await MeetingParticipant.findOne({
    where: { contact_id: contactIds },
    include: [{ model: Meeting, required: true, where: {
      google_event_id: null, starts_at: { [Op.between]: window } } }]
  })

  return row ? Meeting.findByPk(row.meeting_id) : null
}
