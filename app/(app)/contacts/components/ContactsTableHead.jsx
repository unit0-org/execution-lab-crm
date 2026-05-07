import { TableHead, TableRow } from '@/ui/Table'
import { TableHeader } from '@/ui/TableCell'
import { SelectAllCheckbox } from './SelectAllCheckbox'

export function ContactsTableHead({ contacts, selection }) {
  return (
    <TableHead>
      <TableRow>
        <TableHeader><SelectAllCheckbox contacts={contacts} selection={selection} /></TableHeader>
        <TableHeader>Name</TableHeader>
        <TableHeader>Email</TableHeader>
        <TableHeader>Tags</TableHeader>
        <TableHeader>Source account</TableHeader>
      </TableRow>
    </TableHead>
  )
}
