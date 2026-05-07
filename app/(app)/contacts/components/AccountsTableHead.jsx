import { TableHead, TableRow } from '@/ui/Table'
import { TableHeader } from '@/ui/TableCell'

export function AccountsTableHead() {
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
