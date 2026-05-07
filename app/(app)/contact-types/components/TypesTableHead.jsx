import { TableHead, TableRow } from '@/ui/Table'
import { TableHeader } from '@/ui/TableCell'

export function TypesTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableHeader>Type</TableHeader>
        <TableHeader>Color</TableHeader>
        <TableHeader align="right">Actions</TableHeader>
      </TableRow>
    </TableHead>
  )
}
