'use client'

import { useTransition } from 'react'
import { Button } from '@/ui/Button'
import { Inline } from '@/ui/Inline'
import { Spinner } from '@/ui/Spinner'
import { ConfirmInlineForm } from '@/ui/ConfirmInlineForm'
import { useToast } from '@/ui/Toaster'
import { syncAccount, disconnectAccount } from '../actions'
import { useTransitionAction } from '../hooks/useTransitionAction'
import { DISCONNECT_CONFIRM } from './disconnectMessage'
import { kickoffSync } from '../../components/kickoffSync'
import { useSyncProgress } from '../hooks/useSyncProgress'

const HiddenAccountId = ({ value }) => <input type="hidden" name="account_id" value={value} />

export function AccountActions({ accountId, onMutate }) {
  const [pending, start] = useTransition()
  const toast = useToast()
  const progress = useSyncProgress(accountId)
  const running = progress?.sync_status === 'running'
  const onDisconnect = useTransitionAction(disconnectAccount, onMutate)
  const onSync = () => start(() => kickoffSync(syncAccount, accountId, toast))
  const busy = pending || running

  return (
    <Inline gap="sm" justify="flex-end">
      <Button type="button" size="sm" onClick={onSync} disabled={busy}>
        {busy ? <Spinner size={12} /> : 'Sync'}
      </Button>
      <ConfirmInlineForm message={DISCONNECT_CONFIRM} action={onDisconnect}>
        <HiddenAccountId value={accountId} />
        <Button type="submit" size="sm" tone="danger">Disconnect</Button>
      </ConfirmInlineForm>
    </Inline>
  )
}
