import { literal } from 'sequelize'
import { ContactTask } from '@/lib/contact/models'

const toTask = (row) => ({
  id: row.id,
  title: row.title,
  dueAt: row.due_at,
  done: Boolean(row.completed_at)
})

// A contact's follow-up tasks: still-to-do first, then by due date.
export async function listTasks(contactId) {
  const rows = await ContactTask.findAll({
    where: { contact_id: contactId },
    order: [[literal('completed_at is not null'), 'ASC'], ['due_at', 'ASC']]
  })

  return rows.map((row) => toTask(row.toJSON()))
}
