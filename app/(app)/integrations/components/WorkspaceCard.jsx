'use client'

import { IntegrationCard } from './IntegrationCard'
import { useAccounts } from '../../contacts/hooks/useAccounts'
import { AccountsList } from '../../contacts/components/AccountsList'
import { ConnectAccountButton } from '../../contacts/components/ConnectAccountButton'

const SPEC = {
  key: 'google-workspace',
  name: 'Google Workspace',
  description: 'Per-account OAuth for Gmail / Calendar / Drive / Contacts / Meet.',
}

export function WorkspaceCard() {
  const { accounts, refresh } = useAccounts()
  const status = accounts.length ? 'connected' : 'available'

  return (
    <IntegrationCard integration={SPEC} status={status}>
      <AccountsList accounts={accounts} onMutate={refresh} />
      <ConnectAccountButton />
    </IntegrationCard>
  )
}
