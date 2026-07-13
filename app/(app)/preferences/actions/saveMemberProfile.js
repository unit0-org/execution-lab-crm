'use server'

import { withMember } from '@/lib/auth/withMember'
import { currentUser } from '@/lib/auth/currentUser'
import { updateMemberProfile }
  from '@/lib/org/controllers/updateMemberProfile'

export const saveMemberProfileAction = withMember(async (formData) => {
  try {
    const user = await currentUser()

    await updateMemberProfile(user.id, {
      displayName: formData.get('display_name') || null
    })

    return { ok: true }
  } catch (e) {
    return { error: e.message }
  }
})
