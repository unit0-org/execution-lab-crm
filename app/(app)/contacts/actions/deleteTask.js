'use server'

import { deleteTask } from '@/lib/contact/controllers/deleteTask'
import { withMember } from '@/lib/auth/withMember'

export const deleteTaskAction = withMember(
  async (formData) => deleteTask(formData.get('id'))
)
