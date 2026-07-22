'use client'

import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { CompanyNameCell } from './CompanyNameCell'
import { CompanyEmailCell } from './CompanyEmailCell'
import { CompanyWebsiteCell } from './CompanyWebsiteCell'
import { CompanyContactLinks } from './CompanyContactLinks'
import { useActionHandler } from '@/app/(app)/hooks/useActionHandler'
import { removeCompanyAction } from '../actions/removeCompany'

export function CompanyRow({ company, onChanged }) {
  const remove = useActionHandler(removeCompanyAction, { onDone: onChanged })

  return (
    <Tr onDelete={() => remove(company.id)} deleteTitle="Delete company">
      <Td><CompanyNameCell company={company} /></Td>
      <Td><CompanyEmailCell email={company.invoice_email} /></Td>
      <Td><CompanyWebsiteCell url={company.website} /></Td>
      <Td><CompanyContactLinks contacts={company.contacts} /></Td>
    </Tr>
  )
}
