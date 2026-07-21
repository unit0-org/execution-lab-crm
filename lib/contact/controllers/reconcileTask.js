import { ContactTask } from '@/lib/contact/models'
import { fromGoogleTask } from './fromGoogleTask'

// Reflect one Google task onto its linked CRM row. Google-native tasks (no
// linked row) are ignored; a deletion removes the row; otherwise the newer
// side wins by updated time. Writes the row directly — never pushes back.
export async function reconcileTask(remote) {
  const task = await ContactTask.findOne({
    where: { google_task_id: remote.id }
  })

  if (!task) return 'ignored'

  if (remote.deleted) {
    await task.destroy()

    return 'deleted'
  }

  if (new Date(remote.updated) <= task.updated_at) return 'stale'

  await task.update(fromGoogleTask(remote))

  return 'applied'
}
