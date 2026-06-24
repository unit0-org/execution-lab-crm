'use client'

import { Form } from '@/ui/molecules/Form'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { revokePortalMemberAction } from '../actions/revokePortalMember'

export function RevokePortalMember({ contactId, status }) {
  if (status === 'revoked') return null

  return (
    <Form action={revokePortalMemberAction}>
      <input type="hidden" name="id" value={contactId} />
      <IconButton type="submit" tone="danger" label="Revoke access">
        <Icon name="close" size={14} />
      </IconButton>
    </Form>
  )
}
