'use client'

import { Text } from '@/ui/atoms/Text'
import { useCompany } from '../hooks/useCompany'
import { useDocumentTitle } from '@/app/(app)/contacts/hooks/useDocumentTitle'
import { CompanyDetail } from './CompanyDetail'

export function CompanyDetailView(props) {
  const { initialCompany, initialContacts, initialInvoices } = props
  const seed = initialCompany
  const { company, refresh } = useCompany(seed?.id, seed)

  useDocumentTitle(company ? company.name : null)

  if (company === null) return <Text tone="muted">Company not found.</Text>

  return (
    <CompanyDetail company={company} onChanged={refresh}
      initialContacts={initialContacts} initialInvoices={initialInvoices} />
  )
}
