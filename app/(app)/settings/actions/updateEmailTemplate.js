'use server'

import { withAdmin } from '@/lib/auth/withAdmin'
import { updateEmailTemplate }
  from '@/lib/email/controllers/updateEmailTemplate'

export const updateEmailTemplateAction = withAdmin(
  async (organizationId, key, formData) => {
    try {
      const subject = formData.get('subject')
      const body = formData.get('body')

      return await updateEmailTemplate(organizationId, key, subject, body)
    } catch (e) {
      return { error: e.message }
    }
  }
)
