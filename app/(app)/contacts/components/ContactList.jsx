import { Table } from '@/ui/molecules/Table'
import { ContactRow } from './ContactRow'

const COLS = ['Name', 'Emails', '']

export function ContactList({ contacts, onChanged }) {
  return (
    <Table cols={COLS}>
      {contacts.map((c) => (
        <ContactRow key={c.id} contact={c} onChanged={onChanged} />
      ))}
    </Table>
  )
}
