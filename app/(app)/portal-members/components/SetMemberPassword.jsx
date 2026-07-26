'use client'

import { Button } from '@/ui/atoms/Button'
import { useToggle } from '@/ui/molecules/useToggle'
import { SetPasswordModal } from './SetPasswordModal'

// A revoked member can't sign in, so there's nothing to set a password for.
export function SetMemberPassword({ member }) {
  const modal = useToggle()

  if (member.status === 'revoked') return null

  return (
    <>
      <Button size="sm" onClick={modal.show}>Set password</Button>
      <SetPasswordModal open={modal.open} onClose={modal.hide}
        member={member} />
    </>
  )
}
