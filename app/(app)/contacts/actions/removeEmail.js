'use server'

import { removeEmail } from '@/lib/contacts/removeEmail'

export async function removeEmailAction(formData) {
  return removeEmail(formData.get('id'))
}
