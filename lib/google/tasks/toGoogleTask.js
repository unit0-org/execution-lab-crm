// Map a CRM task to the Google Tasks API payload. `due` is RFC3339 — the
// API only honours the date portion. status mirrors completed_at.
export function toGoogleTask(task) {
  const payload = { title: task.title, status: 'needsAction' }

  if (task.due_at) payload.due = new Date(task.due_at).toISOString()

  if (task.completed_at) payload.status = 'completed'

  return payload
}
