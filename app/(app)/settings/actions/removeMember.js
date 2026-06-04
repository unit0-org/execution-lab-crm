'use server'

import { removeMember } from '@/lib/org/controllers/removeMember'

export async function removeMemberAction(formData) {
  return removeMember(formData.get('id'))
}
