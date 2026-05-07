import { Card } from '@/ui/Card'
import { CardHeader } from '@/ui/CardHeader'
import { Heading } from '@/ui/Heading'
import { Text } from '@/ui/Text'
import { StatusPill } from './StatusPill'

export function IntegrationCard({ integration, status, children }) {
  return (
    <Card>
      <CardHeader
        title={<Heading level={3} gutter="none">{integration.name}</Heading>}
        actions={<StatusPill status={status} />}
      />
      <Text tone="muted" size="sm">{integration.description}</Text>
      {children}
    </Card>
  )
}
