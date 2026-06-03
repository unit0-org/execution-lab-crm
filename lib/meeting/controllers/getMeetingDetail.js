import { Meeting } from '../models'
import { toMeetingDetail } from './toMeetingDetail'
import { sharedUrls } from './sharedUrls'

// One meeting with its participants (and contacts) and its attachments.
export async function getMeetingDetail(id) {
  const meeting = await Meeting.findByPk(id, {
    include: [
      { association: 'participant', include: [{ association: 'contact' }] },
      { association: 'attachment' }
    ]
  })

  if (!meeting) return null

  const shared = await sharedUrls()

  return toMeetingDetail(meeting.toJSON(), shared)
}
