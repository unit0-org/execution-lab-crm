'use server'

import { listContacts } from '@/lib/contact/controllers/list'
import { withMember } from '@/lib/auth/withMember'

// Contacts for the attendee autocomplete (names + emails).
export const listContactsAction = withMember(
  () => listContacts(),
  []
)
