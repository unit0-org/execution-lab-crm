'use client'

import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { CopyList } from '@/ui/molecules/CopyList'
import { ContactNameCell } from './ContactNameCell'
import { ContactLabels } from './ContactLabels'
import { useActionHandler } from '@/app/(app)/hooks/useActionHandler'
import { removeContactAction } from '../actions/removeContact'

const emailsOf = (c) => (c.contact_email || []).map((e) => e.email)

export function ContactRow({ contact, selected, onToggle, onChanged }) {
  const remove = useActionHandler(removeContactAction, { onDone: onChanged })
  const select = { checked: selected, onToggle: () => onToggle(contact.id) }

  return (
    <Tr select={select} onDelete={() => remove(contact.id)}
      deleteTitle="Delete contact">
      <Td><ContactNameCell contact={contact} /></Td>
      <Td><CopyList values={emailsOf(contact)} collapse /></Td>
      <Td><ContactLabels contact={contact} /></Td>
    </Tr>
  )
}
