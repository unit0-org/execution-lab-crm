'use server'

import { listRelationshipTypes } from '@/lib/contacts/listRelationshipTypes'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function listRelationshipTypesAction() {
  const m = await currentMembership()

  if (!m) return []

  return listRelationshipTypes(m.organizationId)
}
