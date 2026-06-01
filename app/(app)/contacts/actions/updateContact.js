'use server'

import { updateContact } from '@/lib/contacts/update'

export async function updateContactAction(formData) {
  const id = formData.get('id')
  const value = formData.get('value') || null
  await updateContact(id, { [formData.get('field')]: value })

  return { ok: true }
}
