import { notFound } from 'next/navigation'
import { getSharedOffer, listSharedInputs }
  from '@/lib/offerGenerator/controllers'
import { buildOfferDocument } from '../buildOfferDocument'
import { OfferReadView } from '../components/OfferReadView'
import { loadDiscussion } from '../loadDiscussion'

// The read-only path: render an offer shared with this member as a document
// (context, levers, generated offers) plus the shared discussion. 404 when
// it isn't shared with them.
export async function SharedOfferServer({ member, offerId }) {
  const offer = await getSharedOffer(member.contactId, offerId)

  if (!offer) notFound()

  const inputs = await listSharedInputs(member.contactId, offerId)
  const doc = buildOfferDocument(offer, inputs)
  const discussion = await loadDiscussion(member.contactId, offerId)

  return <OfferReadView doc={doc} ownerName={offer.ownerName}
    offerId={offerId} discussion={discussion}
    viewerContactId={member.contactId} />
}
