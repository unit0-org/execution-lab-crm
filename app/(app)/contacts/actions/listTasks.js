'use server'

import { listTasks } from '@/lib/contact/controllers/listTasks'
import { withMember } from '@/lib/auth/withMember'

export const listTasksAction = withMember(
  (contactId) => listTasks(contactId),
  []
)
