import { Stack } from '@/ui/layout/Stack'
import { OfferReadHeader } from './OfferReadHeader'
import { OfferReadSections } from './OfferReadSections'

// The read-only view of an offer shared with me: a header (name, version,
// who shared it) over the offer's context, levers and generated offers.
export function OfferReadView({ doc, ownerName }) {
  return (
    <Stack gap="lg">
      <OfferReadHeader doc={doc} ownerName={ownerName} />
      <OfferReadSections sections={doc.sections} />
    </Stack>
  )
}
