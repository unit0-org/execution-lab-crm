import { z } from 'zod'
import { createTask } from '@/lib/contact/controllers/createTask'
import { toolResult } from '../toolResult'

export function registerCreateTask(server) {
  server.tool(
    'create_task',
    'Create a follow-up task (title + optional due date) on a contact; ' +
      'it is mirrored to Google Tasks.',
    {
      contactId: z.string().describe('The contact UUID.'),
      title: z.string().describe('The task title.'),
      dueAt: z.string().optional()
        .describe('ISO date the task is due. Optional.')
    },
    async ({ contactId, title, dueAt }) =>
      toolResult(await createTask(contactId, title, dueAt))
  )
}
