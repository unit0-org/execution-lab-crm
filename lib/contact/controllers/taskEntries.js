import { ContactTask } from '@/lib/contact/models'
import { toTaskEntry } from './toTaskEntry'

// A contact's tasks, shaped as activity entries (by due date, newest first).
export async function taskEntries(contactId) {
  const rows = await ContactTask.findAll({
    where: { contact_id: contactId },
    order: [['due_at', 'DESC']]
  })

  return rows.map((row) => toTaskEntry(row.toJSON()))
}
