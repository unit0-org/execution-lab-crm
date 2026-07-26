import { Inline } from '@/ui/layout/Inline'
import { SetMemberPassword } from './SetMemberPassword'
import { RevokePortalMember } from './RevokePortalMember'

// The per-member actions: set a portal password, or revoke access.
export function MemberActionsCell({ member }) {
  return (
    <Inline gap="sm" nowrap>
      <SetMemberPassword member={member} />
      <RevokePortalMember contactId={member.contactId}
        status={member.status} />
    </Inline>
  )
}
