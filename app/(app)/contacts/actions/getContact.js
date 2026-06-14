'use server'

import { getContact } from '@/lib/contact/controllers/get'
import { withMember } from '@/lib/auth/withMember'

export const getContactAction = withMember(
  (id) => getContact(id),
  null
)
