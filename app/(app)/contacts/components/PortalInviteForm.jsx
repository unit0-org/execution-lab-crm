'use client'

import { Form } from '@/ui/molecules/Form'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { inviteToPortalAction } from '../actions/inviteToPortal'
import { revokePortalInviteAction } from '../actions/revokePortalInvite'

const isMember = (status) => status === 'invited' || status === 'active'

// One submit control: invite when the contact isn't a member, revoke when
// they are. The action revalidates the page so the badge updates in place.
export function PortalInviteForm({ contactId, status }) {
  const member = isMember(status)
  const action = member ? revokePortalInviteAction : inviteToPortalAction
  const label = member ? 'Revoke portal access' : 'Invite to portal'
  const icon = member ? 'close' : 'users'

  return (
    <Form action={action}>
      <input type="hidden" name="id" value={contactId} />
      <IconButton type="submit" label={label}>
        <Icon name={icon} size={16} />
      </IconButton>
    </Form>
  )
}
