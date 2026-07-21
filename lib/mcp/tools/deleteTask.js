import { z } from 'zod'
import { deleteTask } from '@/lib/contact/controllers/deleteTask'
import { toolResult } from '../toolResult'
import { guardDestructive } from '../guardDestructive'
import { confirmField } from '../confirmField'

// MCP tool: permanently delete a follow-up task and its Google task.
export function registerDeleteTask(server) {
  server.tool(
    'delete_task',
    'Permanently delete a follow-up task; its linked Google task is ' +
      'removed too.',
    {
      taskId: z.string().describe('The task UUID (from list_tasks).'),
      confirm: confirmField
    },
    async ({ taskId, confirm }) => {
      const blocked = guardDestructive('delete this task', confirm)

      if (blocked) return blocked

      return toolResult(await deleteTask(taskId))
    }
  )
}
