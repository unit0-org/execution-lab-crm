import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { FunnelFlow } from '@/ui/molecules/FunnelFlow'
import { funnelStages } from './funnelStages'

// The funnel itself: attended → nurturing → clients, with the share that
// carried from each stage to the next on the arrow between them. Each
// stage links to the people behind it, carrying the same filter.
export function FunnelPanel({ funnel, filter }) {
  return (
    <Card>
      <Stack gap="md">
        <Heading level={2} gutter="none">Funnel</Heading>
        <FunnelFlow stages={funnelStages(funnel, filter)}
          steps={funnel.steps} />
      </Stack>
    </Card>
  )
}
