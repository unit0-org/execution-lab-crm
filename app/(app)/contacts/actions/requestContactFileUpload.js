'use server'

import { requestContactFileUpload }
  from '@/lib/contact/controllers/requestContactFileUpload'
import { withMember } from '@/lib/auth/withMember'

export const requestContactFileUploadAction = withMember(
  (contactId) => requestContactFileUpload(contactId)
)
