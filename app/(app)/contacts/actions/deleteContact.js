'use server'

import { redirect } from 'next/navigation'
import { deleteContact } from '@/lib/contacts/remove'

export async function deleteContactAction(formData) {
  await deleteContact(formData.get('id'))
  redirect('/contacts')
}
