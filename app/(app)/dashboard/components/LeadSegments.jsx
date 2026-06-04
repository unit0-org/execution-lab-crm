import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { CardGrid } from '@/ui/layout/CardGrid'
import { SegmentCard } from './SegmentCard'

// The lead segments, each rendered in its own card.
export function LeadSegments({ segments }) {
  return (
    <Stack gap="sm">
      <Heading level={2} gutter="none">Segments</Heading>
      <CardGrid>
        {segments.map((s) => <SegmentCard key={s.key} segment={s} />)}
      </CardGrid>
    </Stack>
  )
}
