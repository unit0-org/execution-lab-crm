'use client'

import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { CopyList } from '@/ui/molecules/CopyList'
import { RoleBadge } from './RoleBadge'
import { ContactNameLink }
  from '@/app/(app)/contacts/components/ContactNameLink'
import { useActionHandler } from '@/app/(app)/hooks/useActionHandler'
import { removeCompanyContactAction } from '../actions/removeCompanyContact'

const emailsOf = (l) => (l.contact?.contact_email || []).map((e) => e.email)

export function CompanyContactRow({ link, companyId, onChanged }) {
  const remove = useActionHandler(removeCompanyContactAction, {
    onDone: onChanged
  })
  const drop = () => remove({ companyId, contactId: link.contact_id })

  return (
    <Tr onDelete={drop} deleteTitle="Remove contact">
      <Td><ContactNameLink contact={link.contact} /></Td>
      <Td><CopyList values={emailsOf(link)} collapse /></Td>
      <Td><RoleBadge role={link.role} /></Td>
    </Tr>
  )
}
