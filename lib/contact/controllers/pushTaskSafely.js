import { pushNewTask } from '@/lib/google/tasks'

const persistLink = (task) => (link) => (link ? task.update(link) : null)

// Push a new task to Google Tasks and store the returned sync linkage.
// Failures are swallowed so creating the CRM task never fails on a Google
// hiccup — the tasks sync cron reconciles an un-synced row later.
export function pushTaskSafely(task) {
  return pushNewTask(task.toJSON())
    .then(persistLink(task))
    .catch(() => null)
}
