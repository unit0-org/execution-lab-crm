import { OfferGeneratorInput } from '../models'

// Upsert a single-valued input (seed / audience / primary outcome, or a
// lever) — one row per type for the contact.
export async function setSingleInput(contactId, inputType, value) {
  await OfferGeneratorInput.setSingle(contactId, inputType, value)

  return { inputType, value }
}
