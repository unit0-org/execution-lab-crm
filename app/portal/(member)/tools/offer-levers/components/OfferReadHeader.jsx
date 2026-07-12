import { Stack } from '@/ui/layout/Stack'
import { Inline } from '@/ui/layout/Inline'
import { Heading } from '@/ui/atoms/Heading'
import { Badge } from '@/ui/atoms/Badge'
import { Text } from '@/ui/atoms/Text'

const sharedBy = (name) => name ? 'Shared by ' + name : 'Shared with you'

// The read view's header: the offer name with a read-only badge, its
// version, and who shared it.
export function OfferReadHeader({ doc, ownerName }) {
  return (
    <Stack gap="xs">
      <Inline gap="sm">
        <Heading level={1} gutter="none">{doc.title}</Heading>
        <Badge tone="neutral">Read only</Badge>
      </Inline>
      <Text tone="muted" size="sm">{doc.subtitle} · {sharedBy(ownerName)}</Text>
    </Stack>
  )
}
