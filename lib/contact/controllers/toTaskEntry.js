// Shape a task into a contact-activity entry. Tasks have no detail page, so
// the entry links to the task's card in the contact's Tasks section.
export function toTaskEntry(task) {
  const done = Boolean(task.completed_at)

  return {
    id: `t:${task.id}`,
    kind: 'task',
    href: `#task-${task.id}`,
    title: task.title,
    date: task.due_at || task.created_at,
    status: done ? 'Done' : 'To do',
    statusTone: done ? 'success' : 'neutral'
  }
}
