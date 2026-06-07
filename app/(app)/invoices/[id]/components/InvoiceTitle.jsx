import { Stack } from '@/ui/layout/Stack'
import { Inline } from '@/ui/layout/Inline'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { StatusBadge } from '../../components/StatusBadge'

// Invoice number + status badge, with the client beneath.
export function InvoiceTitle({ invoice }) {
  return (
    <Stack gap="xs">
      <Inline gap="sm">
        <Heading gutter="none">{invoice.number}</Heading>
        <StatusBadge status={invoice.status} />
      </Inline>
      <Text>{invoice.bill_to_name}</Text>
      <Text tone="muted">{invoice.bill_to_email}</Text>
    </Stack>
  )
}
