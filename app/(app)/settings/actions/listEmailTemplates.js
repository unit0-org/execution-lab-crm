'use server'

import { withOrg } from '@/lib/auth/withOrg'
import { listEmailTemplates }
  from '@/lib/email/controllers/listEmailTemplates'

export const listEmailTemplatesAction = withOrg(
  (organizationId) => listEmailTemplates(organizationId),
  []
)
