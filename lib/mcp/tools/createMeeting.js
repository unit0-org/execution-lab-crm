import { z } from 'zod'
import { createMeeting } from '@/lib/meeting/controllers/createMeeting'
import { toolResult } from '../toolResult'

// MCP tool: create a meeting by hand and link attendees by email.
export function registerCreateMeeting(server) {
  server.tool(
    'create_meeting',
    'Create a meeting manually, linking attendees by email.',
    {
      title: z.string().describe('Meeting title.'),
      startsAt: z.string().optional().describe('ISO start time.'),
      endsAt: z.string().optional().describe('ISO end time.'),
      online: z.boolean().optional().describe('Online vs in person.'),
      emails: z.array(z.string()).optional()
        .describe('Attendee emails (found or created).')
    },
    async ({ title, startsAt, endsAt, online, emails }) =>
      toolResult(await createMeeting({
        title,
        starts_at: startsAt,
        ends_at: endsAt,
        online,
        emails
      }))
  )
}
