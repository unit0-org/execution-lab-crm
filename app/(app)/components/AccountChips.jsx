'use client'

import { Stack } from '@/ui/Stack'
import { useAccounts } from '../contacts/hooks/useAccounts'
import { AccountChip } from './AccountChip'

export function AccountChips() {
  const { accounts } = useAccounts()
  if (!accounts.length) return null

  return (
    <Stack gap="sm">
      {accounts.map((a) => <AccountChip key={a.id} email={a.email} />)}
    </Stack>
  )
}
