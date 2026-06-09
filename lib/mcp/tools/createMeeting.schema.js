import { z } from 'zod'

// Input schema for the create_meeting MCP tool.
export const createMeetingSchema = {
  title: z.string().describe('Meeting title.'),
  startsAt: z.string().optional().describe('ISO start time.'),
  endsAt: z.string().optional().describe('ISO end time.'),
  online: z.boolean().optional().describe('Online vs in person.'),
  emails: z.array(z.string()).optional().describe('Attendee emails.'),
  contactIds: z.array(z.string()).optional()
    .describe('Existing contact ids to attend.')
}
