import { registerCreateTask } from './createTask'
import { registerListTasks } from './listTasks'
import { registerUpdateTask } from './updateTask'
import { registerDeleteTask } from './deleteTask'

// Contact follow-up task tools (create/list/update/delete; mirrored to
// Google Tasks). delete_task is destructive — it requires confirm: true.
export function registerContactTaskTools(server) {
  registerCreateTask(server)
  registerListTasks(server)
  registerUpdateTask(server)
  registerDeleteTask(server)
}
