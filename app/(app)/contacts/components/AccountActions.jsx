'use client'

import { Button } from '@/ui/Button'
import { Inline } from '@/ui/Inline'
import { InlineForm } from '@/ui/InlineForm'
import { ConfirmInlineForm } from '@/ui/ConfirmInlineForm'
import { syncAccount, disconnectAccount } from '../actions'
import { useTransitionAction } from '../hooks/useTransitionAction'
import { DISCONNECT_CONFIRM } from './disconnectMessage'

const HiddenAccountId = ({ value }) => <input type="hidden" name="account_id" value={value} />

export function AccountActions({ accountId, onMutate }) {
  const onSync = useTransitionAction(syncAccount, onMutate)
  const onDisconnect = useTransitionAction(disconnectAccount, onMutate)

  return (
    <Inline gap="sm" justify="flex-end">
      <InlineForm action={onSync}>
        <HiddenAccountId value={accountId} />
        <Button type="submit" size="sm">Sync</Button>
      </InlineForm>
      <ConfirmInlineForm message={DISCONNECT_CONFIRM} action={onDisconnect}>
        <HiddenAccountId value={accountId} />
        <Button type="submit" size="sm" tone="danger">Disconnect</Button>
      </ConfirmInlineForm>
    </Inline>
  )
}
