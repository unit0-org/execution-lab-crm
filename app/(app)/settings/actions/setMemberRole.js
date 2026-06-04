'use server'

import { setMemberRole } from '@/lib/org/controllers/setMemberRole'

export async function setMemberRoleAction(formData) {
  return setMemberRole(formData.get('id'), formData.get('role'))
}
