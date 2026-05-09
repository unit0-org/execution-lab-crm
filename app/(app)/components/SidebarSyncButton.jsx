'use client'

import { useTransition } from 'react'
import { IconButton } from '@/ui/IconButton'
import { Spinner } from '@/ui/Spinner'
import { useToast } from '@/ui/Toaster'
import { syncAccount } from '../contacts/actions'
import { kickoffSync } from './kickoffSync'

export function SidebarSyncButton({ accountId, forceSpinning }) {
  const [pending, start] = useTransition()
  const toast = useToast()
  const spinning = pending || forceSpinning

  const onClick = (e) => {
    e.preventDefault(); e.stopPropagation()
    if (spinning) return
    start(() => kickoffSync(syncAccount, accountId, toast))
  }

  return (
    <IconButton onClick={onClick} disabled={spinning} label="Sync this account">
      {spinning ? <Spinner size={12} /> : '↻'}
    </IconButton>
  )
}
