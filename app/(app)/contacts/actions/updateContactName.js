'use server'

import { updateContact } from '@/lib/contacts/update'

export async function updateContactNameAction(formData) {
  const id = formData.get('id')

  return await updateContact(id, {
    first_name: formData.get('first_name') || null,
    last_name: formData.get('last_name') || null
  })
}
