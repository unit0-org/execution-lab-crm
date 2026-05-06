import { TableRow } from '@/ui/Table'
import { TableCell } from '@/ui/TableCell'
import { ContactName } from './ContactName'
import { PrimaryEmail } from './PrimaryEmail'
import { AccountEmail } from './AccountEmail'
import { ContactLabels } from './ContactLabels'

export function ContactRow({ contact, accountEmail, allLabels, appliedIds, onMutate }) {
  return (
    <TableRow>
      <TableCell><ContactName name={contact.display_name} /></TableCell>
      <TableCell><PrimaryEmail emails={contact.contact_emails} /></TableCell>
      <TableCell>
        <ContactLabels contactId={contact.id} allLabels={allLabels} appliedIds={appliedIds} onMutate={onMutate} />
      </TableCell>
      <TableCell tone="muted"><AccountEmail email={accountEmail} /></TableCell>
    </TableRow>
  )
}
