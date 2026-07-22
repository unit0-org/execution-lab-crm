'use client'

import { Select } from '@/ui/atoms/Select'
import { emptyClient } from '../hooks/emptyClient'

const KIND_OPTIONS = [
  { value: 'contact', label: 'Person' },
  { value: 'company', label: 'Company' }
]

// Switch the bill-to between a person and a company, resetting the pick.
export function ClientKindToggle({ client, onChange }) {
  const onKind = (e) => onChange(emptyClient(e.target.value))

  return (
    <Select label="Bill to" options={KIND_OPTIONS} value={client.kind}
      onChange={onKind} />
  )
}
