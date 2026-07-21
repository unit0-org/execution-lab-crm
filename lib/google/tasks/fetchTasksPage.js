import { tasksFetch } from './tasksFetch'
import { taskUrl } from './taskUrl'
import { taskListQuery } from './taskListQuery'

// Fetch one page of a task list's tasks (incremental via updatedMin).
export async function fetchTasksPage(token, list, updatedMin, pageToken) {
  const url = `${taskUrl(list)}?${taskListQuery(updatedMin, pageToken)}`
  const data = await tasksFetch(token, url)

  return { items: data.items || [], next: data.nextPageToken }
}
