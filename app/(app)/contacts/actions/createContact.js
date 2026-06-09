'use server'

import { redirect } from 'next/navigation'
import { createContact } from '@/lib/contacts/create'
import { readContactForm } from '@/lib/contacts/form'
import { withOrg } from '@/lib/auth/withOrg'

export const createContactAction = withOrg(
  async (organizationId, formData) => {
    const { first, last, emails } = readContactForm(formData)
    const res = await createContact(organizationId, first, last, emails)

    if (res.error) return { error: res.error }

    redirect(`/contacts/${res.id}`)
  }
)
