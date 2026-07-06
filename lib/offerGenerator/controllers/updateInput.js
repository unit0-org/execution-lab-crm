import { OfferGeneratorInput } from '../models'

// Edit one repeatable row's value (scoped to the contact).
export async function updateInput(contactId, id, value) {
  await OfferGeneratorInput.edit(contactId, id, value)

  return { id, value }
}
