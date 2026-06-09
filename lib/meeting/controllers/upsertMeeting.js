import { Meeting } from '../models'

// Find a meeting by its Google event id or create it, refreshing the
// stored fields when it already exists. Returns { id, created }.
export async function upsertMeeting(organizationId, data) {
  const [meeting, created] = await Meeting.findOrCreate({
    where: {
      google_event_id: data.google_event_id,
      organization_id: organizationId
    },
    defaults: { ...data, organization_id: organizationId }
  })

  if (!created) await meeting.update(data)

  return { id: meeting.id, created }
}
