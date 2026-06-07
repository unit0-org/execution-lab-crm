import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'

export function InvoiceTotalsPreview({ totals }) {
  return (
    <Stack gap="xs">
      <Text>Subtotal: {totals.subtotal}</Text>
      <Text>Tax: {totals.tax}</Text>
      <Text size="lg">Total: {totals.total}</Text>
    </Stack>
  )
}
