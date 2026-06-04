import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { SegmentMembers } from './SegmentMembers'
import { MoreNote } from './MoreNote'

// One lead segment: title, member chips, and an overflow count.
export function SegmentCard({ segment }) {
  return (
    <Card>
      <Stack gap="sm">
        <Heading level={3} gutter="none">{segment.title}</Heading>
        <SegmentMembers items={segment.items} />
        <MoreNote more={segment.more} />
      </Stack>
    </Card>
  )
}
