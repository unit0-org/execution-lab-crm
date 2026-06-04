'use server'

import { inviteMember } from '@/lib/org/controllers/inviteMember'

export async function inviteMemberAction(formData) {
  const organizationId = formData.get('organization_id')

  return inviteMember(organizationId, formData.get('email'),
    formData.get('role'))
}
