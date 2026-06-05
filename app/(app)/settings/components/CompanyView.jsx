'use client'

import { Text } from '@/ui/atoms/Text'
import { useCompanyProfile } from '../hooks/useCompanyProfile'
import { CompanyForm } from './CompanyForm'

export function CompanyView() {
  const profile = useCompanyProfile()

  if (profile === undefined) return <Text>Loading…</Text>

  const data = profile || {}

  return <CompanyForm profile={data} />
}
