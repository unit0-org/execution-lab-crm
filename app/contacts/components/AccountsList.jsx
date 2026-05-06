import { Table, TableHead, TableBody, TableRow } from '@/ui/Table'
import { TableHeader } from '@/ui/TableCell'
import { EmptyState } from '@/ui/EmptyState'
import { AccountRow } from './AccountRow'

function AccountsHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableHeader>Email</TableHeader>
        <TableHeader>Last synced</TableHeader>
        <TableHeader align="right">Actions</TableHeader>
      </TableRow>
    </TableHead>
  )
}

export function AccountsList({ accounts }) {
  if (!accounts.length) return <EmptyState>No accounts connected yet.</EmptyState>
  return (
    <Table>
      <AccountsHeader />
      <TableBody>
        {accounts.map((a) => <AccountRow key={a.id} account={a} />)}
      </TableBody>
    </Table>
  )
}
