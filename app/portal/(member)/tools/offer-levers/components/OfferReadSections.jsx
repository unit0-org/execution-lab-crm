import { Stack } from '@/ui/layout/Stack'
import { OfferReadSection } from './OfferReadSection'

// Render each doc section (context, levers, generated offers) as a read-only
// card, in order.
export function OfferReadSections({ sections }) {
  return (
    <Stack gap="lg">
      {sections.map((section) => (
        <OfferReadSection key={section.heading} section={section} />
      ))}
    </Stack>
  )
}
