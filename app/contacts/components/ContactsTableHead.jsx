import { TableHead, TableRow } from '@/ui/Table'
import { TableHeader } from '@/ui/TableCell'

export function ContactsTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableHeader>Name</TableHeader>
        <TableHeader>Email</TableHeader>
        <TableHeader>Source account</TableHeader>
      </TableRow>
    </TableHead>
  )
}
