import { z } from 'zod'
import { addMeetingNote } from '@/lib/meeting/controllers/addMeetingNote'
import { toolResult } from '../toolResult'

// MCP tool: add a note to a meeting.
export function registerAddMeetingNote(server) {
  server.tool(
    'add_meeting_note',
    'Add a free-text note to a meeting.',
    {
      meetingId: z.string().describe('The meeting UUID.'),
      body: z.string().describe('Note text.')
    },
    async ({ meetingId, body }) =>
      toolResult(await addMeetingNote(meetingId, body))
  )
}
