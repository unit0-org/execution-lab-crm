'use server'

import { withOwner } from '@/lib/auth/withOwner'
import { createFounderInvite } from '@/lib/org/controllers/createFounderInvite'

export const createFounderInviteAction = withOwner((user, formData) =>
  createFounderInvite(formData.get('email'), user.email))
