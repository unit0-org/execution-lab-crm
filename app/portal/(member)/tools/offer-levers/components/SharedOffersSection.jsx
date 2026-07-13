import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { SharedOfferCards } from './SharedOfferCards'

// The "Shared with me" list: offers other members shared with me, read-only.
// Renders nothing when none are shared with me.
export function SharedOffersSection({ offers }) {
  if (!offers.length) return null

  return (
    <Stack gap="xs">
      <SectionHeader title="Shared with me" />
      <SharedOfferCards offers={offers} />
    </Stack>
  )
}
