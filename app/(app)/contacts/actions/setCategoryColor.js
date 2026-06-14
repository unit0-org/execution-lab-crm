'use server'

import { setCategoryColor } from '@/lib/contact/controllers/setCategoryColor'
import { withMember } from '@/lib/auth/withMember'

export const setCategoryColorAction = withMember(
  (id, color) =>
    setCategoryColor(id, color)
)
