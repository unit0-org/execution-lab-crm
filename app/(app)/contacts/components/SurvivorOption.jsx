'use client'

import { Inline } from '@/ui/layout/Inline'
import { Radio } from '@/ui/atoms/Radio'
import { Text } from '@/ui/atoms/Text'

const name = (c) =>
  [c.first_name, c.last_name].filter(Boolean).join(' ')

const emails = (c) =>
  (c.contact_email || []).map((e) => e.email).join(', ')

const label = (c) =>
  [name(c), emails(c)].filter(Boolean).join(' — ') || 'Unnamed contact'

export function SurvivorOption({ contact, checked, onPick }) {
  return (
    <Inline gap="sm">
      <Radio checked={checked} onChange={() => onPick(contact.id)}
        label="Keep this contact" />
      <Text size="sm">{label(contact)}</Text>
    </Inline>
  )
}
