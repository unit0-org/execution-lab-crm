'use server'

import { toggleTask } from '@/lib/contact/controllers/toggleTask'
import { withMember } from '@/lib/auth/withMember'

export const toggleTaskAction = withMember(
  (taskId, done) => toggleTask(taskId, done)
)
