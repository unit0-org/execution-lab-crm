'use client'

import { RowDelete } from '@/ui/molecules/RowDelete'
import { useActionHandler } from '@/app/(app)/hooks/useActionHandler'
import { revokePortalMemberAction } from '../actions/revokePortalMember'

export function RevokePortalMember({ contactId, status }) {
  const revoke = useActionHandler(revokePortalMemberAction)

  if (status === 'revoked') return null

  return <RowDelete onConfirm={() => revoke(contactId)} title="Revoke access" />
}
