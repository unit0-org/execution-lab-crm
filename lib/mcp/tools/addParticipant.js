import { z } from 'zod'
import { addAttendee } from '@/lib/meeting/controllers/addAttendee'
import { toolResult } from '../toolResult'

const run = (meetingId, who) => addAttendee(meetingId, who)

// MCP tool: add an attendee to a meeting by contact id or by email.
export function registerAddParticipant(server) {
  server.tool(
    'add_participant',
    'Add an attendee by contact id, or by email (found or created).',
    {
      meetingId: z.string().describe('The meeting UUID.'),
      contactId: z.string().optional().describe('Existing contact UUID.'),
      email: z.string().optional().describe('Attendee email (else id).')
    },
    async ({ meetingId, contactId, email }) =>
      toolResult(await run(meetingId, { contactId, email }))
  )
}
