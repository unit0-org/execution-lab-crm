import { ContactFact } from '@/lib/db/models'

export async function updateFact(id, label, value) {
  if (!value) return { error: 'A value is required' }

  const update = { label: label || null, value }

  await ContactFact.update(update, { where: { id } })

  return { ok: true }
}
