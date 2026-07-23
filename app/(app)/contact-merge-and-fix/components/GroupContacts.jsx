'use client'

import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { contactLine } from '../hooks/contactLine'

export function GroupContacts({ contacts }) {
  return (
    <Stack gap="xs">
      {contacts.map((contact) => (
        <Text key={contact.id} size="sm">{contactLine(contact)}</Text>
      ))}
    </Stack>
  )
}
