import { Offer } from '../models'

// Create a new offer for a contact; returns the plain row (with id).
export async function createOffer(contactId, name = '') {
  const offer = await Offer.createFor(contactId, name)

  return offer.toJSON()
}
