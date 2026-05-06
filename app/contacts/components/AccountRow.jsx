import { TableCell } from '@/ui/TableCell'
import { TableRow } from '@/ui/Table'
import { LastSyncedAt } from './LastSyncedAt'
import { AccountActions } from './AccountActions'

export function AccountRow({ account }) {
  return (
    <TableRow>
      <TableCell>{account.email}</TableCell>
      <TableCell tone="muted"><LastSyncedAt at={account.last_synced_at} /></TableCell>
      <TableCell align="right"><AccountActions accountId={account.id} /></TableCell>
    </TableRow>
  )
}
