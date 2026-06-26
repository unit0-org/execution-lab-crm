import { Stack } from '@/ui/layout/Stack'
import { Display } from '@/ui/atoms/Display'
import { Text } from '@/ui/atoms/Text'

export function ToolsEmpty() {
  return (
    <Stack gap="md">
      <Display size="sm">Tools</Display>
      <Text size="sm">
        Tools we’ve shared with you will appear here.
      </Text>
    </Stack>
  )
}
