'use server'

import { redirect } from 'next/navigation'
import { deleteContact } from '@/lib/contacts/remove'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function deleteContactAction(formData) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  await deleteContact(m.organizationId, formData.get('id'))
  redirect('/contacts')
}
