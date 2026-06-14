'use server'

import { redirect } from 'next/navigation'
import { createContact } from '@/lib/contact/controllers/create'
import { readContactForm } from '@/lib/contact/controllers/form'
import { withMember } from '@/lib/auth/withMember'

export const createContactAction = withMember(
  async (formData) => {
    const { first, last, emails } = readContactForm(formData)
    const res = await createContact(first, last, emails)

    if (res.error) return { error: res.error }

    redirect(`/contacts/${res.id}`)
  }
)
