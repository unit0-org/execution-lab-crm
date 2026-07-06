'use server'

import { removeAttendee } from '@/lib/event/controllers/removeAttendee'
import { withMember } from '@/lib/auth/withMember'

export const removeAttendeeAction = withMember((id) => removeAttendee(id))
