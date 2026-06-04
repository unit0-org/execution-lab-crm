'use server'

import { updatePhone } from '@/lib/contacts/updatePhone'

export async function updatePhoneAction(formData) {
  return updatePhone(formData.get('id'), formData.get('value'))
}
