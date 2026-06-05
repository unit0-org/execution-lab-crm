'use server'

import { updateFact } from '@/lib/contacts/updateFact'

export async function updateNuggetAction(formData) {
  const id = formData.get('id')
  const label = formData.get('label')

  return updateFact(id, label, formData.get('value'))
}
