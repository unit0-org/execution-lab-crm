import { Stack } from '@/ui/Stack'
import { EmptyState } from '@/ui/EmptyState'
import { AccountRow } from './AccountRow'

export function AccountsList({ accounts, onMutate }) {
  if (!accounts.length) return <EmptyState>No accounts connected yet.</EmptyState>

  return (
    <Stack gap="sm">
      {accounts.map((a) => <AccountRow key={a.id} account={a} onMutate={onMutate} />)}
    </Stack>
  )
}
