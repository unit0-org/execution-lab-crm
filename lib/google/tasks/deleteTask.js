import { tasksFetch } from './tasksFetch'
import { taskUrl } from './taskUrl'

// Delete a Google task from its list. Returns the empty API body.
export function deleteTask(token, list, id) {
  return tasksFetch(token, taskUrl(list, id), { method: 'DELETE' })
}
