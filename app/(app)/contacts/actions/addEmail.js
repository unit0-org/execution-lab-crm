'use server'

import { addEmail } from '@/lib/contacts/addEmail'

export async function addEmailAction(formData) {
  const contactId = formData.get('contact_id')

  return await addEmail(contactId, formData.get('email'))
}
