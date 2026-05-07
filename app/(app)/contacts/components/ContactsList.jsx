import { Table, TableBody } from '@/ui/Table'
import { EmptyState } from '@/ui/EmptyState'
import { ContactsTableHead } from './ContactsTableHead'
import { ContactRow } from './ContactRow'

const emailOf = (idx, c) => idx[c.google_account_id]?.email
const idsFor = (map, c) => map[c.id] || []

export function ContactsList({ contacts, accountById, allLabels, contactTagMap, onMutate, selection }) {
  if (!contacts.length) {
    return <EmptyState>No contacts match. Connect an account, sync, or clear the filter.</EmptyState>
  }

  return (
    <Table>
      <ContactsTableHead contacts={contacts} selection={selection} />
      <TableBody>
        {contacts.map((c) => (
          <ContactRow key={c.id} contact={c}
            accountEmail={emailOf(accountById, c)}
            allLabels={allLabels} appliedLabelIds={idsFor(contactTagMap, c)}
            onMutate={onMutate} selection={selection} />
        ))}
      </TableBody>
    </Table>
  )
}
