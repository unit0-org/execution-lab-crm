import { ContactFact } from '@/lib/contact/models'

// Add each fact unless (contact, label, value) already exists; count added.
export async function addFactsTx(contactId, facts, t) {
  let added = 0

  for (const fact of facts || []) {
    if (!fact || !fact.value) continue

    const [, created] = await ContactFact.findOrCreate({
      where: {
        contact_id: contactId, label: fact.label || null, value: fact.value
      },
      transaction: t
    })

    if (created) added += 1
  }

  return added
}
