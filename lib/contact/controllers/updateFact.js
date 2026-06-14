import { ContactFact } from '@/lib/contact/models'
import { ownedByOrg } from './ownedByOrg'

export async function updateFact(organizationId, id, label, value) {
  if (!value) return { error: 'A value is required' }

  if (!await ownedByOrg(ContactFact, id, organizationId)) return { ok: true }

  const update = { label: label || null, value }

  await ContactFact.update(update, { where: { id } })

  return { ok: true }
}
