import { Text } from '@/ui/Text'
import { Heading } from '@/ui/Heading'
import { cardStyle, headerStyle } from './IntegrationCard.styles'
import { StatusPill } from './StatusPill'

export function IntegrationCard({ integration, status, children }) {
  return (
    <article style={cardStyle}>
      <div style={headerStyle}>
        <Heading level={3} gutter="none">{integration.name}</Heading>
        <StatusPill status={status} />
      </div>
      <Text tone="muted" size="sm">{integration.description}</Text>
      {children}
    </article>
  )
}
