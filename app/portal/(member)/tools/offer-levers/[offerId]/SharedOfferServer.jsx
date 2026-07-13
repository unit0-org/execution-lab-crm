import { notFound } from 'next/navigation'
import { getSharedOffer, listSharedInputs }
  from '@/lib/offerGenerator/controllers'
import { buildOfferDocument } from '../buildOfferDocument'
import { OfferReadView } from '../components/OfferReadView'

// The read-only path: render an offer shared with this member as a document
// (context, levers, generated offers). 404 when it isn't shared with them.
export async function SharedOfferServer({ member, offerId }) {
  const offer = await getSharedOffer(member.contactId, offerId)

  if (!offer) notFound()

  const inputs = await listSharedInputs(member.contactId, offerId)
  const doc = buildOfferDocument(offer, inputs)

  return <OfferReadView doc={doc} ownerName={offer.ownerName} />
}
