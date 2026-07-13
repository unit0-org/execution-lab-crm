'use client'

import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { ConfirmDialog } from '@/ui/molecules/ConfirmDialog'
import { useToggle } from '@/ui/molecules/useToggle'
import { useActionHandler } from '@/app/(app)/hooks/useActionHandler'
import { revokePortalInviteAction } from '../actions/revokePortalInvite'

const MESSAGE = 'They lose access to the member portal right away.'

// Taking access away is destructive, so it asks before it revokes.
export function RevokePortalButton({ contactId }) {
  const confirm = useToggle()
  const revoke = useActionHandler(revokePortalInviteAction, {
    onDone: confirm.hide
  })

  return (
    <>
      <IconButton label="Revoke portal access" onClick={confirm.show}>
        <Icon name="close" size={16} />
      </IconButton>
      <ConfirmDialog open={confirm.open} title="Revoke portal access?"
        message={MESSAGE} confirmLabel="Revoke"
        onConfirm={() => revoke(contactId)} onCancel={confirm.hide} />
    </>
  )
}
