'use client'

import { IntegrationCard } from './IntegrationCard'
import { useAccounts } from '../../contacts/hooks/useAccounts'

const WORKSPACE_BACKED = new Set(['google-meet', 'google-calendar', 'google-drive'])

export function PlaceholderCard({ integration }) {
  const { accounts } = useAccounts()
  const backed = WORKSPACE_BACKED.has(integration.key)
  const status = backed && accounts.length ? 'connected' : 'available'
  return <IntegrationCard integration={integration} status={status} />
}
