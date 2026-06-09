import { Meeting } from '../models'
import { toMeetingDetail } from './toMeetingDetail'
import { sharedUrls } from './sharedUrls'

// One meeting with its participants (and contacts) and its attachments.
export async function getMeetingDetail(organizationId, id) {
  const meeting = await Meeting.findOne({
    where: { id, organization_id: organizationId },
    include: [
      { association: 'participant', include: [{ association: 'contact' }] },
      { association: 'attachment' },
      { association: 'note' }
    ]
  })

  if (!meeting) return null

  const shared = await sharedUrls()

  return toMeetingDetail(meeting.toJSON(), shared)
}
