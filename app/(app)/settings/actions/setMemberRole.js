'use server'

import { withAdmin } from '@/lib/auth/withAdmin'
import { setMemberRole } from '@/lib/org/controllers/setMemberRole'

export const setMemberRoleAction = withAdmin((_org, formData) =>
  setMemberRole(formData.get('id'), formData.get('role')))
