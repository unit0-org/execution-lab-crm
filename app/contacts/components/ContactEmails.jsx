import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'

export function ContactEmails({ emails }) {
  return (
    <Stack gap="xs">
      {emails.map((e) => <Text key={e.id} size="sm">{e.email}</Text>)}
    </Stack>
  )
}
