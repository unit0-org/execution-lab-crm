'use client'

import { useTransition } from 'react'
import { Inline } from '@/ui/Inline'
import { syncAccount, disconnectAccount } from '../actions'
import { AccountActionForm } from './AccountActionForm'

const wrapAction = (fn, after, start) => (formData) =>
  start(async () => { await fn(formData); after?.() })

export function AccountActions({ accountId, onMutate }) {
  const [, start] = useTransition()
  const onSync = wrapAction(syncAccount, onMutate, start)
  const onDisconnect = wrapAction(disconnectAccount, onMutate, start)

  return (
    <Inline gap="sm" justify="flex-end">
      <AccountActionForm action={onSync} accountId={accountId}>Sync</AccountActionForm>
      <AccountActionForm action={onDisconnect} accountId={accountId} tone="danger">Disconnect</AccountActionForm>
    </Inline>
  )
}
