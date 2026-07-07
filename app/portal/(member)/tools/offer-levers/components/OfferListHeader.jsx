import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { SectionHeader } from '@/ui/molecules/SectionHeader'

// The offers screen header: title with a + to create, and a blurb.
export function OfferListHeader({ onCreate }) {
  return (
    <Stack gap="xs">
      <SectionHeader title="Your offers" addLabel="New offer"
        onAdd={onCreate} />
      <Text size="sm" tone="muted">
        Each offer keeps its own context and levers — create as many as you
        like, then open one to configure it.
      </Text>
    </Stack>
  )
}
