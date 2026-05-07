import { TableRow } from '@/ui/Table'
import { TableCell } from '@/ui/TableCell'
import { ContactNameLink } from './ContactNameLink'
import { PrimaryEmail } from './PrimaryEmail'
import { AccountEmail } from './AccountEmail'
import { ContactLabels } from './ContactLabels'
import { ContactTypes } from './ContactTypes'
import { RowCheckbox } from './RowCheckbox'

export function ContactRow({ contact, accountEmail, allLabels, appliedLabelIds, allTypes, appliedTypeIds, onMutate, selection }) {
  return (
    <TableRow>
      <TableCell><RowCheckbox contact={contact} selection={selection} /></TableCell>
      <TableCell><ContactNameLink contact={contact} /></TableCell>
      <TableCell><PrimaryEmail emails={contact.contact_emails} /></TableCell>
      <TableCell>
        <ContactTypes contactId={contact.id} allTypes={allTypes} appliedIds={appliedTypeIds} onMutate={onMutate} />
      </TableCell>
      <TableCell>
        <ContactLabels contactId={contact.id} allLabels={allLabels} appliedIds={appliedLabelIds} onMutate={onMutate} />
      </TableCell>
      <TableCell tone="muted"><AccountEmail email={accountEmail} /></TableCell>
    </TableRow>
  )
}
