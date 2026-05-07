import { Heading } from '@/ui/Heading'
import { Text } from '@/ui/Text'

export function PersonName({ name, role, org }) {
  const subtitle = [role, org?.name].filter(Boolean).join(' @ ')

  return (
    <div>
      <Heading gutter="none">{name || 'Unnamed contact'}</Heading>
      {subtitle && <Text tone="muted" size="sm">{subtitle}</Text>}
    </div>
  )
}
