'use server'

import { withAdmin } from '@/lib/auth/withAdmin'
import { inviteMember } from '@/lib/org/controllers/inviteMember'

export const inviteMemberAction = withAdmin((organizationId, formData) =>
  inviteMember(organizationId, formData.get('email'),
    formData.get('role')))
