import { OwnerOnly } from './OwnerOnly'
import { InvitationsPanel } from './InvitationsPanel'

// The platform-owner panel for inviting people to found their own org.
export function InvitationsView() {
  return (
    <OwnerOnly>
      <InvitationsPanel />
    </OwnerOnly>
  )
}
