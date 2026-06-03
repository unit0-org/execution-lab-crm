'use server'

import { updateEmail } from '@/lib/contacts/updateEmail'

export async function updateEmailAction(formData) {
  return await updateEmail(formData.get('id'), formData.get('value'))
}
