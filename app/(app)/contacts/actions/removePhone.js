'use server'

import { removePhone } from '@/lib/contacts/removePhone'

export async function removePhoneAction(formData) {
  return removePhone(formData.get('id'))
}
