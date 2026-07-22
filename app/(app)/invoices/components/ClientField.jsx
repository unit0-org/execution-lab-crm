'use client'

import { ContactAutocomplete }
  from '@/app/(app)/contacts/components/ContactAutocomplete'
import { CompanyAutocomplete }
  from '@/app/(app)/companies/components/CompanyAutocomplete'

const CONTACT_BASE = { kind: 'contact', companyId: null, address: '' }
const COMPANY_BASE = { kind: 'company', contactId: null }

// The autocomplete for the chosen client kind, tagging picks with the kind.
export function ClientField({ client, onChange }) {
  if (client.kind === 'company')
    return (
      <CompanyAutocomplete label="Client" value={client}
        onChange={(c) => onChange({ ...COMPANY_BASE, ...c })} />
    )

  return (
    <ContactAutocomplete label="Client" value={client} allowCreate
      onChange={(c) => onChange({ ...CONTACT_BASE, ...c })} />
  )
}
