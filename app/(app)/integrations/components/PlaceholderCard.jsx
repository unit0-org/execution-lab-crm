import { Text } from '@/ui/Text'
import { IntegrationCard } from './IntegrationCard'

export function PlaceholderCard({ integration }) {
  return (
    <IntegrationCard integration={integration} status="available">
      <Text tone="muted" size="sm">Coming soon.</Text>
    </IntegrationCard>
  )
}
