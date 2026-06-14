import { createMeeting } from '@/lib/meeting/controllers/createMeeting'
import { createMeetingSchema } from './createMeeting.schema'
import { toolResult } from '../toolResult'

const run = (a) => createMeeting({
  title: a.title,
  starts_at: a.startsAt,
  ends_at: a.endsAt,
  online: a.online,
  emails: a.emails,
  contactIds: a.contactIds
})

// MCP tool: create a meeting by hand, linking attendees by id or email.
export function registerCreateMeeting(server) {
  server.tool(
    'create_meeting',
    'Create a meeting by hand; attendees may be contact ids and/or emails.',
    createMeetingSchema,
    async (a) => toolResult(await run(a))
  )
}
