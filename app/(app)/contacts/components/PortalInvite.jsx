'use client'

import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'
import { PortalStatusBadge } from './PortalStatusBadge'
import { PortalInviteForm } from './PortalInviteForm'

// Portal access control for a contact: a status badge plus invite/revoke.
// With no email and no membership yet, there's nothing to match sign-in to.
export function PortalInvite({ contact, portalMember }) {
  const status = portalMember?.status || null
  const hasEmail = (contact.contact_email?.length || 0) > 0

  if (!hasEmail && !status)
    return <Text size="sm">Add an email to invite to the portal</Text>

  return (
    <Inline gap="sm">
      <PortalStatusBadge status={status} />
      <PortalInviteForm contactId={contact.id} status={status} />
    </Inline>
  )
}
