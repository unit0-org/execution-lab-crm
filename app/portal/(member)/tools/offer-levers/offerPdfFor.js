import { getOffer, listInputs } from '@/lib/offerGenerator/controllers'
import { renderDocumentPdf } from '@/lib/pdf/renderDocumentPdf'
import { buildOfferDocument } from './buildOfferDocument'

// The branded PDF for an offer the contact owns (its name + bytes), or null
// when the offer isn't theirs. Backs the export route.
export async function offerPdfFor(contactId, offerId) {
  const offer = await getOffer(contactId, offerId)

  if (!offer) return null

  const inputs = await listInputs(contactId, offerId)
  const doc = buildOfferDocument(offer, inputs)

  return { name: offer.name, pdf: await renderDocumentPdf(doc) }
}
