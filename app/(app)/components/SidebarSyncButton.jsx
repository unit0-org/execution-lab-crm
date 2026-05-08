'use client'

import { useTransition } from 'react'
import { IconButton } from '@/ui/IconButton'
import { Spinner } from '@/ui/Spinner'
import { useToast } from '@/ui/Toaster'
import { syncAccount } from '../contacts/actions'
import { runSync } from './runSync'

export function SidebarSyncButton({ accountId, onMutate }) {
  const [pending, start] = useTransition()
  const toast = useToast()

  const onClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    start(() => runSync(syncAccount, accountId, toast, onMutate))
  }

  return (
    <IconButton onClick={onClick} disabled={pending} label="Sync this account">
      {pending ? <Spinner size={12} /> : '↻'}
    </IconButton>
  )
}
