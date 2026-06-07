'use server'

import { listRelationshipTypes } from '@/lib/contacts/listRelationshipTypes'

export async function listRelationshipTypesAction() {
  return listRelationshipTypes()
}
