'use client'

import { RowDelete } from '@/ui/molecules/RowDelete'
import { useRevokeInvite } from '../hooks/useRevokeInvite'

// Revoke control for a pending invite; nothing once it's accepted.
export function RevokeInvite({ invite, onChanged }) {
  const revoke = useRevokeInvite(invite.id, onChanged)

  if (invite.accepted_at) return null

  return <RowDelete onConfirm={revoke} title="Revoke invitation" />
}
