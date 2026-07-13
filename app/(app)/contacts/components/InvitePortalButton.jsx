'use client'

import { Form } from '@/ui/molecules/Form'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { inviteToPortalAction } from '../actions/inviteToPortal'

// Inviting is additive and reversible, so it submits straight away.
export function InvitePortalButton({ contactId }) {
  return (
    <Form action={inviteToPortalAction}>
      <input type="hidden" name="id" value={contactId} />
      <IconButton type="submit" label="Invite to portal">
        <Icon name="users" size={16} />
      </IconButton>
    </Form>
  )
}
