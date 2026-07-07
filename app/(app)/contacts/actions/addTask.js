'use server'

import { createTask } from '@/lib/contact/controllers/createTask'
import { withMember } from '@/lib/auth/withMember'

export const addTaskAction = withMember(async (formData) => {
  const contactId = formData.get('contact_id')
  const dueAt = formData.get('due_at') || null

  return createTask(contactId, formData.get('title'), dueAt)
})
