'use server'

import { redirect } from 'next/navigation'
import { deleteContact } from '@/lib/contact/controllers/remove'
import { withMember } from '@/lib/auth/withMember'

export const deleteContactAction = withMember(
  async (formData) => {
    await deleteContact(formData.get('id'))
    redirect('/contacts')
  }
)
