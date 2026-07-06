import { OfferGeneratorInput } from '../models'

// Every offer input for a contact, as plain rows. Empty when there is no
// contact (e.g. an owner whose email maps to none).
export async function listInputs(contactId) {
  if (!contactId) return []

  const rows = await OfferGeneratorInput.forContact(contactId)

  return rows.map((row) => row.toJSON())
}
