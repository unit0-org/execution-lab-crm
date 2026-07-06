'use client'

import { revokePortalMemberAction } from '../actions/revokePortalMember'

export function useRevokePortalMember(contactId) {
  return () => revokePortalMemberAction(contactId)
}
