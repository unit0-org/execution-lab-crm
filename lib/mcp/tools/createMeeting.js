import { z } from 'zod'
import { createMeeting } from '@/lib/meeting/controllers/createMeeting'
import { toolResult } from '../toolResult'

// MCP tool: create a meeting by hand, linking attendees by id or email.
export function registerCreateMeeting(server) {
  server.tool(
    'create_meeting',
    'Create a meeting by hand; attendees may be contact ids and/or emails.',
    {
      title: z.string().describe('Meeting title.'),
      startsAt: z.string().optional().describe('ISO start time.'),
      endsAt: z.string().optional().describe('ISO end time.'),
      online: z.boolean().optional().describe('Online vs in person.'),
      emails: z.array(z.string()).optional().describe('Attendee emails.'),
      contactIds: z.array(z.string()).optional()
        .describe('Existing contact ids to attend.')
    },
    async ({ title, startsAt, endsAt, online, emails, contactIds }) =>
      toolResult(await createMeeting({
        title,
        starts_at: startsAt,
        ends_at: endsAt,
        online,
        emails,
        contactIds
      }))
  )
}
