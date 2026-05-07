'use client'

import { useAccounts } from '../contacts/hooks/useAccounts'
import { AccountChip } from './AccountChip'
import { accountChipsStyle } from './AccountChips.styles'

export function AccountChips() {
  const { accounts } = useAccounts()
  if (!accounts.length) return null

  return (
    <div style={accountChipsStyle}>
      {accounts.map((a) => <AccountChip key={a.id} email={a.email} />)}
    </div>
  )
}
