'use server'

import { removeFact } from '@/lib/contacts/removeFact'

export async function removeNuggetAction(formData) {
  return removeFact(formData.get('id'))
}
