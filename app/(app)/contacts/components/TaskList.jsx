import { CardGrid } from '@/ui/layout/CardGrid'
import { TaskCard } from './TaskCard'

export function TaskList({ tasks, onToggle }) {
  return (
    <CardGrid>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onToggle={onToggle} />
      ))}
    </CardGrid>
  )
}
