'use server'

import { addFact } from '@/lib/contacts/addFact'

export async function addNuggetAction(formData) {
  const contactId = formData.get('contact_id')
  const label = formData.get('label')

  return await addFact(contactId, label, formData.get('value'))
}
