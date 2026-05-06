import { Table, TableBody } from '@/ui/Table'
import { EmptyState } from '@/ui/EmptyState'
import { ContactsTableHead } from './ContactsTableHead'
import { ContactRow } from './ContactRow'

const accountEmailFor = (accountById, c) => accountById[c.google_account_id]?.email

export function ContactsList({ contacts, accountById }) {
  if (!contacts.length) {
    return <EmptyState>No contacts yet. Connect an account and click Sync.</EmptyState>
  }
  return (
    <Table>
      <ContactsTableHead />
      <TableBody>
        {contacts.map((c) => (
          <ContactRow key={c.id} contact={c} accountEmail={accountEmailFor(accountById, c)} />
        ))}
      </TableBody>
    </Table>
  )
}
