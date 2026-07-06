'use client'

import { RowDelete } from '@/ui/molecules/RowDelete'
import { useRevokePortalMember } from '../hooks/useRevokePortalMember'

export function RevokePortalMember({ contactId, status }) {
  const revoke = useRevokePortalMember(contactId)

  if (status === 'revoked') return null

  return <RowDelete onConfirm={revoke} title="Revoke access" />
}
