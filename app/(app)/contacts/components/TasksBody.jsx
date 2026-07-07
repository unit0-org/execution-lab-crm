import { TaskList } from './TaskList'

// The list of tasks, which handles its own empty case.
export function TasksBody({ tasks, onToggle }) {
  return <TaskList tasks={tasks} onToggle={onToggle} />
}
