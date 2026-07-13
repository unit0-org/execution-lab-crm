import { OfferComment } from '../models'
import { Contact } from '@/lib/contact/models'
import { canViewOffer } from './canViewOffer'

const shape = (row) => {
  const c = row.toJSON()

  return {
    id: c.id, body: c.body, createdAt: c.created_at,
    authorContactId: c.author_contact_id,
    authorName: c.author?.full_name || null
  }
}

// An offer's comments oldest-first, each with its author's name. Empty when
// the caller can't see the offer.
export async function listOfferComments(contactId, offerId) {
  if (!await canViewOffer(contactId, offerId)) return []

  const rows = await OfferComment.findAll({
    where: { offer_id: offerId },
    include: [{ model: Contact, as: 'author' }],
    order: [['created_at', 'ASC']]
  })

  return rows.map(shape)
}
