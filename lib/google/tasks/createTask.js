import { tasksRequest } from './api'

const dateOnly = (iso) => iso ? new Date(iso).toISOString().split('T')[0] + 'T00:00:00.000Z' : undefined

export async function createTask(accessToken, listId, { title, notes, due }) {
  return tasksRequest(accessToken, 'POST', `lists/${listId}/tasks`, {
    title,
    notes: notes || undefined,
    due: dateOnly(due),
  })
}
