'use client'

import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { Link } from '@/ui/atoms/Link'
import { RowDelete } from '@/ui/molecules/RowDelete'
import { ContactName } from './ContactName'
import { SelectCell } from './SelectCell'
import { useDeleteContact } from '../hooks/useDeleteContact'

const emails = (c) =>
  (c.contact_email || []).map((e) => e.email).join(', ')

export function ContactRow({ contact, selected, onToggle, onChanged }) {
  const remove = useDeleteContact(contact.id, onChanged)

  return (
    <Tr>
      <SelectCell checked={selected} onToggle={() => onToggle(contact.id)} />
      <Td>
        <Link href={`/contacts/${contact.id}`}>
          <ContactName contact={contact} />
        </Link>
      </Td>
      <Td>{emails(contact)}</Td>
      <Td><RowDelete onConfirm={remove} title="Delete contact" /></Td>
    </Tr>
  )
}
