import { registerCreateTask } from './createTask'
import { registerListTasks } from './listTasks'

// Contact follow-up task tools (create + list; mirrored to Google Tasks).
export function registerContactTaskTools(server) {
  registerCreateTask(server)
  registerListTasks(server)
}
