'use client'

import { useTransition } from 'react'
import { Button } from '@/ui/Button'
import { Inline } from '@/ui/Inline'
import { InlineForm } from '@/ui/InlineForm'
import { syncAccount, disconnectAccount } from '../actions'

const HiddenAccountId = ({ value }) => <input type="hidden" name="account_id" value={value} />

const wrapAction = (fn, after, start) => (formData) =>
  start(async () => { await fn(formData); after?.() })

export function AccountActions({ accountId, onMutate }) {
  const [, start] = useTransition()
  const onSync = wrapAction(syncAccount, onMutate, start)
  const onDisconnect = wrapAction(disconnectAccount, onMutate, start)
  return (
    <Inline gap="sm" justify="flex-end">
      <InlineForm action={onSync}>
        <HiddenAccountId value={accountId} />
        <Button type="submit" size="sm">Sync</Button>
      </InlineForm>
      <InlineForm action={onDisconnect}>
        <HiddenAccountId value={accountId} />
        <Button type="submit" size="sm" tone="danger">Disconnect</Button>
      </InlineForm>
    </Inline>
  )
}
