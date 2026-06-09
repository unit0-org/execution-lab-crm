'use server'

import { updateContact } from '@/lib/contacts/update'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function updateContactAction(formData) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  const id = formData.get('id')
  const value = formData.get('value') || null
  await updateContact(m.organizationId, id, { [formData.get('field')]: value })

  return { ok: true }
}
