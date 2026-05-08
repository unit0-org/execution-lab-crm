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
import { runSync } from '../../components/runSync'

const HiddenAccountId = ({ value }) => <input type="hidden" name="account_id" value={value} />

export function AccountActions({ accountId, onMutate }) {
  const [pending, start] = useTransition()
  const toast = useToast()
  const onDisconnect = useTransitionAction(disconnectAccount, onMutate)
  const onSync = () => start(() => runSync(syncAccount, accountId, toast, onMutate))

  return (
    <Inline gap="sm" justify="flex-end">
      <Button type="button" size="sm" onClick={onSync} disabled={pending}>
        {pending ? <Spinner size={12} /> : 'Sync'}
      </Button>
      <ConfirmInlineForm message={DISCONNECT_CONFIRM} action={onDisconnect}>
        <HiddenAccountId value={accountId} />
        <Button type="submit" size="sm" tone="danger">Disconnect</Button>
      </ConfirmInlineForm>
    </Inline>
  )
}
