import { TableRow } from '@/ui/Table'
import { TableCell } from '@/ui/TableCell'
import { ContactName } from './ContactName'
import { PrimaryEmail } from './PrimaryEmail'
import { AccountEmail } from './AccountEmail'

export function ContactRow({ contact, accountEmail }) {
  return (
    <TableRow>
      <TableCell><ContactName name={contact.display_name} /></TableCell>
      <TableCell><PrimaryEmail emails={contact.contact_emails} /></TableCell>
      <TableCell tone="muted"><AccountEmail email={accountEmail} /></TableCell>
    </TableRow>
  )
}
