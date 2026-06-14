'use server'

import { listRelationshipTypes }
  from '@/lib/contact/controllers/listRelationshipTypes'
import { withMember } from '@/lib/auth/withMember'

export const listRelationshipTypesAction = withMember(
  () => listRelationshipTypes(),
  []
)
