'use server'

import { withMember } from '@/lib/auth/withMember'
import { listEmailTemplates }
  from '@/lib/email/controllers/listEmailTemplates'

export const listEmailTemplatesAction = withMember(
  () => listEmailTemplates(),
  []
)
