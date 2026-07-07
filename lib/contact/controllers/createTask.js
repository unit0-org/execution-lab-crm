import { ContactTask } from '@/lib/contact/models'
import { contactInOrg } from './contactInOrg'
import { pushTaskSafely } from './pushTaskSafely'

// Create a follow-up task on a contact and mirror it to Google Tasks.
export async function createTask(contactId, title, dueAt) {
  if (!title) return { error: 'A title is required' }

  if (!await contactInOrg(contactId)) return { ok: true }

  const task = await ContactTask.create({
    contact_id: contactId, title, due_at: dueAt || null
  })
  await pushTaskSafely(task)

  return { ok: true }
}
