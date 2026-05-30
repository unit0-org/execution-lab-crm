'use client'

import { useTransition } from 'react'
import { Button } from '@/ui/Button'
import { Spinner } from '@/ui/Spinner'
import { useToast } from '@/ui/Toaster'
import { syncAccount } from '../actions'
import { kickoffSync } from '../../components/kickoffSync'
import { useSyncProgress } from '../hooks/useSyncProgress'

export function AccountSyncButton({ accountId }) {
  const [pending, start] = useTransition()
  const toast = useToast()
  const progress = useSyncProgress(accountId)
  const busy = pending || progress?.sync_status === 'running'
  const onSync = () => start(() => kickoffSync(syncAccount, accountId, toast))
  if (busy) return <Button type="button" size="sm" disabled><Spinner size={12} /></Button>
  return <Button type="button" size="sm" onClick={onSync}>Sync</Button>
}
