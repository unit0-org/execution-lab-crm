const BASE = 'https://tasks.googleapis.com/tasks/v1/lists'

// REST URL for a task list's collection, or a single task when `id` given.
export function taskUrl(list, id) {
  const collection = `${BASE}/${list}/tasks`

  return id ? `${collection}/${id}` : collection
}
