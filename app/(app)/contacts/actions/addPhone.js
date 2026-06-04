'use server'

import { addPhone } from '@/lib/contacts/addPhone'

export async function addPhoneAction(formData) {
  const contactId = formData.get('contact_id')

  return addPhone(contactId, formData.get('phone'))
}
