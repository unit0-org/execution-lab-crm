import { z } from 'zod'
import { addAttendee } from '@/lib/meeting/controllers/addAttendee'
import { toolResult } from '../toolResult'

// MCP tool: add an attendee to a meeting by contact id or by email.
export function registerAddParticipant(server) {
  server.tool(
    'add_participant',
    'Add an attendee to a meeting by contact id or by email.',
    {
      meetingId: z.string().describe('The meeting UUID.'),
      contactId: z.string().optional().describe('Existing contact UUID.'),
      email: z.string().optional().describe('Attendee email (else id).')
    },
    async ({ meetingId, contactId, email }) =>
      toolResult(await addAttendee(meetingId, { contactId, email }))
  )
}
