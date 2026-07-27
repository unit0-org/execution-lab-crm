'use client'

import { Inline } from '@/ui/layout/Inline'
import { Stack } from '@/ui/layout/Stack'
import { Radio } from '@/ui/atoms/Radio'
import { Text } from '@/ui/atoms/Text'
import { conflictValue } from '../hooks/mergeConflicts'
import { survivorLabel } from '../hooks/survivorLabel'

// The values at stake, so two records that read alike are still tellable
// apart when what differs is the LinkedIn, photo or birthday.
const differences = (contact, conflicts) =>
  conflicts.map((field) => conflictValue(contact, field)).join(' · ')

export function SurvivorOption({ contact, conflicts, checked, onPick }) {
  return (
    <Inline gap="sm" nowrap align="start">
      <Radio checked={checked} onChange={() => onPick(contact.id)}
        label="Keep this version" />
      <Stack gap="xs">
        <Text size="sm">{survivorLabel(contact)}</Text>
        <Text size="sm" tone="muted">{differences(contact, conflicts)}</Text>
      </Stack>
    </Inline>
  )
}
