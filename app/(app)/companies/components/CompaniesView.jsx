'use client'

import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { useToggle } from '@/ui/molecules/useToggle'
import { CreateCompanyModal } from './CreateCompanyModal'
import { CompanyList } from './CompanyList'
import { useCompanies } from '../hooks/useCompanies'

export function CompaniesView({ initialCompanies }) {
  const { companies, reload } = useCompanies(initialCompanies)
  const create = useToggle()

  const saved = () => {
    reload()
    create.hide()
  }

  return (
    <Stack gap="md">
      <SectionHeader title="Companies" addLabel="New company"
        onAdd={create.show} />
      <CreateCompanyModal open={create.open} onSaved={saved}
        onClose={create.hide} />
      <CompanyList companies={companies} onChanged={reload} />
    </Stack>
  )
}
