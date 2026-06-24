'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { showToast } from '@/ui/molecules/toastBus'
import { matchContactOptions } from './contactOptions'
import { invitePortalMemberAction } from '../actions/invitePortalMember'

// Drives the invite picker: search contacts; on pick, email an invite,
// toast the outcome, refresh the list, and close.
export function useInviteMember(contacts, onClose) {
  const router = useRouter()
  const [query, setQuery] = useState('')

  const pick = (option) => {
    setQuery('')
    onClose()
    invitePortalMemberAction(option.value)
      .then((r) => showToast(r?.error || 'Invite sent'))
      .catch(() => showToast('Could not send invite'))
      .finally(() => router.refresh())
  }

  return {
    query, onChange: setQuery, pick,
    options: matchContactOptions(contacts, query)
  }
}
