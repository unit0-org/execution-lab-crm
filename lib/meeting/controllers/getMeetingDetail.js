import { Meeting } from '../models'
import { toMeetingDetail } from './toMeetingDetail'

// One meeting with its participants (and contacts) and its attachments.
export async function getMeetingDetail(id) {
  const meeting = await Meeting.findByPk(id, {
    include: [
      { association: 'participant', include: [{ association: 'contact' }] },
      { association: 'attachment' }
    ]
  })

  if (!meeting) return null

  return toMeetingDetail(meeting.toJSON())
}
