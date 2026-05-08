'use client'

import { InlineForm } from '@/ui/InlineForm'
import { IconButton } from '@/ui/IconButton'
import { syncAccount } from '../contacts/actions'
import { useTransitionAction } from '../contacts/hooks/useTransitionAction'

export function SidebarSyncButton({ accountId, onMutate }) {
  const onSync = useTransitionAction(syncAccount, onMutate)
  return (
    <InlineForm action={onSync}>
      <input type="hidden" name="account_id" value={accountId} />
      <IconButton type="submit" label="Sync this account">↻</IconButton>
    </InlineForm>
  )
}
