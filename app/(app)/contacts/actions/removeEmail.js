'use server'

import { removeEmail } from '@/lib/contacts/removeEmail'

export async function removeEmailAction(formData) {
  return await removeEmail(formData.get('id'))
}
