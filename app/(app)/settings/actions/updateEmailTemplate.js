'use server'

import { withAdmin } from '@/lib/auth/withAdmin'
import { updateEmailTemplate }
  from '@/lib/email/controllers/updateEmailTemplate'

// withAdmin still injects an org id first (lib/auth, out of scope); the
// template is no longer org-scoped, so we ignore it.
export const updateEmailTemplateAction = withAdmin(
  async (_org, key, formData) => {
    try {
      const subject = formData.get('subject')
      const body = formData.get('body')

      return await updateEmailTemplate(key, subject, body)
    } catch (e) {
      return { error: e.message }
    }
  }
)
