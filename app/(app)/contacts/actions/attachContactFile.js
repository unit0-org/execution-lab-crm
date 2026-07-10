'use server'

import { attachContactFile }
  from '@/lib/contact/controllers/attachContactFile'
import { withMember } from '@/lib/auth/withMember'
import { currentUser } from '@/lib/auth/currentUser'

export const attachContactFileAction = withMember(async (input) => {
  const user = await currentUser()

  return attachContactFile({ ...input, uploadedBy: user?.id || null })
})
