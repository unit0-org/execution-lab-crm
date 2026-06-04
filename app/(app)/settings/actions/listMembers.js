'use server'

import { listMembers } from '@/lib/org/controllers/listMembers'

export async function listMembersAction(organizationId) {
  return listMembers(organizationId)
}
