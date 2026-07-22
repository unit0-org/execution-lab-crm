'use client'

import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { useToggle } from '@/ui/molecules/useToggle'
import { AddCompanyContactModal } from './AddCompanyContactModal'
import { CompanyContactList } from './CompanyContactList'
import { useCompanyContacts } from '../hooks/useCompanyContacts'

export function CompanyContacts({ companyId, initial }) {
  const { contacts, reload } = useCompanyContacts(companyId, initial)
  const add = useToggle()

  const saved = () => {
    reload()
    add.hide()
  }

  return (
    <Stack gap="sm">
      <SectionHeader title="Contacts" addLabel="Add contact"
        onAdd={add.show} />
      <AddCompanyContactModal open={add.open} companyId={companyId}
        onSaved={saved} onClose={add.hide} />
      <CompanyContactList items={contacts} companyId={companyId}
        onChanged={reload} />
    </Stack>
  )
}
