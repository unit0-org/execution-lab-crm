'use server'

import { deleteContactFile }
  from '@/lib/contact/controllers/deleteContactFile'
import { withMember } from '@/lib/auth/withMember'

export const deleteContactFileAction = withMember(
  (id) => deleteContactFile(id)
)
