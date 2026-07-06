import { OfferGeneratorInput } from '../models'

// Delete one repeatable row (scoped to the contact).
export async function removeInput(contactId, id) {
  await OfferGeneratorInput.remove(contactId, id)

  return { id, removed: true }
}
