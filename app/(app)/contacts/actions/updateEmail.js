'use server'

import { updateEmail } from '@/lib/contacts/updateEmail'

export async function updateEmailAction(formData) {
  return updateEmail(formData.get('id'), formData.get('value'))
}
