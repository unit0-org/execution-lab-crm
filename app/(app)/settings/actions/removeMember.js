'use server'

import { withAdmin } from '@/lib/auth/withAdmin'
import { removeMember } from '@/lib/org/controllers/removeMember'

export const removeMemberAction = withAdmin((_org, id) => removeMember(id))
