import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'

// The charge amount, struck through with a note when refunded.
export function PurchaseAmount({ amount, refunded }) {
  if (!refunded) return amount

  return (
    <Inline gap="sm">
      <Text strike tone="muted">{amount}</Text>
      <Text tone="muted" size="sm">(refunded)</Text>
    </Inline>
  )
}
