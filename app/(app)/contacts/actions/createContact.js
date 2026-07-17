'use server'

import { redirect } from 'next/navigation'
import { createContact } from '@/lib/contact/controllers/create'
import { readContactForm } from '@/lib/contact/controllers/form'
import { withMember } from '@/lib/auth/withMember'

// The new contact's page, flagging any email it could not take because that
// email already belongs to someone else.
const contactPath = (id, emailsInUse) => {
  if (!emailsInUse.length) return `/contacts/${id}`

  const inUse = encodeURIComponent(emailsInUse.join(', '))

  return `/contacts/${id}?emailInUse=${inUse}`
}

export const createContactAction = withMember(
  async (formData) => {
    const { first, last, emails } = readContactForm(formData)
    const res = await createContact(first, last, emails)

    if (res.error) return { error: res.error }

    redirect(contactPath(res.id, res.emailsInUse))
  }
)
