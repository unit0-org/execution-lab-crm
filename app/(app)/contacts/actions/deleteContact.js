'use server'

import { redirect } from 'next/navigation'
import { deleteContact } from '@/lib/contacts/remove'
import { withOrg } from '@/lib/auth/withOrg'

export const deleteContactAction = withOrg(
  async (organizationId, formData) => {
    await deleteContact(organizationId, formData.get('id'))
    redirect('/contacts')
  }
)
