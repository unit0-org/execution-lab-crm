'use client'

import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { SurvivorOption } from './SurvivorOption'

export function SurvivorChoices({ contacts, winnerId, onPick }) {
  return (
    <Stack gap="sm">
      <Text size="sm">Which contact to keep?</Text>
      {contacts.map((c) => (
        <SurvivorOption key={c.id} contact={c}
          checked={c.id === winnerId} onPick={onPick} />
      ))}
    </Stack>
  )
}
