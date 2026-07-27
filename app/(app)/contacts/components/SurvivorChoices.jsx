'use client'

import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { SurvivorOption } from './SurvivorOption'

// Only shown when the records disagree on one of the contact's own fields —
// with nothing in conflict, the survivor choice decides nothing.
export function SurvivorChoices(props) {
  const { contacts, conflicts, winnerId, onPick } = props

  if (!conflicts.length) return null

  return (
    <Stack gap="sm">
      <Text size="sm">Which version should the merged contact keep?</Text>
      {contacts.map((contact) => (
        <SurvivorOption key={contact.id} contact={contact}
          conflicts={conflicts} checked={contact.id === winnerId}
          onPick={onPick} />
      ))}
    </Stack>
  )
}
