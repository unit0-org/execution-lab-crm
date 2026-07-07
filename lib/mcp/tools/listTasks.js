import { z } from 'zod'
import { listTasks } from '@/lib/contact/controllers/listTasks'
import { toolResult } from '../toolResult'

export function registerListTasks(server) {
  server.tool(
    'list_tasks',
    "List a contact's follow-up tasks.",
    { contactId: z.string().describe('The contact UUID.') },
    async ({ contactId }) => toolResult(await listTasks(contactId))
  )
}
