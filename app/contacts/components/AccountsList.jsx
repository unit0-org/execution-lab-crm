import { Table, TableBody } from '@/ui/Table'
import { EmptyState } from '@/ui/EmptyState'
import { AccountsTableHead } from './AccountsTableHead'
import { AccountRow } from './AccountRow'

export function AccountsList({ accounts, onMutate }) {
  if (!accounts.length) return <EmptyState>No accounts connected yet.</EmptyState>

  return (
    <Table>
      <AccountsTableHead />
      <TableBody>
        {accounts.map((a) => (
          <AccountRow key={a.id} account={a} onMutate={onMutate} />
        ))}
      </TableBody>
    </Table>
  )
}
