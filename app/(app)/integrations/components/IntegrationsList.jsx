import { Stack } from '@/ui/Stack'
import { INTEGRATIONS } from '../registry'
import { WorkspaceCard } from './WorkspaceCard'
import { PlaceholderCard } from './PlaceholderCard'

const others = () => INTEGRATIONS.filter((i) => i.key !== 'google-workspace')

export function IntegrationsList() {
  return (
    <Stack gap="md">
      <WorkspaceCard />
      {others().map((i) => <PlaceholderCard key={i.key} integration={i} />)}
    </Stack>
  )
}
