import { Stack } from '@/ui/layout/Stack'
import { OfferReadHeader } from './OfferReadHeader'
import { OfferReadSections } from './OfferReadSections'
import { OfferCommentsSection } from './OfferCommentsSection'

// The read-only view of an offer shared with me: header, the offer document
// (context, levers, generated offers), then the shared discussion.
export function OfferReadView(props) {
  const { doc, ownerName, offerId, discussion, viewerContactId } = props

  return (
    <Stack gap="lg">
      <OfferReadHeader doc={doc} ownerName={ownerName} />
      <OfferReadSections sections={doc.sections} />
      <OfferCommentsSection offerId={offerId} initial={discussion.comments}
        audience={discussion.audience} viewerContactId={viewerContactId} />
    </Stack>
  )
}
