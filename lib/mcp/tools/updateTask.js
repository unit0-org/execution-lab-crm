import { z } from 'zod'
import { updateTask } from '@/lib/contact/controllers/updateTask'
import { toolResult } from '../toolResult'

export function registerUpdateTask(server) {
  server.tool(
    'update_task',
    "Edit a follow-up task's title and due date (a full replace); the " +
      'change is mirrored to Google Tasks. Omitting dueAt clears the due ' +
      'date, so pass the current one to keep it.',
    {
      taskId: z.string().describe('The task UUID (from list_tasks).'),
      title: z.string().describe('The task title.'),
      dueAt: z.string().optional()
        .describe('ISO date the task is due. Omit to leave it with none.')
    },
    async ({ taskId, title, dueAt }) =>
      toolResult(await updateTask(taskId, title, dueAt))
  )
}
