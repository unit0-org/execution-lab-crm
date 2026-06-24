import { Stack } from '@/ui/layout/Stack'
import { Display } from '@/ui/atoms/Display'
import { Text } from '@/ui/atoms/Text'

export function ResourcesEmpty() {
  return (
    <Stack gap="md">
      <Display size="sm">Resources</Display>
      <Text size="sm">
        Your cohort’s notes, resources and recordings will appear here.
      </Text>
    </Stack>
  )
}
