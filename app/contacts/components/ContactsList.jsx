import { Table, TableBody } from '@/ui/Table'
import { EmptyState } from '@/ui/EmptyState'
import { ContactsTableHead } from './ContactsTableHead'
import { ContactRow } from './ContactRow'

const accountEmailFor = (idx, c) => idx[c.google_account_id]?.email
const tagsFor = (map, c) => map[c.id] || []

export function ContactsList({ contacts, accountById, allLabels, contactTagMap, onMutate }) {
  if (!contacts.length) {
    return <EmptyState>No contacts match. Connect an account, sync, or clear the filter.</EmptyState>
  }
  return (
    <Table>
      <ContactsTableHead />
      <TableBody>
        {contacts.map((c) => (
          <ContactRow key={c.id} contact={c}
            accountEmail={accountEmailFor(accountById, c)}
            allLabels={allLabels} appliedIds={tagsFor(contactTagMap, c)}
            onMutate={onMutate} />
        ))}
      </TableBody>
    </Table>
  )
}
