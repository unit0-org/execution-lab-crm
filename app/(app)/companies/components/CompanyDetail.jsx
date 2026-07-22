'use client'

import { Stack } from '@/ui/layout/Stack'
import { CompanyHeader } from './CompanyHeader'
import { CompanyInfo } from './CompanyInfo'
import { CompanyContacts } from './CompanyContacts'
import { CompanyInvoices } from './CompanyInvoices'

export function CompanyDetail(props) {
  const { company, onChanged, initialContacts, initialInvoices } = props

  return (
    <Stack gap="lg">
      <CompanyHeader company={company} onChanged={onChanged} />
      <CompanyInfo company={company} />
      <CompanyContacts companyId={company.id} initial={initialContacts} />
      <CompanyInvoices invoices={initialInvoices} />
    </Stack>
  )
}
