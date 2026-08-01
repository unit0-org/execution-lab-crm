import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { FunnelFlow } from '@/ui/molecules/FunnelFlow'
import { funnelStages } from './funnelStages'

// The funnel itself: attended → nurturing → clients, with the share that
// carried from each stage to the next on the arrow between them.
export function FunnelPanel({ funnel }) {
  return (
    <Card>
      <Stack gap="md">
        <Heading level={2} gutter="none">Funnel</Heading>
        <FunnelFlow stages={funnelStages(funnel)} steps={funnel.steps} />
      </Stack>
    </Card>
  )
}
