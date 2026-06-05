import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'

export function InvoiceTotals({ invoice }) {
  return (
    <Stack gap="xs">
      <Text>Subtotal: {invoice.subtotal}</Text>
      <Text>Tax: {invoice.tax}</Text>
      <Text size="lg">Total: {invoice.total}</Text>
    </Stack>
  )
}
