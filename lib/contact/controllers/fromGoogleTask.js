// Map a Google task to the CRM columns a reconcile should apply. Adopts
// Google's `updated` clock so the change is never re-applied or pushed back.
export function fromGoogleTask(remote) {
  const done = remote.status === 'completed'

  return {
    title: remote.title,
    due_at: remote.due ? new Date(remote.due) : null,
    completed_at: done ? new Date(remote.completed || remote.updated) : null,
    updated_at: new Date(remote.updated)
  }
}
