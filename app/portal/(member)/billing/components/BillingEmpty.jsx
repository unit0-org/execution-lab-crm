import { Stack } from '@/ui/layout/Stack'
import { Display } from '@/ui/atoms/Display'
import { Text } from '@/ui/atoms/Text'

export function BillingEmpty() {
  return (
    <Stack gap="md">
      <Display size="sm">Billing</Display>
      <Text size="sm">
        Invoices issued to you will appear here.
      </Text>
    </Stack>
  )
}
