'use client'

import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Select } from '@/ui/atoms/Select'
import { FormActions } from '@/ui/molecules/FormActions'
import { ContactAutocomplete }
  from '@/app/(app)/contacts/components/ContactAutocomplete'
import { useAddCompanyContact } from '../hooks/useAddCompanyContact'
import { COMPANY_ROLE_OPTIONS } from './companyRoleOptions'

export function AddCompanyContactForm({ companyId, onSaved, onCancel }) {
  const f = useAddCompanyContact(companyId, onSaved)

  return (
    <Stack gap="md">
      <Heading level={3}>Add contact</Heading>
      <ContactAutocomplete label="Contact" value={f.contact}
        onChange={f.setContact} allowCreate />
      <Select label="Role" options={COMPANY_ROLE_OPTIONS} value={f.role}
        onChange={(e) => f.setRole(e.target.value)} />
      <FormActions label="Add" onConfirm={f.submit} onCancel={onCancel} />
    </Stack>
  )
}
