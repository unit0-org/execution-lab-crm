import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { BestEventsBody } from './BestEventsBody'
import { BestEventsFootnote } from './BestEventsFootnote'

// Which events actually produce clients, best first — the one table that
// says where the next event should be aimed.
export function BestEventsCard({ events }) {
  return (
    <Card>
      <Stack gap="md">
        <Heading level={2} gutter="none">Best converting events</Heading>
        <BestEventsBody events={events} />
        <BestEventsFootnote events={events} />
      </Stack>
    </Card>
  )
}
