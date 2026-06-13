import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { TimelineBody } from './TimelineBody'

export function Timeline({ entries }) {
  return (
    <Stack gap="sm">
      <Heading level={3}>Activity</Heading>
      <TimelineBody entries={entries} />
    </Stack>
  )
}
