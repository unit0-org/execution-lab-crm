import { ContactFact } from '@/lib/contact/models'

// Add each fact unless (contact, label, value) already exists, dating new
// rows to the meeting (factDate) rather than today. Returns count added.
export async function addFactsTx(contactId, facts, t, factDate) {
  let added = 0

  for (const fact of facts || []) {
    if (!fact || !fact.value) continue

    const where = {
      contact_id: contactId, label: fact.label || null, value: fact.value
    }
    const defaults = factDate ? { ...where, created_at: factDate } : where
    const [, created] = await ContactFact.findOrCreate({
      where, defaults, transaction: t
    })

    if (created) added += 1
  }

  return added
}
