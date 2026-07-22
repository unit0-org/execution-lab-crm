'use client'

import { Collapsible } from '@/ui/molecules/Collapsible'
import { CompanyLinkList } from './CompanyLinkList'

// The companies a contact belongs to, with their role. Read-only here —
// links are managed from the company side.
export function ContactCompanies({ initial }) {
  return (
    <Collapsible title="Companies">
      <CompanyLinkList items={initial} />
    </Collapsible>
  )
}
