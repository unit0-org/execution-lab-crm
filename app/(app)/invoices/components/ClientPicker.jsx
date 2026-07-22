'use client'

import { Stack } from '@/ui/layout/Stack'
import { ClientKindToggle } from './ClientKindToggle'
import { ClientField } from './ClientField'

// Invoice bill-to: choose a person or a company (mutually exclusive).
export function ClientPicker({ client, onChange }) {
  return (
    <Stack gap="sm">
      <ClientKindToggle client={client} onChange={onChange} />
      <ClientField client={client} onChange={onChange} />
    </Stack>
  )
}
