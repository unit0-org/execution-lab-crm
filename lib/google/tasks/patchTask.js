import { tasksFetch } from './tasksFetch'
import { taskUrl } from './taskUrl'

// Patch a Google task's fields (title, due, status) in place.
export function patchTask(token, list, id, fields) {
  return tasksFetch(token, taskUrl(list, id), {
    method: 'PATCH', body: JSON.stringify(fields)
  })
}
