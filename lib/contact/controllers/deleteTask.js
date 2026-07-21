import { ContactTask } from '@/lib/contact/models'
import { pushTaskDelete } from '@/lib/google/tasks'

// Delete a task and remove its linked Google task. The Google delete is
// best-effort — a hiccup there never fails the CRM delete.
export async function deleteTask(taskId) {
  const task = await ContactTask.findByPk(taskId)

  if (!task) return { ok: true }

  const link = task.toJSON()
  await task.destroy()
  await pushTaskDelete(link).catch(() => null)

  return { ok: true }
}
