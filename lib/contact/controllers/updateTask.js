import { ContactTask } from '@/lib/contact/models'
import { pushTaskUpdate } from '@/lib/google/tasks'

// Edit a task's title and due date, then push the change to its Google task.
export async function updateTask(taskId, title, dueAt) {
  if (!title) return { error: 'A title is required' }

  const task = await ContactTask.findByPk(taskId)

  if (!task) return { ok: true }

  await task.update({ title, due_at: dueAt || null, updated_at: new Date() })
  await pushTaskUpdate(task.toJSON()).catch(() => null)

  return { ok: true }
}
