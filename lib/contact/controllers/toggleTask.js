import { ContactTask } from '@/lib/contact/models'
import { pushTaskUpdate } from '@/lib/google/tasks'

// Flip a task's done state, then push the change to its Google task.
export async function toggleTask(taskId, done) {
  const task = await ContactTask.findByPk(taskId)

  if (!task) return { ok: true }

  await task.update({
    completed_at: done ? new Date() : null, updated_at: new Date()
  })
  await pushTaskUpdate(task.toJSON()).catch(() => null)

  return { ok: true }
}
