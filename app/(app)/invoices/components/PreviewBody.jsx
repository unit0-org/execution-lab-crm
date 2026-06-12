import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'

export function PreviewBody({ preview }) {
  if (preview.error)
    return <Text tone="muted" size="sm">{preview.error}</Text>

  return (
    <Stack gap="xs">
      <Text size="sm">{preview.subject}</Text>
      <Text tone="muted" size="sm">{preview.body}</Text>
    </Stack>
  )
}
