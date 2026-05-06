import { Button } from '@/ui/Button'
import { Inline } from '@/ui/Inline'
import { InlineForm } from '@/ui/InlineForm'
import { syncAccount, disconnectAccount } from '../actions'

function HiddenAccountId({ value }) {
  return <input type="hidden" name="account_id" value={value} />
}

export function AccountActions({ accountId }) {
  return (
    <Inline gap="sm" justify="flex-end">
      <InlineForm action={syncAccount}>
        <HiddenAccountId value={accountId} />
        <Button type="submit" size="sm">Sync</Button>
      </InlineForm>
      <InlineForm action={disconnectAccount}>
        <HiddenAccountId value={accountId} />
        <Button type="submit" size="sm" tone="danger">Disconnect</Button>
      </InlineForm>
    </Inline>
  )
}
