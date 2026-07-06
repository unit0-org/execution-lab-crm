'use client'

import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { CopyList } from '@/ui/molecules/CopyList'
import { ContactNameCell } from './ContactNameCell'
import { ContactLabels } from './ContactLabels'
import { useDeleteContact } from '../hooks/useDeleteContact'

const emailsOf = (c) => (c.contact_email || []).map((e) => e.email)

export function ContactRow({ contact, selected, onToggle, onChanged }) {
  const remove = useDeleteContact(contact.id, onChanged)
  const select = { checked: selected, onToggle: () => onToggle(contact.id) }

  return (
    <Tr select={select} onDelete={remove} deleteTitle="Delete contact">
      <Td><ContactNameCell contact={contact} /></Td>
      <Td><CopyList values={emailsOf(contact)} collapse /></Td>
      <Td><ContactLabels contact={contact} /></Td>
    </Tr>
  )
}
