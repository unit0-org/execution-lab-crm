'use client'

import { Inline } from '@/ui/Inline'
import { SubmitButton } from '@/ui/SubmitButton'
import { ConfirmInlineForm } from '@/ui/ConfirmInlineForm'
import { disconnectAccount } from '../actions'
import { DISCONNECT_CONFIRM } from './disconnectMessage'
import { AccountSyncButton } from './AccountSyncButton'

const HiddenAccountId = ({ value }) => <input type="hidden" name="account_id" value={value} />
const disconnector = (after) => async (fd) => { await disconnectAccount(fd); after?.() }

export function AccountActions({ accountId, onMutate }) {
  return (
    <Inline gap="sm" justify="flex-end">
      <AccountSyncButton accountId={accountId} />
      <ConfirmInlineForm message={DISCONNECT_CONFIRM} action={disconnector(onMutate)}>
        <HiddenAccountId value={accountId} />
        <SubmitButton size="sm" tone="danger">Disconnect</SubmitButton>
      </ConfirmInlineForm>
    </Inline>
  )
}
