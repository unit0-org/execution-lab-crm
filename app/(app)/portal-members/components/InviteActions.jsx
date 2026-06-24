import { EndRow } from '@/ui/layout/EndRow'
import { Button } from '@/ui/atoms/Button'

const inviteLabel = (count) => (count > 1 ? `Invite ${count}` : 'Invite')

// Cancel + Invite footer. Invite is disabled until a contact is selected
// and shows a spinner while the invites send.
export function InviteActions({ count, onCancel, onInvite, busy }) {
  return (
    <EndRow>
      <Button tone="quiet" onClick={onCancel}>Cancel</Button>
      <Button tone="primary" onClick={onInvite} disabled={!count}
        loading={busy}>
        {inviteLabel(count)}
      </Button>
    </EndRow>
  )
}
