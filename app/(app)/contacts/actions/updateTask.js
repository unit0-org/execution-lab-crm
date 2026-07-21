'use server'

import { updateTask } from '@/lib/contact/controllers/updateTask'
import { withMember } from '@/lib/auth/withMember'

export const updateTaskAction = withMember(async (formData) => {
  const taskId = formData.get('task_id')
  const dueAt = formData.get('due_at') || null

  return updateTask(taskId, formData.get('title'), dueAt)
})
