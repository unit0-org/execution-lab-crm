import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { Inline } from '@/ui/layout/Inline'
import { GrowRow } from '@/ui/layout/GrowRow'
import { Text } from '@/ui/atoms/Text'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { MonoLink } from '@/ui/atoms/MonoLink'
import { DateText } from '@/ui/atoms/DateText'
import { InvoiceStatusBadge } from './InvoiceStatusBadge'

export function MemberInvoiceRow({ invoice }) {
  return (
    <Card>
      <GrowRow align="center">
        <Stack gap="xs">
          <MonoLabel size={11}>{invoice.number}</MonoLabel>
          <Text size="sm"><DateText value={invoice.date} /></Text>
        </Stack>
        <Inline gap="sm">
          <Text size="sm">{invoice.total}</Text>
          <InvoiceStatusBadge status={invoice.status} />
          <MonoLink href={invoice.pdfHref}>View</MonoLink>
        </Inline>
      </GrowRow>
    </Card>
  )
}
