import { ContactFact } from '@/lib/db/models'

export async function addFact(contactId, label, value) {
  if (!value) return { error: 'A value is required' }

  await ContactFact.create({
    contact_id: contactId,
    label: label || null,
    value
  })

  return { ok: true }
}
