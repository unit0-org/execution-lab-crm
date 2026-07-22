'use client'

import { Stack } from '@/ui/layout/Stack'
import { CompanyHeader } from './CompanyHeader'
import { CompanyInfo } from './CompanyInfo'
import { CompanyContacts } from './CompanyContacts'

export function CompanyDetail({ company, onChanged, initialContacts }) {
  return (
    <Stack gap="lg">
      <CompanyHeader company={company} onChanged={onChanged} />
      <CompanyInfo company={company} />
      <CompanyContacts companyId={company.id} initial={initialContacts} />
    </Stack>
  )
}
