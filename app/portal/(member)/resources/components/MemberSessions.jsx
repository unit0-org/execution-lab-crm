import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { MemberSession } from './MemberSession'

export function MemberSessions({ sessions }) {
  if (!sessions.length)
    return <Text size="sm">Nothing posted yet.</Text>

  return (
    <Stack gap="md">
      {sessions.map((session) => (
        <MemberSession key={session.label} session={session} />
      ))}
    </Stack>
  )
}
