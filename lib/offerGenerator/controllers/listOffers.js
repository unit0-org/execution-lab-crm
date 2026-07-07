import { Offer } from '../models'

// Every offer a contact owns, newest first, as plain rows.
export async function listOffers(contactId) {
  if (!contactId) return []

  const rows = await Offer.forContact(contactId)

  return rows.map((row) => row.toJSON())
}
