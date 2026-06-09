'use client'

import { revokeFounderInviteAction } from '../actions/revokeFounderInvite'

// A handler that revokes an invite by id, then refreshes the list.
export function useRevokeInvite(id, onChanged) {
  return () => {
    revokeFounderInviteAction(id).then(onChanged)
  }
}
