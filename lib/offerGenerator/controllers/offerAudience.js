import { Offer, OfferShare } from '../models'
import { Contact, ContactEmail } from '@/lib/contact/models'

const withEmail = { model: ContactEmail, as: 'contact_email' }
const shape = (c) => ({
  contactId: c.id, name: c.full_name || null,
  email: c.contact_email?.[0]?.email || null
})

// Everyone who can see an offer — its owner plus every contact it's shared
// with — with name + primary email, for the mention picker and emails.
export async function offerAudience(offerId) {
  const offer = await Offer.findOne({
    where: { id: offerId },
    include: [{ model: Contact, include: [withEmail] }]
  })

  if (!offer) return []

  const ids = await OfferShare.contactIdsForOffer(offerId)
  const shared = await Contact.findAll({
    where: { id: ids }, include: [withEmail]
  })

  return [offer.contact, ...shared].filter(Boolean).map(shape)
}
