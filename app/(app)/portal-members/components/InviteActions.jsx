import { FormActions } from '@/ui/molecules/FormActions'

const inviteLabel = (count) => (count > 1 ? `Invite ${count}` : 'Invite')

// Cancel + Invite footer. Invite is disabled until a contact is selected
// and shows a spinner while the invites send.
export function InviteActions({ count, onCancel, onInvite, busy }) {
  return (
    <FormActions label={inviteLabel(count)} busy={busy} disabled={!count}
      onCancel={onCancel} onConfirm={onInvite} />
  )
}
