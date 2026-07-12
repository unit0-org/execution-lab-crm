import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'
import { RowSecondary } from './RowSecondary'

// One digest row: a primary label with an optional muted detail.
export function DigestRow({ row }) {
  return (
    <Inline gap="sm">
      <Text>{row.primary}</Text>
      <RowSecondary text={row.secondary} />
    </Inline>
  )
}
