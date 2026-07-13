'use client'

import { InvitePortalButton } from './InvitePortalButton'
import { RevokePortalButton } from './RevokePortalButton'

const isMember = (status) => status === 'invited' || status === 'active'

// Invite when the contact isn't a member, revoke when they are. Only the
// revoke takes something away, so only it stops to confirm.
export function PortalInviteForm({ contactId, status }) {
  if (isMember(status)) return <RevokePortalButton contactId={contactId} />

  return <InvitePortalButton contactId={contactId} />
}
