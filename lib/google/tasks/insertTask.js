import { tasksFetch } from './tasksFetch'
import { taskUrl } from './taskUrl'

// Create a Google task in the given list; returns { id }.
export async function insertTask(token, list, task) {
  const created = await tasksFetch(token, taskUrl(list), {
    method: 'POST', body: JSON.stringify(task)
  })

  return { id: created.id }
}
