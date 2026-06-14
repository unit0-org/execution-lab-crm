import { ContactFact } from '@/lib/contact/models'
import { contactInOrg } from './contactInOrg'

// Record a fact only when the contact has none with that label yet, so
// re-syncing a registration doesn't pile up duplicate facts.
export async function addFactIfMissing(orgId, contactId, label, value) {
  if (!value) return { ok: true }

  if (!await contactInOrg(orgId, contactId)) return { ok: true }

  await ContactFact.findOrCreate({
    where: { contact_id: contactId, label: label || null },
    defaults: { value }
  })

  return { ok: true }
}
